<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $liste = [
            ['nom' => 'Lifestyle'],
            ['nom' => 'Housing'],
            ['nom' => 'Technologie'],
            ['nom' => 'Food'],
            ['nom' => 'Recipes'],
            ['nom' => 'Education'],
            ['nom' => 'Cinema'],
            ['nom' => 'News'],
            ['nom' => 'Politics'],
            ['nom' => 'Religion'],
            ['nom' => 'Science'],
            ['nom' => 'World'],
            ['nom' => 'Hobbies'],
        ];
        foreach ($liste as $v) {
            Tag::create($v);
        }
    
    }
}
