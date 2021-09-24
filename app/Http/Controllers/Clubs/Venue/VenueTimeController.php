<?php

namespace App\Http\Controllers\Clubs\Venue;

use App\Http\Controllers\Controller;
use App\Models\VenueTime;
use Illuminate\Http\Request;

class VenueTimeController extends Controller
{
    public function show($venueId)
    {
        return VenueTime::where('venue_id', $venueId)->get();
    }

    public function withinOpenTime($venueId, Request $request) {
        $venueTime = VenueTime::where('venue_id', $venueId)->get()[0];

        if (VenueTimeController::isWeekday($request->date)) {
            if (($venueTime->start_time_wd <= $request->start_time && $request->start_time <= $venueTime->end_time_wd)
                && ($venueTime->start_time_wd <= $request->end_time && $request->end_time <= $venueTime->end_time_wd))
                return true;
            else return false;
        }
        else {
            if (($venueTime->start_time_we <= $request->start_time && $request->start_time <= $venueTime->end_time_we)
                && ($venueTime->start_time_we <= $request->end_time && $request->end_time <= $venueTime->end_time_we))
                return true;
            else return false;
        }
    }

    static function isWeekday($date) {
        //Convert the date string into a unix timestamp.
        $unixTimestamp = strtotime($date);

        //Get the day of the week using PHP's date function.
        $dayOfWeek = date("l", $unixTimestamp);

        if ($dayOfWeek == 'Saturday' || $dayOfWeek == 'Sunday') return false;
        else return true;
    }
}
