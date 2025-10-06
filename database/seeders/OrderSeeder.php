<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Order::create(['user_id' => 1, 'status' => 'livraison']);
        Order::create(['user_id' => 2, 'status' => 'livraison']);
        Order::create(['user_id' => 3, 'status' => 'livraison']);
        Order::create(['user_id' => 4, 'status' => 'livraison']);
        Order::create(['user_id' => 5, 'status' => 'livraison']);
    }
}
