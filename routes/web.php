<?php

use App\Mail\CancelBooking;
use App\Mail\NewBooking;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', App\Http\Controllers\PagesController::class)->where("any",".*");

// Route::get('email', function(){
//     return new CancelBooking();
// });
