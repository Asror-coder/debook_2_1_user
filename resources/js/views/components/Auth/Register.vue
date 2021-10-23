<template>
    <div class="grid grid-cols-4 gap-4 bg-cover" style="background-image: url('storage/images/login-bg.jpeg')">
        <div class="col-span-1"></div>
        <main class="col-span-2 flex justify-center my-4">
            <div class="flex flex-col w-10/12 bg-white p-6 shadow-xl">
                <h1 class="text-2xl text-center pb-5">Create new account</h1>

                <div class="mx-10 text-gray-800">Please fill all fields.</div>
                <form @submit.prevent="register" class="mx-10 my-2">
                    <div class="mb-4">
                        <label for="name" class="sr-only">First Name</label>
                        <span class="w-full text-red-500" v-if="errors.name"> {{ errors.name[0] }} </span>
                        <input type="text" name="name" id="name" placeholder="Your first name"
                        class="bg-gray-200 border-2 w-full p-2 focus:outline-none" v-model="form.name">
                    </div>

                    <div class="mb-4">
                        <label for="lastname" class="sr-only">Last name</label>
                        <span class="w-full text-red-500" v-if="errors.lastname"> {{ errors.lastname[0] }} </span>
                        <input type="text" name="lastname" id="lastname" placeholder="Your last name"
                        class="bg-gray-200 border-2 w-full p-2 focus:outline-none" v-model="form.lastname">
                    </div>

                    <div class="mb-4">
                        <label for="email" class="sr-only">Email</label>
                        <span class="w-full text-red-500" v-if="errors.email"> {{ errors.email[0] }} </span>
                        <input type="text" name="email" id="email" placeholder="Your email"
                        class="bg-gray-200 border-2 w-full p-2 focus:outline-none" v-model="form.email">
                    </div>

                    <div class="mb-4">
                        <label for="phone" class="sr-only">Phone</label>
                        <span class="w-full text-red-500" v-if="errors.phone"> {{ errors.phone[0] }} </span>
                        <input type="number" name="phone" id="phone" placeholder="Your phone number"
                        class="bg-gray-200 border-2 w-full p-2 focus:outline-none" v-model="form.phone">
                    </div>

                    <div class="mb-4">
                        <label for="password" class="sr-only">Password</label>
                        <span class="w-full text-red-500" v-if="errors.password"> {{ errors.password[0] }} </span>
                        <input type="password" name="password" id="password" placeholder="Choose a password"
                        class="bg-gray-200 border-2 w-full p-2 focus:outline-none" v-model="form.password">
                    </div>

                    <div class="mb-4">
                        <label for="password_confirmation" class="sr-only">Password again</label>
                        <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Repeat your password"
                        class="bg-gray-200 border-2 w-full p-2 focus:outline-none" v-model="form.password_confirmation">
                    </div>

                    <div>
                        <button type="submit" class="bg-blue-500 text-white p-2 font-medium w-full"
                            @click.prevent="register">Register</button>
                    </div>
                </form>
            </div>
        </main>
        <div class="col-span-1"></div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name: 'Register',
    data() {
        return {
            form: {
                name: '',
                lastname: '',
                email: '',
                phone: '',
                password: '',
                password_confirmation: '',
            },
            errors: []
        }
    },
    methods: {
        ...mapActions('user',['loginUser']),
        async register() {
            await axios.post('/api/register', this.form).then((response) => {
                this.$router.push({ name: "RegisterSuccess"});
            }).catch((error) => {
                this.errors = error.response.data.errors;
            })
        },
        checkUser() {
            if(localStorage.getItem('user')) {
                this.$router.push({ name: "Dashboard"});
            }
        }
    },
    created() {
        this.checkUser()
    }
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
