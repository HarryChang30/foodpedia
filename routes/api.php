<?php

use Illuminate\Http\Request;

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
Route::resource('foods' , 'FoodsController' , ['only' => ['index' , 'store' , 'show' , 'update']]);
Route::resource('foods.description' , 'DescriptionController' , ['only' => ['index' , 'store' , 'show' , 'update' , 'destroy']]);
