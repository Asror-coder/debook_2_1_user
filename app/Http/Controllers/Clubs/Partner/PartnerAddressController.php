<?php

namespace App\Http\Controllers\Clubs\Partner;

use App\Http\Controllers\Controller;
use App\Models\PartnerAddress;
use Illuminate\Http\Request;

class PartnerAddressController extends Controller
{
    public function show($partner_id)
    {
        $partnerAddress = PartnerAddress::where('partner_id', $partner_id)->get();

        if ($partnerAddress) return $partnerAddress;
        else return 'No details';
    }
}
