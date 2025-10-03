<?php

namespace Database\Seeders;

use App\Models\Specification;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpecificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $chaises = [
            ['width' => '128mm', 'height' => '508mm', 'deph' => '85mm', 'weight' => '52gm', 'quality_checking' => true, 'freshness_duration' => 3, 'packeting' => 'Without touch of hand', 'content' => 60, 'product_id' => 1],
            ['width' => '130mm', 'height' => '510mm', 'deph' => '86mm', 'weight' => '53gm', 'quality_checking' => true, 'freshness_duration' => 3, 'packeting' => 'Without touch of hand', 'content' => 60, 'product_id' => 2],
            ['width' => '127mm', 'height' => '507mm', 'deph' => '84mm', 'weight' => '51gm', 'quality_checking' => true, 'freshness_duration' => 3, 'packeting' => 'Without touch of hand', 'content' => 60, 'product_id' => 3],
            ['width' => '129mm', 'height' => '509mm', 'deph' => '85mm', 'weight' => '52gm', 'quality_checking' => true, 'freshness_duration' => 3, 'packeting' => 'Without touch of hand', 'content' => 60, 'product_id' => 4],
            ['width' => '128mm', 'height' => '508mm', 'deph' => '86mm', 'weight' => '53gm', 'quality_checking' => true, 'freshness_duration' => 3, 'packeting' => 'Without touch of hand', 'content' => 60, 'product_id' => 5],
            ['width' => '130mm', 'height' => '511mm', 'deph' => '85mm', 'weight' => '54gm', 'quality_checking' => true, 'freshness_duration' => 3, 'packeting' => 'Without touch of hand', 'content' => 60, 'product_id' => 6],
            ['width' => '127mm', 'height' => '506mm', 'deph' => '84mm', 'weight' => '51gm', 'quality_checking' => true, 'freshness_duration' => 3, 'packeting' => 'Without touch of hand', 'content' => 60, 'product_id' => 7],
            ['width' => '129mm', 'height' => '509mm', 'deph' => '85mm', 'weight' => '52gm', 'quality_checking' => true, 'freshness_duration' => 3, 'packeting' => 'Without touch of hand', 'content' => 60, 'product_id' => 8],
            ['width' => '128mm', 'height' => '507mm', 'deph' => '86mm', 'weight' => '53gm', 'quality_checking' => true, 'freshness_duration' => 3, 'packeting' => 'Without touch of hand', 'content' => 60, 'product_id' => 9],
        ];
        foreach ($chaises as $chaise) {
            Specification::create($chaise);  
        }
    }
}
