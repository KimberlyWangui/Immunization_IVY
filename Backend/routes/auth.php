<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\RegisteredPatientController;
use App\Http\Controllers\Auth\PatientAuthenticatedSessionController;
use App\Http\Controllers\Auth\PatientPasswordResetLinkController;
use App\Http\Controllers\Auth\PatientNewPasswordController;
use Illuminate\Support\Facades\Route;


Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware('guest:web')
    ->name('register');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest:web')
    ->name('login');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest:web')
    ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest:web')
    ->name('password.store');

Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
    ->middleware(['auth', 'signed', 'throttle:6,1'])
    ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification.send');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

//Patient/Caregiver Routes
Route::post('/registerPatient', [RegisteredPatientController::class, 'store'])
    ->middleware('guest:patient')
    ->name('registerPatient');

Route::post('/loginPatient', [PatientAuthenticatedSessionController::class, 'store'])
    ->middleware('guest:patient')
    ->name('loginPatient');

Route::post('/patient/forgot-password', [PatientPasswordResetLinkController::class, 'store'])
    ->middleware('guest:patient')
    ->name('patient.password.email');

Route::post('/patient/reset-password', [PatientNewPasswordController::class, 'store'])
    ->middleware('guest:patient')
    ->name('patient.password.store');

Route::post('/logoutPatient', [PatientAuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth:patient')
    ->name('logoutPatient');