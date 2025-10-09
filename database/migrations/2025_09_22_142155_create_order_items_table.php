<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();

            // On garde l'id de la commande mais on ne supprime pas automatiquement l'item si la commande est supprimée
            $table->foreignId('order_id')->constrained()->cascadeOnDelete();

            // On garde l'id du produit mais ne supprime pas l'item si le produit est supprimé
            $table->foreignId('product_id')->nullable()->constrained()->nullOnDelete();

            // Snapshot des infos produit au moment de l'achat
            $table->string('product_name');
            $table->decimal('unit_price', 8, 2);
            $table->integer('quantity')->default(1);
            $table->decimal('total_price', 8, 2);

            // Couleur et description au moment de la commande
            $table->string('color')->nullable();
            $table->text('description')->nullable();

            // **Image principale du produit**
            $table->string('image_main')->nullable();

            // Promotion ou réduction appliquée
            $table->foreignId('promotion_id')->nullable()->constrained()->nullOnDelete();

            $table->timestamps();
        });



    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
