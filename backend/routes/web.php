<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/languages', function () {
    return [
        ['id' => 0, 'name' => 'English', 'difficulty' => 4],
        ['id' => 1, 'name' => 'Swedish', 'difficulty' => 3],
        ['id' => 2, 'name' => 'German', 'difficulty' => 7]
    ];
});
