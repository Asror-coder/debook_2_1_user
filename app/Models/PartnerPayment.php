<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartnerPayment extends Model
{
    use HasFactory;

    protected $table = 'partner_payment';

    protected $fillable = [
        'iban',
        'recipient'
    ];
}
