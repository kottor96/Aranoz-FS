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
            ['name' => 'Lifestyle'],
            ['name' => 'Housing'],
            ['name' => 'Technologie'],
            ['name' => 'Food'],
            ['name' => 'Recipes'],
            ['name' => 'Education'],
            ['name' => 'Cinema'],
            ['name' => 'News'],
            ['name' => 'Politics'],
            ['name' => 'Religion'],
            ['name' => 'Science'],
            ['name' => 'World'],
            ['name' => 'Hobbies'],
        ];
        foreach ($liste as $v) {
            Tag::create($v);
        }
    
    }
}
