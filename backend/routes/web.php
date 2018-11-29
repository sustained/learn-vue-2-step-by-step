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

Route::get('/lessons', 'LessonController@index');
Route::get('/lessons/{lesson}/{title?}', 'LessonController@show')->where('lesson', '[0-9]+');

Route::get('/statuses', 'StatusesController@index');
Route::post('/statuses', 'StatusesController@store');

Route::get('/courses/create', 'CourseController@create');
Route::post('/courses', 'CourseController@store');

Route::get('/languages', function () {
    return [
        ['id' => 0, 'name' => 'English', 'difficulty' => 4],
        ['id' => 1, 'name' => 'Swedish', 'difficulty' => 3],
        ['id' => 2, 'name' => 'German', 'difficulty' => 7]
    ];
});
