import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue';

const routes = [
    { path: "/", name: "Home", component: Home },

    //Hospital routes
    { path: "/login", name: "Login", component: () => import("../components/Hospital/StaffLogin.vue") },
    { path: "/register", name: "Register", component: () => import("../components/Hospital/StaffRegister.vue") },
    { path: "/hospital-dashboard", name: "Success", component: () => import("../components/Hospital/HospitalDashboard.vue") },
    { path: "/forgot-password", name: "ForgotPassword", component: () => import("../components/Hospital/ForgotPassword.vue") },
    { path: "/password-reset/:token", name: "ResetPassword", component: () => import("../components/Hospital/ResetPassword.vue") },
    
    //Caregiver routes
    { path: "/caregiverregister", name: "CaregiverRegister", component: () => import("../components/Caregiver/CaregiverRegister.vue") },
    { path: "/caregiverlogin", name: "CaregiverLogin", component: () => import("../components/Caregiver/CaregiverLogin.vue") },
    { path: "/caregiver-dashboard", name: "CaregiverDashboard", component: () => import("../components/Caregiver/PatientDashboard.vue") },
    { path: "/patient-forgot-password", name: "PatientForgotPassword", component: () => import("../components/Caregiver/PatientForgotPassword.vue") },
    { path: "/patient-reset-password/:token", name: "PatientResetPassword", component: () => import("../components/Caregiver/PatientResetPassword.vue") },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;