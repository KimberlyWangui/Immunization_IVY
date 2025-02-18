<script setup>
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center mb-6">Welcome to Immunization</h2>

      <div class="flex space-x-4">
        <router-link :to="{ name: 'Login' }" class="w-40 bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600">
          Staff Login
        </router-link>

        <router-link :to="{ name: 'CaregiverLogin' }" class="w-40 bg-green-500 text-white text-center py-2 px-4 rounded-lg hover:bg-green-600">
          Caregiver Login
        </router-link>
      </div>
    </div>
  </div>
</template>
