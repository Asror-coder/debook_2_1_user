<?php

namespace App\Http\Controllers\Booking;

use App\Http\Controllers\Clubs\ClubsController;
use App\Http\Controllers\Clubs\ServiceController;
use App\Http\Controllers\Clubs\Venue\VenueController;
use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getActiveBookings($userId)
    {
        // $bookings = Booking::where('user_id', $userId)
        //               ->where('status_id', 1)
        //               ->orderBy('date', 'asc')
        //               ->orderBy('start_time', 'asc')
        //               ->get();

        // if (!$bookings) return $bookings;
        // else return BookingController::getFullInformation($bookings);

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

            $newBooking->save();

            return $newBooking;
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function cancelBooking($id)
    {
        //
    }

    public function availableBookingSlot($venueId, Request $request) {
        $bookings = Booking::where('venue_id', $venueId)
                           ->where('date', $request->date)
                           ->where('status_id', 1)
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
