<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Comment;

class CommentSeeder extends Seeder
{
    public function run(): void
    {
        $comments = [
            [
                'product_id' => 1,
                'message' => 'Cette chaise est super confortable pour le bureau !',
                'name' => 'Alex Dupont',
                'email' => 'alex.dupont@example.com',
                'website' => 'https://alexdupont.fr',
            ],
            [
                'product_id' => 2,
                'message' => 'J’adore la couleur et le design, très élégante.',
                'name' => 'Sophie Laurent',
                'email' => 'sophie.laurent@example.com',
                'website' => 'https://sophielaurent.fr',
            ],
            [
                'product_id' => 3,
                'message' => 'Parfaite pour la salle à manger, très stable.',
                'name' => 'Julien Morel',
                'email' => 'julien.morel@example.com',
                'website' => 'https://julienmorel.fr',
            ],
            [
                'product_id' => 4,
                'message' => 'Confortable et facile à monter, je recommande.',
                'name' => 'Claire Dubois',
                'email' => 'claire.dubois@example.com',
                'website' => 'https://clairedubois.fr',
            ],
            [
                'product_id' => 5,
                'message' => 'Matériaux de qualité, excellente finition.',
                'name' => 'Antoine Lefèvre',
                'email' => 'antoine.lefevre@example.com',
                'website' => 'https://antoinelefevre.fr',
            ],
            [
                'product_id' => 6,
                'message' => 'Très pratique et ergonomique, je l’utilise tous les jours.',
                'name' => 'Camille Robert',
                'email' => 'camille.robert@example.com',
                'website' => 'https://camillerobert.fr',
            ],
            [
                'product_id' => 7,
                'message' => 'Design moderne et chic, parfait pour mon bureau.',
                'name' => 'Nicolas Petit',
                'email' => 'nicolas.petit@example.com',
                'website' => 'https://nicolasp.fr',
            ],
            [
                'product_id' => 8,
                'message' => 'Très bon rapport qualité/prix pour une chaise confortable.',
                'name' => 'Lucas Bernard',
                'email' => 'lucas.bernard@example.com',
                'website' => 'https://lucasbernard.dev',
            ],
            [
                'product_id' => 9,
                'message' => 'Chaises empilables super pratiques et robustes.',
                'name' => 'Marie Lemoine',
                'email' => 'marie.lemoine@example.com',
                'website' => 'https://marielemoine.fr',
            ],
        ];

        foreach ($comments as $comment) {
            Comment::create($comment);
        }
    }
}
