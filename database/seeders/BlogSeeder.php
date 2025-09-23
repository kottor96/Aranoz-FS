<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $liste = [
            [
                'title' => 'Aranoz grand opening party',
                'description' => 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. Who has the willpower to actually. ',
                'blog_categorie_id' => 5,
                'user_id' => 1
            ],
            [
                'title' => 'Smartphones working on the moon ?',
                'description' => 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. Who has the willpower to actually. ',
                'blog_categorie_id' => 3,
                'user_id' => 1
            ],
            [
                'title' => "Today's Fashion first tour",
                'description' => 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. Who has the willpower to actually. ',
                'blog_categorie_id' => 4,
                'user_id' => 1
            ]
        ];
        foreach($liste as $v){
            Blog::create($v);
        }
    }
}
