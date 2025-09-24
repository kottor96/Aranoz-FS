<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
        foreach ($roles as $role) {
            Role::create($role);
        }
        User::factory()->count(10)->create();
    }
}
