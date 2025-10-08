<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [ 'name' => 'user'],
            [ 'name' => 'modo'],
            [ 'name' => 'admin'],
        ];
        Role::create($roles[0]);
        Role::create($roles[1]);
        Role::create($roles[2]);
        User::factory()->count(1)->create(['role_id'=>3]);
        User::factory()->count(4)->create(['role_id'=>2]);
        User::factory()->count(20)->create(['role_id'=>1]);
        User::factory()->count(1)->create([
            'name' => 'Aurélien Mertens',
            'email' => 'gardien243@gmail.com',
            'role_id' => 3,
        ]);
        
    }
    
}
