<?php

namespace App\Http\Controllers\Clubs\Partner;

use App\Http\Controllers\Controller;
use App\Models\PartnerDetails;
use Illuminate\Http\Request;

class PartnerDetailsController extends Controller
{
    public function show($partner_id)
    {
        $partnerDetails = PartnerDetails::where('partner_id',$partner_id)->get();

        if ($partnerDetails) return $partnerDetails;
        else return 'No details';
    }
}
