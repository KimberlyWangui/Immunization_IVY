<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\PatientLoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class PatientAuthenticatedSessionController extends Controller 
{
    public function store(PatientLoginRequest $request): JsonResponse
    {
        $request->authenticate();

        $request->session()->regenerate();
        
        return response()->json([
            'message' => 'Login successful',
            'patient' => Auth::user(),
        ], 200);
    }

    public function destroy(Request $request): Response
    {
        Auth::guard('patient')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();

    }
}