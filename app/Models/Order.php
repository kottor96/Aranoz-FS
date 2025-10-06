<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['user_id', 'order_number', 'status'];

     protected static function boot()
    {
        parent::boot();

        static::creating(function ($order) {
            if (!$order->order_number) {
                $date = now()->format('Ymd');      
                $userId = $order->user_id;     
                $random = mt_rand(1000, 9999);     
                $order->order_number = "{$date}-U{$userId}-R{$random}";
            }
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function orderItems()
    {
        return $this->hasMany(Order_item::class);
    }
}
