<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Booking\BookingController;
use App\Http\Controllers\Clubs\ClubsController;
use App\Http\Controllers\Clubs\ServiceController;
use App\Http\Controllers\Clubs\Venue\VenueController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});

Route::post('/login', [LoginController::class, 'login']);
// Route::post('/logout', [LogoutController::class, 'logout']);
Route::post('/register', [RegisterController::class, 'register']);

Route::prefix('/services')->group(function() {
    Route::get('/{id}', [ServiceController::class, 'show']);
    Route::get('/sports/all', [ServiceController::class, 'getSports']);
    Route::get('/surfaces/{sport}', [ServiceController::class, 'getSurfaces']);
});

Route::prefix('/clubs')->group(function() {
    Route::get('/search', [ClubsController::class, 'getClubs']);
    Route::get('/search/like/{name}', [ClubsController::class, 'searchClubName']);
    Route::get('/club/{id}', [ClubsController::class, 'getClub']);
    Route::get('/club/{id}/sports', [ClubsController::class, 'getClubSports']);
    Route::get('/club/{id}/opentime', [ClubsController::class, 'getClubOpenTime']);
    Route::get('/club/{id}/availablevenues', [ClubsController::class, 'getAvailableVenues']);
});

Route::prefix('/venue')->group(function() {
    Route::get('/{id}/checkavailability', [VenueController::class, 'checkAvailability']);
    Route::get('/{id}', [VenueController::class, 'show']);
});

Route::middleware('auth:sanctum')->prefix('/booking')->group(function() {
    Route::post('/newbooking', [BookingController::class, 'store']);
    Route::get('/active/{userId}', [BookingController::class, 'getActiveBookings']);
    Route::get('/notactive/{userId}', [BookingController::class, 'getNotActiveBookings']);
});
