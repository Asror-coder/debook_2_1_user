<?php

namespace App\Http\Controllers\Clubs\Venue;

use App\Http\Controllers\Booking\BookingController;
use App\Http\Controllers\Controller;
use App\Models\Venue;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\DB;

class VenueController extends Controller
{
    public function checkAvailability($id, Request $request) {

        $venueTimeController = new VenueTimeController;
        if (!$venueTimeController->withinOpenTime($id,$request)) return false;

        $bookingController = new BookingController;
        if (!$bookingController->availableBookingSlot($id,$request)) return false;

        return true;
    }

    public function show($id) {
        return Venue::find($id);
    }
}
