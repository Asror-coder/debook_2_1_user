<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartnerAddress extends Model
{
    use HasFactory;

    protected $table = 'partner_address';

    protected $fillable = [
        'country',
        'city',
        'street',
        'house_num',
        'house_add',
        'postal_num',
        'postal_add',
        'lat',
        'long'
    ];
}
