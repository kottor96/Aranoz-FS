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
            ['nom' => 'Travel'],
            ['nom' => 'Health Care'],
            ['nom' => 'Discover'],
            ['nom' => 'Fashion'],
            ['nom' => 'Business'],
        ];
        foreach ($liste as $v) {
            Blog_categorie::create($v);
        }
    }
}
