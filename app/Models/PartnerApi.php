<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartnerApi extends Model
{
    use HasFactory;

    protected $table = 'partner_api';

    protected $fillable = [
        'endpoint',
        'username',
        'password'
    ];
}
