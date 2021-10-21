<?php

namespace App\Http\Controllers\Clubs\Venue;

use App\Http\Controllers\Controller;
use App\Models\VenuePrice;
use Illuminate\Http\Request;

class VenuePriceController extends Controller
{
    public function calculatePrice($venueId, Request $request) {

        if (VenuePriceController::isWeekday($request->date)) $weekday = 1;
        else $weekday = 0;

        $venuePrices = VenuePrice::where('venue_id', $venueId)
                                ->where('weekday', $weekday)
                                ->orderBy('start_time', 'ASC')->get();

        $booking_start = $request->start_time;
        $booking_end = $request->end_time;
        $price = 0;

        foreach($venuePrices as $venuePrice) {
            if ($venuePrice->start_time <= $booking_start && $booking_start < $venuePrice->end_time) {
                if ($venuePrice->start_time <= $booking_end && $booking_end < $venuePrice->end_time) {
                    $price = $price + ($booking_end - $booking_start) * $venuePrice->price;
                }
                else {
                    $price = $price + ($venuePrice->end_time - $booking_start) * $venuePrice->price;
                    $booking_start = $venuePrice->end_time;
                }
            }
        }

        return number_format($price * env('DEBOOK_FEE'), 2);
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
