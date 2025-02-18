<script setup>
import { ref } from 'vue'
import { usePatientAuthStore } from '../../stores/PatientAuth';

const patientAuthStore = usePatientAuthStore();

const form = ref({
  email: '',
  password: ''
});

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center mb-6">Caregiver Login</h2>
  
        <form @submit.prevent="patientAuthStore.handleLogin(form)">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input 
              type="email"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Email"
              v-model="form.email"
            >
            <div v-if="patientAuthStore.errors.email" class="flex" >
              <span class="text-red-500 text-sm">{{ patientAuthStore.errors.email[0] }}</span>
          </div>
          </div>
  
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input 
              type="password"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Password"
              v-model="form.password"
            >
            <div v-if="patientAuthStore.errors.password" class="flex" >
              <span class="text-red-500 text-sm">{{ patientAuthStore.errors.password[0] }}</span>
          </div>
          </div>
  
          <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
  
        <div class="flex justify-between items-center mb-6">
            <router-link :to="{ name: 'PatientForgotPassword'}" class="text-blue-500 text-sm hover:underline">Forgot Password?</router-link>
          </div>
  
        <p class="text-center text-sm text-gray-600 mt-4">
          Don't have an account? 
          <router-link :to="{ name: 'CaregiverRegister' }" class="text-blue-500 font-bold hover:underline">Sign Up</router-link>
        </p>
      </div>
    </div>
  </template>
  