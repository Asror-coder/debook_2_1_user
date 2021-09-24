<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VenueTime extends Model
{
    use HasFactory;

    protected $fillable = [
        'start_time_wd',
        'end_time_wd',
        'start_time_we',
        'end_time_we',
    ];
}
