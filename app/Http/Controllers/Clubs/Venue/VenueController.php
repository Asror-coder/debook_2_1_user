<?php

namespace App\Http\Controllers\Clubs\Venue;

use App\Http\Controllers\Booking\BookingController;
use App\Http\Controllers\Controller;
use App\Models\Venue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function getFullInfo($id) {
        return DB::table('venues')
                    ->join('partner_details','venues.partner_id','=','partner_details.partner_id')
                    ->join('services','venues.service_id','=','services.id')
                    ->select('venues.id','venues.partner_id','venues.name as venueName',
                            'partner_details.name as clubName','partner_details.phone',
                            'services.sport_type','services.surface','services.indoor')
                    ->where('venues.id',$id)
                    ->get();
    }
}
