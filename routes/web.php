<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Events/Index')->name('home');
Route::get('/events', function () {
    return Inertia::render('Events/Index');
});