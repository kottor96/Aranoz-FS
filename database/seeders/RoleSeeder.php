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
        Role::create($roles[0]);
        Role::create($roles[1]);
        Role::create($roles[2]);
        User::factory()->count(1)->create(['role_id'=>3]);
        User::factory()->count(4)->create(['role_id'=>2]);
        User::factory()->count(20)->create(['role_id'=>1]);

    }
}
