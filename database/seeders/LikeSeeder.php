<?php

namespace Database\Seeders;

use App\Models\Like;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LikeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $likes = [
            [
                'user_id' => 1,
                'product_id' => 1
            ],
            [
                'user_id' => 2,
                'product_id' => 2
            ],
            [
                'user_id' => 1,
                'product_id' => 2
            ],
            [
                'user_id' => 1,
                'product_id' => 3
            ],
            [
                'user_id' => 3,
                'product_id' => 3
            ],
        ];
        foreach ($likes as $like) {
            Like::create($like);
        }
    }
}
