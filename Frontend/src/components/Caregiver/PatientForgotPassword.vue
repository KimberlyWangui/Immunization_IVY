<script setup>
import { ref } from 'vue'
import { usePatientAuthStore } from '../../stores/PatientAuth';

const authStore = usePatientAuthStore();

const email = ref('')
</script>

<template>
    <div>
        <form class="mx-auto max-w-md bg-slate-100 p-4 mt-12 rounded-lg" 
        @submit.prevent="authStore.handleForgotPassword(email)">
        <h2>Forgot Password</h2>
        <div class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md" v-if="authStore.status">
           {{ authStore.status }} 
        </div>
            <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" />
            <div v-if="authStore.errors.email" class="flex" >
                <span class="text-red-500 text-sm">{{ authStore.errors.email[0] }}</span>
            </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>