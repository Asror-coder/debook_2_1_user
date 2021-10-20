<?php

namespace App\Http\Controllers\Booking;

use App\Http\Controllers\Controller;
use App\Models\PartnerApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookingApiController extends Controller
{
    public function checkAvailability() {
        //implement
    }

    public function book($request) {
        $venue = DB::table('venues')->where('id',$request->venue_id)->first();

        $api = DB::table('partner_api')->where('partner_id',$venue->partner_id)->first();

        $ciphering = "AES-128-CTR";
        $options = 0;
        $decryption_key = openssl_digest(php_uname(), 'MD5', TRUE);

        $username = openssl_decrypt ($api->username, $ciphering,
                    $decryption_key, $options, env('ENC_DENC_IV'));

        $password = openssl_decrypt ($api->password, $ciphering,
        $decryption_key, $options, env('ENC_DENC_IV'));

        $newReservation = json_encode([
            'query' => trim('
                mutation CreateReservation ($input : CreateReservationInput!) {
                    createReservation(input: $input) {
                        id
                    }
                }
            '),
            'variables' => [
                'input' => [
                    "resource_id" => $venue->partner_venue_id,
                    "date" => $request->date,
                    "start_time" => $request->start_time.':00',
                    "end_time" => $request->end_time.':00',
                ],
            ],
        ]);

        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => $api->endpoint,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $newReservation,
            CURLOPT_HTTPHEADER => [
                "Content-Type: application/json",
                "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"
            ],
            CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
            CURLOPT_USERPWD => $username.":".$password,
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) return "cURL Error #:" . $err;
        else return $response;
    }

    public function cancel($booking) {
        $venue = DB::table('venues')->where('id',$booking->venue_id)->first();

        $api = DB::table('partner_api')->where('partner_id',$venue->partner_id)->first();

        $ciphering = "AES-128-CTR";
        $options = 0;
        $decryption_key = openssl_digest(php_uname(), 'MD5', TRUE);

        $username = openssl_decrypt ($api->username, $ciphering,
                    $decryption_key, $options, env('ENC_DENC_IV'));

        $password = openssl_decrypt ($api->password, $ciphering,
        $decryption_key, $options, env('ENC_DENC_IV'));

        $newReservation = json_encode([
            'query' => trim('
                mutation Cancel {
                    cancelReservation(id: '.$booking->partner_booking_id.') {
                    id
                    cancelled
                    }
                }
            ')
        ]);

        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => $api->endpoint,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $newReservation,
            CURLOPT_HTTPHEADER => [
                "Content-Type: application/json",
                "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"
            ],
            CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
            CURLOPT_USERPWD => $username.":".$password,
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) return "cURL Error #:" . $err;
        else return $response;
    }
}
