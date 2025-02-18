<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore();


onMounted(async () => {
    await authStore.getUser();
});


</script>

<template>
    <div v-if="authStore.user">
        <h1>{{ authStore.user.first_name }}</h1>
        <p>{{ authStore.user.department }}</p>
    </div>
    <div v-else>
        <h1>Go and Login</h1>
    </div>
</template>