<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PageController::class,'home'])->name('home');


Route::get('/blog/{cat?}',[PageController::class,'blog'])->name('blog');
Route::get('/blog/{id}/show',[PageController::class,'blogShow'])->name('blog.show');

Route::get('/shop/{cat?}',[ProductController::class,'index'])->name('shop');
Route::get('/product/{id}/show',[ProductController::class,'show'])->name('product.show');

Route::get('/contact',[PageController::class,'contact'])->name('contact');

Route::get('/orders/{numero?}', [OrderController::class, 'index'])->name('orders.index');

Route::post('/comments/store',[CommentController::class,'store'])->name('comment.store');

Route::get('/admin/dashboard', [AdminController::class,'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('admin/cat', [AdminController::class,'product'])->name('admin.product');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
