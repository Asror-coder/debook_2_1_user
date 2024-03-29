<template>
    <div>
        <div class="hidden md:grid grid-cols-4 gap-4 bg-cover" style="background-image: url('https://debook.s3.eu-west-1.amazonaws.com/site_images/login-bg.jpeg')">
            <div class="col-span-1"></div>
            <main class="col-span-2 flex justify-center my-28 2xl:px-20" v-if="translation">
                <div class="flex flex-col w-10/12 bg-white p-6 shadow-xl">
                    <h1 class="text-2xl text-center pb-5">{{ translation.auth.login.title }}</h1>

                    <div class="p-2 mb-2 bg-green-200 mt-2 rounded-md"
                        v-show="showLoginMessage"> {{ translation.auth.login.bookMsg }}
                    </div>

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

        <!-- Mobile version -->
        <div class="md:hidden bg-cover py-20 px-3" v-if="translation"
            style="background-image: url('https://debook.s3.eu-west-1.amazonaws.com/site_images/login-bg.jpeg')">

            <div class="bg-white rounded-lg shadow-xl p-2">
                <div class="text-2xl text-center pb-5">{{ translation.auth.login.title }}</div>

                <div class="p-2 mb-2 bg-green-200 mt-2 rounded-md"
                    v-show="showLoginMessage"> {{ translation.auth.login.bookMsg }}
                </div>

                <div class="w-full text-center mb-2">
                    <div class="text-red-600" v-show="messageError">{{ messageError }}</div>
                </div>

                <form @submit.prevent="login">
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
                        <button class="bg-blue-500 rounded-lg shadow-lg text-white px-6 py-2 w-full font-medium"
                        type="submit">{{ translation.auth.login.btn }}</button>
                    </div>
                </form>


                <div class="flex justify-between items-center mt-3">
                    <button class="text-blue-900">
                        <router-link to='/newpassword/request'>
                            {{ translation.auth.forgot.forgotPwd }}
                        </router-link>
                    </button>

                    <button class="bg-green-500 rounded-lg shadow-lg text-white py-1 px-4">
                        <router-link to='/register'>
                            {{ translation.auth.login.register }}
                        </router-link>
                    </button>
                </div>
            </div>
        </div>
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
            pwdError: '',
            showLoginMessage: false
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
                if (sessionStorage.getItem('back') == 'd7JD8Hr3Gs' && sessionStorage.getItem('clubSearch')) {
                    sessionStorage.removeItem('back')
                    var clubSearch = JSON.parse(sessionStorage.getItem('clubSearch'))
                    this.$router.push({ name:'Club', params: {clubId: clubSearch.partnerId}})
                }
                else location.reload()
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
        if (sessionStorage.getItem('back') == 'd7JD8Hr3Gs') this.showLoginMessage = true
    }
}
</script>
