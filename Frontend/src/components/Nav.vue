<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../stores/auth';
import { usePatientAuthStore } from '../stores/PatientAuth';

const authStore = useAuthStore();
const patientAuthStore = usePatientAuthStore();

//Determining User State
const userState = computed(() => {
    if (authStore.user) {
        return 'staff';
    } else if (patientAuthStore.user) {
        return 'caregiver';
    } else {
        return 'guest';
    }
})

</script>

<template>
    <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-white text-lg font-bold">
                Immunization Tracker
            </div>
            <div>
                <router-link :to="{ name: 'Home' }" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
                
                <!-- Guest links -->
        <template v-if="userState === 'guest'">
          <router-link 
            :to="{ name: 'Login' }" 
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Staff Login
          </router-link>
          <router-link 
            :to="{ name: 'Register' }" 
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Staff Sign Up
          </router-link>
          <router-link 
            :to="{ name: 'CaregiverLogin' }" 
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Caregiver Login
          </router-link>
          <router-link 
            :to="{ name: 'CaregiverRegister' }" 
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Caregiver Sign Up
          </router-link>
        </template>

        <!-- Staff links -->
        <template v-if="userState === 'staff'">
          <button 
            @click="authStore.handleLogout" 
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </template>

        <!-- Caregiver links -->
        <template v-if="userState === 'caregiver'">
          <button 
            @click="patientAuthStore.handleLogout" 
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </template>


                
                <!--<template v-if="!authStore.user">
                    <router-link :to="{ name: 'Login' }" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Staff login</router-link>
                    <router-link :to="{ name: 'Register' }" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Staff Sign UP</router-link>
                </template>
                <template v-else>
                    <button @click="authStore.handleLogout" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
                </template>

                <template v-if="!patientAuthStore.user">
                    <router-link :to="{ name: 'CaregiverLogin' }" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Caregiver Login</router-link>
                    <router-link :to="{ name: 'CaregiverRegister' }" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Caregiver Sign UP</router-link>
                </template>
                <template v-else>
                    <button @click="patientAuthStore.handleLogout" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
                </template>-->




            </div>
        </div>
    </nav>
</template>