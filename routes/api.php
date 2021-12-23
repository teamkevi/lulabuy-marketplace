<?php

use App\Models\Shop;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('shops', function () {
    return Shop::all();
});

Route::get('shops/{slug}', function ($slug) {
    return Shop::with('products')->where('slug', $slug)->get();
});

Route::get('products', function () {
    return Product::with('shop')->get();
});

Route::get('shops/{shop_slug}/products/{product_slug}', function ($shop_slug, $product_slug) {
    return Product::with('shop')->where('slug', $product_slug)->get();
});