<?php

namespace Database\Seeders;

use App\Models\Blog_tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $liste = [

            ['blog_id' => 1, 'tag_id' => 2],
            ['blog_id' => 1, 'tag_id' => 12],

            ['blog_id' => 2, 'tag_id' => 3],

            ['blog_id' => 3, 'tag_id' => 1],

            ['blog_id' => 4, 'tag_id' => 9],

            ['blog_id' => 5, 'tag_id' => 4],
            ['blog_id' => 5, 'tag_id' => 11],
        ];
        foreach ($liste as $v) {
            Blog_tag::create($v);
        }
    }
}
