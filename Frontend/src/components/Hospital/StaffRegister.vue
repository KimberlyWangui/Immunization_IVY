<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();

const form = ref({
  employee_id: '',
  first_name: '',
  last_name: '',
  password: '',
  password_confirmation: '',
  department: '',
  email: ''
});

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center mb-6">Hospital Staff Sign Up</h2>
  
        <form @submit.prevent="authStore.handleRegister(form)">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Employee ID
            </label>
            <input 
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Employee ID"
              v-model="form.employee_id"
            >
            <div v-if="authStore.errors.employee_id" class="flex" >
              <span class="text-red-500 text-sm">{{ authStore.errors.employee_id[0] }}</span>
          </div>
          </div>
  
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
            <div v-if="authStore.errors.first_name" class="flex" >
              <span class="text-red-500 text-sm">{{ authStore.errors.first_name[0] }}</span>
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
            <div v-if="authStore.errors.last_name" class="flex" >
              <span class="text-red-500 text-sm">{{ authStore.errors.last_name[0] }}</span>
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
            <div v-if="authStore.errors.password" class="flex" >
              <span class="text-red-500 text-sm">{{ authStore.errors.password[0] }}</span>
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
            <div v-if="authStore.errors.password_confirmation" class="flex" >
              <span class="text-red-500 text-sm">{{ authStore.errors.password_confirmation[0] }}</span>
          </div>
          </div>
  
            <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Department
            </label>
            <select class="w-full px-3 py-2 border rounded-lg" v-model="form.department">
              <option value="" disabled selected>Select Department</option>
              <option value="Nursing">Nursing</option>
              <option value="Radiology">Radiology</option>
              <option value="Surgery">Surgery</option>
              <option value="Emergency">Emergency</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Laboratory">Laboratory</option>
              <option value="Administration">Administration</option>
            </select>
            <div v-if="authStore.errors.department" class="flex" >
              <span class="text-red-500 text-sm">{{ authStore.errors.department[0] }}</span>
            </div>
          </div>
            

            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input 
              type="email"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter First Name"
              v-model="form.email"
            >
            <div v-if="authStore.errors.email" class="flex" >
              <span class="text-red-500 text-sm">{{ authStore.errors.email[0] }}</span>
          </div>
            </div>
  
          <button type="submit" class="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
            Sign Up
          </button>
        </form>
  
        <p class="text-center text-sm text-gray-600 mt-4">
          Already have an account? 
          <router-link :to="{ name: 'Login' }" class="text-blue-500 font-bold hover:underline">Login</router-link>
        </p>
      </div>
    </div>
  </template>
  