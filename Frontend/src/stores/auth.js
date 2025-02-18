import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
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
            await axios.get('/sanctum/csrf-cookie');
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
                await axios.post("/login", {
                    employee_id: data.employee_id,
                    password: data.password
                });
                this.router.push("/hospital-dashboard");
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
                await axios.post("/register", {
                    employee_id: data.employee_id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                    department: data.department,
                    email: data.email,
                });
                this.router.push("/hospital-dashboard");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleLogout() {
            await axios.post("/logout");
            this.authUser = null;
        },
        async handleForgotPassword(email) {
            this.authErrors = [];
            await this.getToken();
            try {
                const response = await axios.post("/forgot-password", {
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
            const response = await axios.post(`/reset-password`, {
                email: resetData.email,
                password: resetData.password,
                password_confirmation: resetData.password_confirmation,
                token: resetData.token
            });
                this.authStatus = response.data.status;
                // Wait 3 seconds before redirecting so user can see the success message
                setTimeout(() => {
                    this.router.push("/login");
                }, 3000);
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
    },
});
