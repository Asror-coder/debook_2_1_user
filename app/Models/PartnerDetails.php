<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartnerDetails extends Model
{
    use HasFactory;

    protected $table = 'partner_details';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'description'
    ];
}
