<?php

namespace App\Http\Controllers\Clubs;

use App\Http\Controllers\Clubs\Partner\PartnerAddressController;
use App\Http\Controllers\Clubs\Partner\PartnerDetailsController;
use App\Http\Controllers\Clubs\Venue\VenueController;
use App\Http\Controllers\Clubs\Venue\VenuePriceController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClubsController extends Controller
{
    //get all available clubs according to the request
    public function getClubs(Request $request) {
        $clubs_sql = 'SELECT DISTINCT partner_id AS id
                        FROM venues
                        WHERE `status` = 1';

        if ($request->city) {
            $clubs_sql = 'SELECT t2.id
                          FROM partner_address t1
                          INNER JOIN ('.$clubs_sql.') t2
                          WHERE t1.city LIKE "%'.$request->city.'%"
                            AND t1.partner_id = t2.id';
        }

        $availableClubs = DB::select($clubs_sql);

        //if date and time is set
        if ($request->date && $request->start_time && $request->end_time) {
            for ($i=0; $i < count($availableClubs); $i++) {
                $availableVenues = $this->getAvailableVenues($availableClubs[$i]->id,$request);

                if ($availableVenues) {
                    if ($request->maxPrice) {
                        $duration = $request->end_time - $request->start_time;

                        //check prices
                        if (!$this->checkMaxPrice($request->maxPrice, $availableVenues, $duration)) unset($availableClubs[$i]);
                    }
                } else unset($availableClubs[$i]);
            }
        }
        else { //if date and time isn't set
            if ($request->maxPrice) {
                for ($i=0; $i < count($availableClubs); $i++) {
                    $lowestPrice = $this->getLowestPrice($availableClubs[$i]->id);
                    if ($lowestPrice > $request->maxPrice) unset($availableClubs[$i]);
                }
            }
        }

        $clubsId = [];
        for ($i = 0; $i < sizeof($availableClubs); $i++)
            $clubsId[$i]= $availableClubs[$i]->id;

        //Object version withpagination
        return DB::table('partner_details')
                    ->join('partner_address','partner_details.partner_id','=','partner_address.partner_id')
                    ->whereIn('partner_details.partner_id',$clubsId)
                    ->paginate(5);

        //Array version without pagination  !! CHECK BEFORE REMOVING !!

        // if ($availableClubs) {
        //     $partnerAddressController = new PartnerAddressController;
        //     $partnerDetailsController = new PartnerDetailsController;

        //     for ($i = 0; $i < sizeof($availableClubs); $i++) {
        //         $clubs[$i][0] = $availableClubs[$i];
        //         $clubs[$i][1] = $partnerAddressController->show($availableClubs[$i]->id)[0];
        //         $clubs[$i][2] = $partnerDetailsController->show($availableClubs[$i]->id)[0];
        //     }
        //     return $clubs;
        // } else return $availableClubs;
    }

    //checks max price for available venues
    static function checkMaxPrice($maxPrice, $venues, $numHours) {
        for ($i=0; $i < count($venues); $i++) {
            $pricePerHour = $venues[$i]->price / $numHours;
            if ($pricePerHour > $maxPrice) unset($venues[$i]);
        }

        return $venues;
    }

    static function getServiceId($request) {
        $sql = 'SELECT id
                FROM services
                WHERE sport_type = "'.$request->sport_type.'"';

        if (is_numeric($request->indoor) && ((int)$request->indoor === 0 || (int)$request->indoor === 1))
            $sql = $sql.' AND indoor = '.(int)$request->indoor;

        if ($request->surface) {
            $surfaces = $request->surface;

            $sql = $sql.' AND (';
            for ($i=0; $i < count($surfaces); $i++) {
                if ($i == 0) $sql = $sql.'surface = "'.$surfaces[$i].'"';
                else $sql = $sql.' OR surface = "'.$surfaces[$i].'"';
            }
            $sql = $sql.')';
        }

        return DB::select($sql);
    }

    //Get club's general information
    public function getClub($id) {
        $partnerAddressController = new PartnerAddressController;
        $partnerDetailsController = new PartnerDetailsController;

        $club[0] = $partnerAddressController->show($id)[0];
        $club[1] = $partnerDetailsController->show($id)[0];

        return $club;
    }

    public function getClubSports($id) {
        return DB::select('SELECT DISTINCT sport_type
                            FROM services t1
                            INNER JOIN (SELECT DISTINCT service_id
                                        FROM `venues`
                                        WHERE `partner_id` = ?
                                        AND `status` = 1) t2
                                    ON t1.id = t2.service_id', [$id]);
    }

    public function getLowestPrice($id) {
        $allPrices = DB::select('SELECT price
                            FROM `venues` t1
                            INNER JOIN (SELECT venue_id, price
                                        FROM `venue_prices`
                                        ORDER BY price ASC) t2
                                    ON t1.id = t2.venue_id
                            WHERE `partner_id` = ?
                            ORDER BY price ASC', [$id]);

        return $allPrices[0]->price;
    }

    public function getClubOpenTime($id) {
        $allTimes = DB::select('SELECT MIN(start_time_wd) AS start_time_wd,
                                        MAX(end_time_wd) AS end_time_wd,
                                        MIN(start_time_we) AS start_time_we,
                                        MAX(end_time_we) AS end_time_we
                                FROM `venue_times` t1
                                INNER JOIN (SELECT id
                                            FROM `venues`
                                            WHERE `partner_id` = 4
                                            AND `status` = 1) t2
                                        ON t1.venue_id = t2.id', [$id]);

        if($allTimes[0]->start_time_wd < $allTimes[0]->start_time_we) $openTime[0] = $allTimes[0]->start_time_wd;
        else $openTime[0] = $allTimes[0]->start_time_we;

        if($allTimes[0]->end_time_wd > $allTimes[0]->end_time_we) $openTime[1] = $allTimes[0]->end_time_wd;
        else $openTime[1] = $allTimes[0]->end_time_we;

        return $openTime;
    }

    //check availabke venues at a given club
    public function getAvailableVenues($id, Request $request) {

        $services = ClubsController::getServiceId($request);

        $services_sql = 'SELECT *
                         FROM services
                         WHERE ';

        for ($i=0; $i < count($services); $i++) {
            if ($i == 0) $services_sql = $services_sql.' id = '.$services[$i]->id;
            else $services_sql = $services_sql.' OR id = '.$services[$i]->id;
        }

        $venues = DB::select('SELECT t1.id AS venue_id,
                                        t1.name,
                                        t2.surface,
                                        t2.indoor
                                FROM venues t1
                                INNER JOIN ('.$services_sql.') t2
                                        ON t1.service_id = t2.id
                                WHERE t1.partner_id = '.$id.' AND
                                    t1.status = 1');

        $venueController = new VenueController;
        $venuePriceController = new VenuePriceController;
        $availableVenues = [];

        foreach ($venues as $venue) {
            if ($venueController->checkAvailability($venue->venue_id, $request)) {
                $price = $venuePriceController->calculatePrice($venue->venue_id, $request);

                $venue = (object) array_merge( (array)$venue, array( 'price' => $price ) );

                array_push($availableVenues,$venue);
            }
        }

        return $availableVenues;
    }

    public function searchClubName($name) {
        return DB::select("SELECT * FROM `partner_details`
                           WHERE name LIKE '".$name."%'");
    }
}
