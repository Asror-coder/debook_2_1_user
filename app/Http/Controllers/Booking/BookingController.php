<?php

namespace App\Http\Controllers\Booking;

use App\Http\Controllers\Clubs\ClubsController;
use App\Http\Controllers\Clubs\ServiceController;
use App\Http\Controllers\Clubs\Venue\VenueController;
use App\Http\Controllers\Controller;
use App\Models\Booking;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getActiveBookings($userId)
    {
        $bookings = Booking::where('user_id', $userId)
                      ->where('status_id', 1)
                      ->orderBy('date', 'asc')
                      ->orderBy('start_time', 'asc')
                      ->paginate(5);

        if ($bookings->count() == 0) return $bookings;
        else {
            $fullInfo[0] = BookingController::getFullInformation($bookings);
            $fullInfo[1] = $bookings;
            return $fullInfo;
        }
    }

    public function getNotActiveBookings($userId)
    {
        $bookings = Booking::where('user_id', $userId)
                      ->where('status_id', '!=', 1)
                      ->orderBy('date', 'desc')
                      ->orderBy('start_time', 'desc')
                      ->paginate(5);

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

        if($venueController->checkAvailability($request->venue_id, $request)) {
            $newBooking = new Booking();

            $newBooking->user_id = $request->user()->id;
            $newBooking->venue_id = $request->venue_id;
            $newBooking->status_id = 1;
            $newBooking->price = $request->price;
            $newBooking->date = $request->date;
            $newBooking->start_time = $request->start_time;
            $newBooking->end_time = $request->end_time;

            $venue = DB::table('venues')->where('id',$request->venue_id)->first();

            if (DB::table('partner_api')->where('partner_id',$venue->partner_id)->first()) {
                $bookingApiController = new BookingApiController;
                $apiResponse = json_decode($bookingApiController->book($newBooking));

                if ($apiResponse->data->createReservation->id) {
                    $newBooking->partner_booking_id = $apiResponse->data->createReservation->id;
                    $newBooking->save();

                    return $newBooking;
                }
                else return [
                        'message' => 'The provided time slot is not available anymore.'
                    ];
            }
            else {
                $newBooking->save();
                return $newBooking;
            }
        }
        else {
            return [
                'message' => 'The provided time slot is not available anymore.'
            ];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return DB::table('bookings')
                ->join('venues','bookings.venue_id','=','venues.id')
                ->join('services','venues.service_id','=','services.id')
                ->join('partner_details','venues.partner_id','=','partner_details.partner_id')
                ->select('bookings.*','venues.name as venueName','partner_details.name as clubName',
                         'services.sport_type as sport','services.surface','services.indoor')
                ->where('bookings.id','=',$id)
                ->get();
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

                if ($apiResponse->data->cancelReservation->cancelled) {
                    $booking->update(['status_id' => 4]);
                    $booking->update(['updated_at' => Carbon::now()]);
                    return response([
                        'message' => ['Success']
                    ]);
                }
                else return response([
                    'message' => ['Something went wrong with cancelation. Please, try again later.']
                ]);
            }
            else {
                $booking->update(['status_id' => 4]);
                $booking->update(['updated_at' => Carbon::now()]);
                return response([
                    'message' => ['Success']
                ]);
            }
        }
        else return response([
            'message' => ['Booking cannot be canceled within 12 hours before the start time.']
        ]);
    }

    // This function checks whether booking is not being canceled within 12 hours before the booking start time.
    private function canBeCanceled($booking)
    {
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
}
