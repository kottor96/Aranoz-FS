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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blog_id')->nullable()->constrained('blogs')->cascadeOnDelete();
            $table->foreignid('product_id')->nullable()->constrained('products')->cascadeOnDelete();
            $table->text('message');
            $table->string('name');
            $table->string('email');
            $table->string('website');
            $table->timestamps();
        });
        DB::statement('ALTER TABLE comments ADD CONSTRAINT chk_only_one_parent 
            CHECK (
                (blog_id IS NOT NULL AND product_id IS NULL) OR 
                (blog_id IS NULL AND product_id IS NOT NULL)
            )');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
