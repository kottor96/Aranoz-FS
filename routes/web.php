<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BlogCategorieController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductCategorieController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminVerif;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PageController::class,'home'])->name('home');


Route::get('/blog/{cat?}',[PageController::class,'blog'])->name('blog');
Route::get('/blog/{id}/show',[PageController::class,'blogShow'])->name('blog.show');

Route::get('/shop/{cat?}',[ProductController::class,'index2'])->name('shop');
Route::get('/admin/product/liked',[ProductController::class,'like'])->name('like');
Route::get('/product/{id}/show',[ProductController::class,'show'])->name('product.show');

Route::get('/contact',[PageController::class,'contact'])->name('contact');

Route::get('/orders/{numero?}', [OrderController::class, 'index2'])->name('orders.index');

Route::post('/comments/store',[CommentController::class,'store'])->name('comment.store');

Route::get('/admin/dashboard', [AdminController::class,'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin/category', [AdminController::class,'product'])->middleware(AdminVerif::class)->name('admin.category');

Route::middleware(AdminVerif::class)->resource('admin/product/cat', ProductCategorieController::class)->names('admin.productCat');
Route::middleware(AdminVerif::class)->resource('admin/blog/tag', TagController::class)->names('admin.blogTag');
Route::middleware(AdminVerif::class)->resource('admin/blog/categorie', BlogCategorieController::class)->names('admin.blogCat');

Route::middleware(AdminVerif::class)->resource('admin/contact', ContactController::class)->names('admin.contact');


Route::middleware(AdminVerif::class)->resource('admin/user', UserController::class)->names('admin.users');

Route::middleware(AdminVerif::class)->resource('admin/order', OrderController::class)->names('admin.order');

Route::middleware(AdminVerif::class)->resource('admin/blog', BlogController::class)->names('admin.blog');

Route::middleware(AdminVerif::class)->resource('admin/product', ProductController::class)->names('admin.product');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart/add', [CartController::class, 'store'])->name('cart.add');
    Route::get('/favorite/toggle', [FavoriteController::class, 'toggle'])->name('favorite.toggle');
});


require __DIR__.'/auth.php';
