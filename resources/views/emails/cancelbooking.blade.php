@component('mail::message')
# Canceled Booking

Dear {{ $booking['username'] }},

<br>
You have succesefully canceled your booking. Here is your canceled booking information:
<br><br>
Club: {{ $booking['clubName'] }} <br>
Sport: {{ $booking['sport'] }} <br>
Venue: {{ $booking['venue'] }} ({{ $booking['surface'] }}, {{ $booking['indoor'] }}) <br>
Date: {{ $booking['date'] }} <br>
Time: {{ $booking['start_time'] }} - {{ $booking['end_time'] }} <br>
Price: €{{ $booking['price'] }} <br><br>

The cost of the booking will be fully refunded within 3 working days. <br>
Canceled bookings can be seen in the passed bookings section of your dashboard.
@component('mail::button', ['url' => ''])
Go to dashboard
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
