@component('mail::message')
# Welcome to deBook

Dear {{ $username }},
<br><br>
We are happy to welcome you to deBook, the platform that's going to make your online booking life.
<br>
Press the button bellow and let's start booking!

@component('mail::button', ['url' => ''])
Visit Site
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
