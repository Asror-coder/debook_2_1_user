<template>
    <div class="grid grid-cols-4 gap-4 bg-cover" style="background-image: url('https://debook.s3.eu-west-1.amazonaws.com/site_images/login-bg.jpeg')">
        <div class="col-span-1"></div>
        <main class="col-span-2 flex justify-center my-28" v-if="translation">
            <div class="flex flex-col w-10/12 bg-white p-6 shadow-xl">
                <h1 class="text-2xl text-center pb-5">{{ translation.auth.login.title }}</h1>

                <div class="w-full text-center mb-2">
                    <div class="text-red-600" v-show="messageError">{{ messageError }}</div>
                </div>

                <form action="" @submit.prevent="login" class="mx-10">
                    <div class="text-red-600" v-show="emailError">{{ emailError }}</div>
                    <div class="mb-4">
                        <label for="email" class="sr-only">Email</label>
                        <input type="text" name="email" id="email" :placeholder="translation.auth.email" v-model="form.email"
                        class="bg-gray-200 border-none p-2 w-full focus:outline-none">
                    </div>

                    <div class="text-red-600" v-show="pwdError">{{ pwdError }}</div>
                    <div class="mb-4">
                        <label for="password" class="sr-only">Password</label>
                        <input type="password" name="password" id="password"
                            :placeholder="translation.auth.login.password" v-model="form.password"
                            class="bg-gray-200 border-none p-2 w-full focus:outline-none">
                    </div>

                    <div>
                        <button class="bg-blue-500 text-white px-6 py-2 w-full font-medium focus:outline-none"
                        type="submit">{{ translation.auth.login.btn }}</button>
                    </div>
                </form>

                <div class="flex flex-row mt-5">
                    <div class="flex-none">
                        <router-link to='/newpassword/request' class="p-3 hover:text-blue-700">{{ translation.auth.login.forgotPwd }}</router-link>
                    </div>
                    <div class="flex-grow"></div>
                    <div class="flex-none">
                        <span class="text-gray-600">{{ translation.auth.login.notMemder }}</span>
                        <router-link to='/register' class="p-3 hover:text-blue-700">{{ translation.auth.login.register }}</router-link>
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
                if (this.loginError.response.data.errors) {
                    if (this.loginError.response.data.errors.email)
                        this.emailError = this.loginError.response.data.errors.email[0];

                    if (this.loginError.response.data.errors.password)
                        this.pwdError = this.loginError.response.data.errors.password[0];
                }
                else if (this.loginError.response.data.message)
                    this.messageError = this.loginError.response.data.message;
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
