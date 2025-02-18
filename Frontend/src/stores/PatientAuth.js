import { defineStore } from "pinia";
import axios from "axios";

export const usePatientAuthStore = defineStore("patientAuth", {
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
    },
    actions: {
        async getToken() {
            try {
                await axios.get('/sanctum/csrf-cookie');
            } catch (error) {
                console.error('CSRF token error:', error);
            }
        },
        async getUser() {
            await this.getToken();
            const data = await axios.get('/api/user');
            this.authUser = data.data;
        },
        async handleLogin(data) {
            this.authErrors = [];
            await this.getToken();
            try{
                await axios.post("/loginPatient", {
                    email: data.email,
                    password: data.password
                });
                this.router.push("/caregiver-dashboard");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;

                }
            }
        },
        async handleRegister(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                await axios.post("/registerPatient", {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                    number: data.number,
                    address: data.address,
                    blood_type: data.blood_type,
                    known_sicknesses: data.known_sicknesses,
                    allergies: data.allergies,
                });
                this.router.push("/caregiver-dashboard");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        
        async handleLogout() {
            await axios.post("/logoutPatient");
            this.authUser = null;
        },
        async handleForgotPassword(email) {
            this.authErrors = [];
            await this.getToken();
            try {
                const response = await axios.post("/patient/forgot-password", {
                    email: email
                });
                this.authStatus = response.data.status;
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleResetPassword(resetData) {
            this.authErrors = [];
            this.authStatus = null;
            await this.getToken();
            try {
                const response = await axios.post("/patient/reset-password", {
                    email: resetData.email,
                    password: resetData.password,
                    password_confirmation: resetData.password_confirmation,
                    token: resetData.token
                });
                this.authStatus = response.data.status;
                // Wait 3 seconds before redirecting so user can see the success message
                setTimeout(() => {
                    this.router.push("/caregiverlogin");
                }, 3000);
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
    },
});