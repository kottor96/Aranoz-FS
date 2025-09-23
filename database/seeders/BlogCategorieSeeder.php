<?php

namespace Database\Seeders;

use App\Models\Blog_categorie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogCategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $liste = [
            ['name' => 'Travel'],
            ['name' => 'Health Care'],
            ['name' => 'Discover'],
            ['name' => 'Fashion'],
            ['name' => 'Business'],
        ];
        foreach ($liste as $v) {
            Blog_categorie::create($v);
        }
    }
}
