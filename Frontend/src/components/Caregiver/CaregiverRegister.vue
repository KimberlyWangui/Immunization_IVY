<script setup>
import { ref } from 'vue';
import { usePatientAuthStore } from '../../stores/PatientAuth';

const patientAuthStore = usePatientAuthStore();

const form = ref({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
  phone_number: '',
  address: '',
  blood_type: '',
  known_sicknesses: '',
  allergies: ''
});

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center mb-6">Caregiver Sign Up</h2>
  
        <form @submit.prevent="patientAuthStore.handleRegister(form)">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input 
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter First Name"
              v-model="form.first_name"
            >
            <div v-if="patientAuthStore.errors.first_name" class="flex" >
              <span class="text-red-500 text-sm">{{ patientAuthStore.errors.first_name[0] }}</span>
          </div>
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input 
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Last Name"
              v-model="form.last_name"
            >
            <div v-if="patientAuthStore.errors.last_name" class="flex" >
              <span class="text-red-500 text-sm">{{ patientAuthStore.errors.last_name[0] }}</span>
          </div>
          </div>
  
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
  
          <div class="mb-4">
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
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input 
              type="password"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Confirm Password"
              v-model="form.password_confirmation"
            >
            <div v-if="patientAuthStore.errors.password_confirmation" class="flex" >
              <span class="text-red-500 text-sm">{{ patientAuthStore.errors.password_confirmation[0] }}</span>
          </div>
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input 
              type="tel"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Phone Number"
              v-model="form.number"
            >
            <div v-if="patientAuthStore.errors.number" class="flex" >
              <span class="text-red-500 text-sm">{{ patientAuthStore.errors.number[0] }}</span>
          </div>
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input 
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Address"
              v-model="form.address"
            >
            <div v-if="patientAuthStore.errors.address" class="flex" >
              <span class="text-red-500 text-sm">{{ patientAuthStore.errors.address[0] }}</span>
          </div>
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Blood Type
            </label>
            <select class="w-full px-3 py-2 border rounded-lg" v-model="form.blood_type">
              <option value="" disabled selected>Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <div v-if="patientAuthStore.errors.blood_type" class="flex" >
              <span class="text-red-500 text-sm">{{ patientAuthStore.errors.blood_type[0] }}</span>
          </div>
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Known Sicknesses
            </label>
            <textarea 
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="List any known sicknesses"
              v-model="form.known_sicknesses"
            ></textarea>
            <div v-if="patientAuthStore.errors.known_sicknesses" class="flex" >
              <span class="text-red-500 text-sm">{{ patientAuthStore.errors.known_sicknesses[0] }}</span>
          </div>
          </div>
  
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Allergies
            </label>
            <textarea 
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="List any allergies"
              v-model="form.allergies"
            ></textarea>
          </div>
  
          <button type="submit" class="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
            Sign Up
          </button>
        </form>
  
        <p class="text-center text-sm text-gray-600 mt-4">
          Already have an account? 
          <router-link :to="{ name: 'CaregiverLogin' }" class="text-blue-500 font-bold hover:underline">Login</router-link>
        </p>
      </div>
    </div>
  </template>
  