<?php

namespace App\Http\Controllers\Clubs\Partner;

use App\Http\Controllers\Controller;
use App\Models\PartnerOpenHours;
use Illuminate\Http\Request;

class PartnerOpenHoursController extends Controller
{
    public function show($partner_id)
    {
        $openHours = PartnerOpenHours::where('partner_id',$partner_id)->get();

        if ($openHours) return $openHours;
        else return 'No open hours';
    }
}
