<?php

namespace App\Http\Controllers\Auth;



use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Patient;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredPatientController extends Controller
{
     /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response 
    {
        $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:patients,email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'number' => ['nullable', 'string'],
            'address' => ['nullable', 'string'],
            'blood_type' => ['nullable', 'string', 'max:10'],
            'known_sicknesses' => ['nullable', 'string'],
            'allergies' => ['nullable', 'string'],
        ]);

        $patient = Patient::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->string('password')),
            'number' => $request->number,
            'address' => $request->address,
            'blood_type' => $request->blood_type,
            'known_sicknesses' => $request->known_sicknesses,
            'allergies' => $request->allergies,
        ]);

        event(new Registered($patient));

        Auth::login($patient);

        return response()->noContent();
    }
}
