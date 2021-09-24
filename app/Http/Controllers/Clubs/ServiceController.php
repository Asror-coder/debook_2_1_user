<?php

namespace App\Http\Controllers\Clubs;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    public function show($id)
    {
        return Service::find($id);
    }

    public function getSports()
    {
        return DB::select('select DISTINCT sport_type from services');
    }

    public function getSurfaces($sport)
    {
        return DB::select('select DISTINCT surface FROM services WHERE sport_type = ?', [$sport]);
    }

    public function getId($sport,$surface,$indoor)
    {
        $service = Service::where('sport_type',$sport)
                            ->where('surface',$surface)
                            ->where('indoor',$indoor)
                            ->get();

        return $service[0]->id;
    }
}
