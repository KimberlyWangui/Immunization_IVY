<script setup>
import { ref } from 'vue';
import { usePatientAuthStore } from '../../stores/PatientAuth';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const authStore = usePatientAuthStore();

const form = ref({
    password: '',
    password_confirmation: '',
    email: route.query.email,
    token: route.params.token,
});
</script>

<template>
    <h2>Reset Password</h2>
    <form @submit.prevent="authStore.handleResetPassword(form)">
        <div class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md" v-if="authStore.status">
            {{ authStore.status }} 
        </div>
        <div>
            <label for="password">New Password:</label>
            <input type="password" id="password" v-model="form.password"/>
            <div v-if="authStore.errors.password" class="flex">
                <span class="text-red-500 text-sm">{{ authStore.errors.password[0] }}</span>
            </div>
        </div>
        <div>
            <label for="password_confirmation">Confirm Password:</label>
            <input type="password" id="password_confirmation" v-model="form.password_confirmation" />
            <div v-if="authStore.errors.password_confirmation" class="flex">
                <span class="text-red-500 text-sm">{{ authStore.errors.password_confirmation[0] }}</span>
            </div>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>