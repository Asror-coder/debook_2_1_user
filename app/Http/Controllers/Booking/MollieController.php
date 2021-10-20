<?php

namespace App\Http\Controllers\Booking;

use App\Http\Controllers\Controller;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;

class MollieController extends Controller
{
    /**
     * Redirect the user to the Payment Gateway.
     *
     * @return Response
     */
    public function preparePayment($booking)
    {
        $mollie = new \Mollie\Api\MollieApiClient();
        $mollie->setApiKey(env('MOLLIE_KEY'));

        $payment = $mollie->payments->create([
            "amount" => [
                "currency" => "EUR",
                "value" => json_decode($booking)->price
            ],
            "description" => "Order: ".json_decode($booking)->id,
            "redirectUrl" => "http://127.0.0.1:8000/booking/new/success/".json_decode($booking)->id,
            "webhookUrl" => "http://cd2c-145-108-66-64.ngrok.io/api/booking/payment/webhook"
        ]);

        $payment = $mollie->payments->get($payment->id);

        return Response()->json([
            "payment_id" => $payment->id,
            "url" => $payment->getCheckoutUrl(),
        ]);
    }

    public function checkStatus(Request $request) {
        $mollie = new \Mollie\Api\MollieApiClient();
        $mollie->setApiKey(env('MOLLIE_KEY'));

        $payment = $mollie->payments->get($request->id);

        $bookingContoller = new BookingController;

        if ($payment->isPaid() && ! $payment->hasRefunds() && ! $payment->hasChargebacks()) {
            $bookingContoller->hasPaidBooking($request->id);
        }
        elseif ($payment->isFailed() || $payment->isExpired() || $payment->isCanceled()) {
            $bookingContoller->destroyBooking($request->id);
        }
        elseif ($payment->hasRefunds()) {
            $bookingContoller->hasRefundedBooking($request->id);
        }

        return response()->json(['success' => 'success', 200]);
    }

    public function refundPayment($booking) {
        $mollie = new \Mollie\Api\MollieApiClient();
        $mollie->setApiKey(env('MOLLIE_KEY'));

        $payment = $mollie->payments->get(json_decode($booking)->payment_id);

        $payment->refund([
            "amount" => [
                "currency" => "EUR",
                "value" => json_decode($booking)->price
            ]
        ]);
    }
}
