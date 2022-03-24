<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartnerOpenHours extends Model
{
    use HasFactory;

    protected $table = 'partner_open_hours';

    protected $fillable = [
        'start_time_wd',
        'end_time_wd',
        'start_time_we',
        'end_time_we',
    ];
}
