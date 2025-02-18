<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('patients', function (Blueprint $table) {
            $table->dropColumn('name'); // Remove the existing 'name' column
            $table->string('first_name')->after('id'); // Add 'first_name' column
            $table->string('last_name')->after('first_name'); // Add 'last_name' column
        });
    }

    public function down(): void
    {
        Schema::table('patients', function (Blueprint $table) {
            $table->dropColumn(['first_name', 'last_name']); // Remove new columns
            $table->string('name')->after('id'); // Re-add 'name' column
        });
    }
};

