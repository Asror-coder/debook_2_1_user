<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1"></div>
        <main class="col-span-2 flex justify-center mt-16">
            <div class="flex flex-col w-10/12 bg-white p-6 rounded-lg shadow-xl">
                <h1 class="text-2xl text-center pb-5">Log in to your account</h1>

                <div class="text-red-600" v-show="messageError">{{ messageError }}</div>

                <form action="" @submit.prevent="login" class="mx-10">
                    <div class="text-red-600" v-show="emailError">{{ emailError }}</div>
                    <div class="mb-4">
                        <label for="email" class="sr-only">Email</label>
                        <input type="text" name="email" id="email" placeholder="Your email" v-model="form.email"
                        class="bg-gray-200 border-none p-2 rounded-lg w-full focus:outline-none">
                    </div>

                    <div class="text-red-600" v-show="pwdError">{{ pwdError }}. If you forgot your password follow the link bellow.</div>
                    <div class="mb-4">
                        <label for="password" class="sr-only">Password</label>
                        <input type="password" name="password" id="password" placeholder="Your password" v-model="form.password"
                        class="bg-gray-200 border-none p-2 rounded-lg w-full focus:outline-none">
                    </div>

                    <div>
                        <button class="bg-blue-500 text-white px-6 py-2 w-full rounded font-medium focus:outline-none"
                        type="submit">Login</button>
                    </div>
                </form>

                <div class="flex flex-row mt-5">
                    <div class="flex-none">
                        <router-link to='/newpassword/request' class="p-3">Forgot your password?</router-link>
                    </div>
                    <div class="flex-grow"></div>
                    <div class="flex-none">
                        <span class="text-gray-600">Not a member yet?</span><router-link to='/register' class="p-3 text-blue-900">Register here</router-link>
                    </div>
                </div>
            </div>
        </main>
        <div class="col-span-1"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            emailError: '',
            messageError: '',
            pwdError: ''
        }
    },
    computed: mapGetters('user',['loginError']),
    methods: {
        ...mapActions('user',['loginUser']),
        async login() {

            if (this.emailError) this.emailError = ''
            if (this.messageError) this.messageError = ''
            if (this.pwdError) this.pwdError = ''

            await this.loginUser(this.form)

            if(!this.loginError) {
                location.reload()
            }
            else {
                if (this.loginError.response.data.message[0])
                    this.messageError = this.loginError.response.data.message[0];

                if (this.loginError.response.data.errors) {
                    if (this.loginError.response.data.errors.email)
                        this.emailError = this.loginError.response.data.errors.email[0];

                    if (this.loginError.response.data.errors.password)
                        this.pwdError = this.loginError.response.data.errors.password[0];
                }
            }
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
