@component('mail::message')
# New Booking

Dear {{ $booking['username'] }},

<br>
You have succesefully booked a venue. Here is your booking information:
<br><br>
Club: {{ $booking['clubName'] }} <br>
Sport: {{ $booking['sport'] }} <br>
Venue: {{ $booking['venue'] }} ({{ $booking['surface'] }}, {{ $booking['indoor'] }}) <br>
Date: {{ $booking['date'] }} <br>
Time: {{ $booking['start_time'] }} - {{ $booking['end_time'] }} <br>
Price: €{{ $booking['price'] }} <br><br>

All your bookings can be seen in your dashboard.
@component('mail::button', ['url' => ''])
Go to dashboard
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
