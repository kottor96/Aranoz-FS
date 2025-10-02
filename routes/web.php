<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PageController::class,'home'])->name('home');


Route::get('/blog',[PageController::class,'blog'])->name('blog');
Route::get('/blog/{id}/show',[PageController::class,'blogShow'])->name('blog.show');

Route::get('/shop',[PageController::class,'shop'])->name('shop');
Route::get('/product/{id}/show',[PageController::class,'productShow'])->name('product.show');

Route::get('/contact',[PageController::class,'contact'])->name('contact');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
