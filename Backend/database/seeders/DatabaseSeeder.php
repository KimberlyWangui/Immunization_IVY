<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'employee_id' => '123456',
            'first_name' => 'Test',
            'last_name' => 'User',
            'department' => 'Nursing',
            'password' => Hash::make('12345678'),
            'remember_token' => Str::random(10),


        ]);
         
        user::create([
            'employee_id' => '151163',
            'first_name' => 'Test1',
            'last_name' => 'User1',
            'department' => 'Radiology',
            'password' => Hash::make('12345678'),
            'remember_token' => Str::random(10),
        ]);
    }
}
