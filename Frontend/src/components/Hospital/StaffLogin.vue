<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore()

const form = ref({
  employee_id: '',
  password: ''
})


</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
  
        <form @submit.prevent="authStore.handleLogin(form)">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Employee ID
            </label>
            <input 
              type="text"
              v-model="form.employee_id"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Employee ID"
            >
            <div v-if="authStore.errors.employee_id" class="flex" >
              <span class="text-red-500 text-sm">{{ authStore.errors.employee_id[0] }}</span>
            </div>
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input 
              type="password"
              v-model="form.password"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Password"
            >
            <div v-if="authStore.errors.password" class="flex" >
              <span class="text-red-500 text-sm">{{ authStore.errors.password[0] }}</span>
          </div>
          </div>
  
          <div class="flex justify-between items-center mb-6">
            <router-link :to="{ name: 'ForgotPassword'}" class="text-blue-500 text-sm hover:underline">Forgot Password?</router-link>
          </div>
  
          <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
  
        <p class="text-center text-sm text-gray-600 mt-4">
          Don't have an account? 
          <router-link :to="{ name: 'Register' }" class="text-blue-500 font-bold hover:underline">Sign Up</router-link>
        </p>
      </div>
    </div>
  </template>
  