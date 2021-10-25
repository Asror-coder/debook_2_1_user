<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Illuminate\Http\RedirectResponse;

class LocalizationController extends Controller
{
    /**
     * @param $locale
     * @return RedirectResponse
     */
    public function index($locale) {
        if (! in_array($locale, ['en', 'nl'])) {
            abort(400);
        }

        App::setLocale($locale);
        // session()->put('locale', $locale);

        return $this->getLanguage();
    }

    /**
     * @param none
     * @return json
     */
    public function getLanguage() {
        return  response()->json([
            'dashboard' => trans('dashboard'),
            'header' => trans('header'),
            'footer' => trans('footer'),
            'home_search' => trans('home_search'),
            'booking' => trans('booking'),
            'clubs' => trans('clubs'),
            'auth' => trans('auth')
        ]);
    }
}
