<?php

namespace App\Http\Controllers\Booking;

use App\Http\Controllers\Clubs\ClubsController;
use App\Http\Controllers\Clubs\ServiceController;
use App\Http\Controllers\Clubs\Venue\VenueController;
use App\Http\Controllers\Clubs\Venue\VenuePriceController;
use App\Http\Controllers\Controller;
use App\Mail\CancelBooking;
use App\Mail\NewBooking;
use App\Models\Booking;
use App\Models\User;
use Carbon\Carbon;
use Facade\FlareClient\Http\Response;
use Hamcrest\Type\IsNumeric;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getActiveBookings()
    {
        $bookings = Booking::where('user_id', Auth::user()->id)
                      ->where('status_id', 1)
                      ->orderBy('date', 'asc')
                      ->orderBy('start_time', 'asc')
                      ->paginate(6);

        if ($bookings->count() == 0) return $bookings;
        else {
            $fullInfo[0] = BookingController::getFullInformation($bookings);
            $fullInfo[1] = $bookings;
            return $fullInfo;
        }
    }

    public function getNotActiveBookings()
    {
        $bookings = Booking::where('user_id', Auth::user()->id)
                      ->where('status_id', '!=', 1)
                      ->where('status_id', '!=', 6)
                      ->orderBy('date', 'desc')
                      ->orderBy('start_time', 'desc')
                      ->paginate(6);

        if ($bookings->count() == 0) return $bookings;
        else {
            $fullInfo[0] = BookingController::getFullInformation($bookings);
            $fullInfo[1] = $bookings;
            return $fullInfo;
        }
    }

    static function getFullInformation($bookings) {
        $venueController = new VenueController;
        $serviceController = new ServiceController;
        $clubController = new ClubsController;

        $i = 0;
        foreach ($bookings as $booking) {
            $venue = $venueController->show($booking->venue_id);

            $fullInfoBookings[$i][0] = $booking;
            $fullInfoBookings[$i][1] = $venue;
            $fullInfoBookings[$i][2] = $serviceController->show($venue->service_id);
            $fullInfoBookings[$i][3] = $clubController->getClub($venue->partner_id);
            $i++;
        }
        return $fullInfoBookings;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $venueController = new VenueController;
        $venuePriceController = new VenuePriceController;

        if($venueController->checkAvailability($request->venue_id, $request)) {
            $newBooking = new Booking();

            $newBooking->user_id = $request->user()->id;
            $newBooking->venue_id = $request->venue_id;
            $newBooking->price = $venuePriceController->calculatePrice($request->venue_id,$request);
            $newBooking->date = $request->date;
            $newBooking->start_time = $request->start_time;
            $newBooking->end_time = $request->end_time;
            $newBooking->status_id = 6;

            $venue = DB::table('venues')->where('id',$request->venue_id)->first();

            if (DB::table('partner_api')->where('partner_id',$venue->partner_id)->first()) {
                $bookingApiController = new BookingApiController;
                $apiResponse = json_decode($bookingApiController->book($newBooking));

                if ($apiResponse->data->createReservation->id)
                    $newBooking->partner_booking_id = $apiResponse->data->createReservation->id;
                else return [
                        'message' => 'The provided time slot is not available anymore.'
                    ];
            }

            $newBooking->save();

            $mollieController = new MollieController;
            $payment = $mollieController->preparePayment(json_encode([
                'id' => $this->encryptBookingId($newBooking->id),  //Implement reservation numbers
                'price' => $newBooking->price,
            ]));

            $payment_id = json_decode(json_encode($payment->original))->payment_id;
            $url = json_decode(json_encode($payment->original))->url;

            $this->setPaymentId($newBooking->id, $payment_id);

            return $url;        //CHANGE
            // return  redirect()->away($url,303)
            //         ->header('Access-Control-Allow-Origin', '*')
            //         ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        }
        else {
            return [
                'message' => 'The provided time slot is not available anymore.'
            ];
        }
    }

    public function hasPaidBooking($payment_id) {
        // change booking status_id to 1 (active)
        $booking = Booking::where('payment_id',$payment_id)->first();
        $booking->update(['status_id' => 1]);
        $booking->update(['updated_at' => Carbon::now()]);

        //send success email
        $user = User::find($booking->user_id);

        Mail::to($user->email)->send(new NewBooking($this->prepareEmailInfo($booking->id)));
    }

    public function hasRefundedBooking($payment_id) {
        // change booking status_id to 7 (refunded)
        $booking = Booking::where('payment_id',$payment_id)->first();
        $booking->update(['status_id' => 7]);
        $booking->update(['updated_at' => Carbon::now()]);
    }

    public function destroyBooking($payment_id) {
        $booking = Booking::where('payment_id',$payment_id)->first();

        //cancel booking on partner side
        if ($booking->partner_booking_id) {
            $bookingApiController = new BookingApiController;
            $bookingApiController->cancel($booking);
        }

        //remove booking from DB
        $booking->delete();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!is_numeric($id)) $real_id = $this->decryptBookingId($id);
        else $real_id = $id;

        return DB::table('bookings')
                ->join('venues','bookings.venue_id','=','venues.id')
                ->join('services','venues.service_id','=','services.id')
                ->join('partner_details','venues.partner_id','=','partner_details.partner_id')
                ->select('bookings.*','venues.name as venueName','partner_details.name as clubName',
                         'services.sport_type as sport','services.surface','services.indoor','partner_details.phone',)
                ->where('bookings.id','=',$real_id)
                ->get();
    }

    public function getNewBooking($id)
    {
        $real_id = $this->decryptBookingId($id);

        if (is_numeric($real_id))
            return DB::table('bookings')
                ->join('venues','bookings.venue_id','=','venues.id')
                ->join('services','venues.service_id','=','services.id')
                ->join('partner_details','venues.partner_id','=','partner_details.partner_id')
                ->select('bookings.date','bookings.price','bookings.start_time','bookings.end_time',
                        'venues.name as venueName','partner_details.name as clubName','partner_details.phone',
                        'services.sport_type as sport','services.surface','services.indoor')
                ->where('bookings.id','=',$real_id)
                // ->where('bookings.status_id','=',1)      //put it back
                ->get();
        // else $real_id;
    }

    /**
     * Cancel the specified booking in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function cancel($id)
    {
        $booking = Booking::find($id);

        if ($booking->user_id != Auth::user()->id) {
            return response([
                'message' => ['This booking does not belong to authorised user.']
            ], 404);
        }

        if ($this->canBeCanceled($booking)) {
            if ($booking->partner_booking_id) {
                $bookingApiController = new BookingApiController;
                $apiResponse = json_decode($bookingApiController->cancel($booking));

                if (!$apiResponse->data->cancelReservation->cancelled)
                    return response([
                        'message' => ['Something went wrong with cancelation. Please, try again later.']
                    ]);
            }

            if ($booking->payment_id) {
                $mollieController = new MollieController;
                $mollieController->refundPayment(json_encode([
                    'payment_id' => $booking->payment_id,
                    'price' => $booking->price,
                ]));
            }

            $booking->update(['status_id' => 4]);
            $booking->update(['updated_at' => Carbon::now()]);

            $user = User::find($booking->user_id);

            Mail::to($user->email)->send(new CancelBooking($this->prepareEmailInfo($booking->id)));

            return response([
                'message' => ['Success']
            ]);
        }
        else return response([
            'message' => ['Booking cannot be canceled within 12 hours before the start time.']
        ]);
    }

    // This function checks whether booking is not being canceled within 12 hours before the booking start time.
    private function canBeCanceled($booking)
    {
        if ($booking->status_id != 1) return false;

        $currentDate = Carbon::now()->toDateString();

        if (Carbon::now()->toTimeString()[3] > 0)
            $currentTime = Carbon::now()->toTimeString()[0].(Carbon::now()->toTimeString()[1]+1);
        else $currentTime = Carbon::now()->toTimeString()[0].Carbon::now()->toTimeString()[1];

        // starts before 12:00
        if ($booking->start_time < 12) {
            if (($currentDate >= $booking->date) ||
                ($currentDate < $booking->date && $currentTime > $booking->start_time+12))
                return false;
        }
        // starts after 12:00
        else if ($currentDate >= $booking->date && $currentTime > $booking->start_time-12)
            return false;

        return true;
    }

    public function availableBookingSlot($venueId, Request $request)
    {
        $bookings = Booking::where('venue_id', $venueId)
                           ->where('date', $request->date)
                           ->where('status_id', '!=', 3)
                           ->get();

        if (!$bookings) return true;
        else {
            foreach ($bookings as $booking) {
                if (($booking->start_time <= $request->start_time && $request->start_time < $booking->end_time)
                     || ($booking->start_time < $request->end_time && $request->end_time < $booking->end_time))
                    return false;
            }
            return true;
        }
    }

    private function encryptBookingId ($id)
    {
        $value = $id * 34251258;
        $ciphering = "AES-128-CTR";

        return openssl_encrypt($value, $ciphering, env('ENC_DEC_KEY'), 0, env('ENC_DEC_IV'));;
    }

    private function decryptBookingId ($value)
    {
        $ciphering = "AES-128-CTR";
        $number = openssl_decrypt($value, $ciphering, env('ENC_DEC_KEY'), 0, env('ENC_DEC_IV'));

        if (is_numeric($number)) return $number / 34251258;
        else Response()->json([
            'message' => 'non-numeric'
        ]);
    }

    private function setPaymentId ($id, $payment_id)
    {
        $booking = Booking::find($id);
        $booking->update(['payment_id' => $payment_id]);
        $booking->update(['updated_at' => Carbon::now()]);
    }

    private function prepareEmailInfo($id)
    {
        $fullInfo = $this->show($id)[0];
        $user = User::find($fullInfo->user_id);

        if ($fullInfo->indoor == 1) $indoor = 'indoor';
        else $indoor = 'outdoor';

        return [
            'username' => $user->name.' '.$user->lastname,
            'clubName' => $fullInfo->clubName,
            'sport' => $fullInfo->sport,
            'venue' => $fullInfo->venueName,
            'surface' => $fullInfo->surface,
            'indoor' => $indoor,
            'date' => $this->changeDate($fullInfo->date),
            'start_time' => sprintf("%02d", $fullInfo->start_time).':00',
            'end_time' => sprintf("%02d", $fullInfo->end_time).':00',
            'price' => $fullInfo->price
        ];
    }

    private function changeDate($date)
    {
        $dateArr = explode("-",$date);

        if ($dateArr[1] == '01') return $dateArr[2]+' January, '.$dateArr[0];
        else if ($dateArr[1] == '02') return $dateArr[2].' February, '.$dateArr[0];
        else if ($dateArr[1] == '03') return $dateArr[2].' March, '.$dateArr[0];
        else if ($dateArr[1] == '04') return $dateArr[2].' April, '.$dateArr[0];
        else if ($dateArr[1] == '05') return $dateArr[2].' May, '.$dateArr[0];
        else if ($dateArr[1] == '06') return $dateArr[2].' June, '.$dateArr[0];
        else if ($dateArr[1] == '07') return $dateArr[2].' July, '.$dateArr[0];
        else if ($dateArr[1] == '08') return $dateArr[2].' August, '.$dateArr[0];
        else if ($dateArr[1] == '09') return $dateArr[2].' September, '.$dateArr[0];
        else if ($dateArr[1] == '10') return $dateArr[2].' October, '.$dateArr[0];
        else if ($dateArr[1] == '11') return $dateArr[2].' November, '.$dateArr[0];
        else if ($dateArr[1] == '12') return $dateArr[2].' December, '.$dateArr[0];
    }
}
