<template>
    <div>
        <div class="hidden md:grid grid-cols-4 gap-4">
            <div class="col-span-1"></div>
            <main class="col-span-2 flex justify-center mt-16 2xl:px-20" v-if="translation">
                <div class="flex flex-col w-10/12 bg-white p-6 shadow-xl">
                    <h1 class="text-2xl text-center pb-5">{{ translation.auth.forgot.resetTitle }}</h1>

                    <form @submit.prevent="sendRequest" class="mx-10 my-2">
                        <div class="mb-4">
                            <label for="email" class="sr-only">Email</label>
                            <span class="w-full text-red-500" v-if="errors.email"> {{ errors.email[0] }} </span>
                            <input type="text" name="email" id="email" :placeholder="translation.auth.email"
                            class="bg-gray-200 border-2 w-full p-2 focus:outline-none" v-model="form.email">
                        </div>

                        <div class="mb-4">
                            <label for="password" class="sr-only">Password</label>
                            <span class="w-full text-red-500" v-if="errors.password"> {{ errors.password[0] }} </span>
                            <input type="password" name="password" id="password" :placeholder="translation.auth.pwd"
                            class="bg-gray-200 border-2 w-full p-2 focus:outline-none" v-model="form.password">
                        </div>

                        <div class="mb-4">
                            <label for="password_confirmation" class="sr-only">Password again</label>
                            <input type="password" name="password_confirmation" id="password_confirmation"
                                :placeholder="translation.auth.repPwd" v-model="form.password_confirmation"
                                class="bg-gray-200 border-2 w-full p-2 focus:outline-none">
                        </div>

                        <div>
                            <button type="submit" class="bg-blue-500 text-white p-2 font-medium w-full"
                                @click.prevent="sendRequest">{{ translation.auth.forgot.submit }}</button>
                        </div>
                    </form>
                </div>
            </main>
            <div class="col-span-1"></div>
        </div>

        <!-- Mobile version -->
        <div class="md:hidden px-4 py-10" v-if="translation">
            <div class="flex flex-col w-full bg-white p-5 rounded-lg shadow-xl">
                <h1 class="text-2xl text-center pb-5">{{ translation.auth.forgot.resetTitle }}</h1>

                <form @submit.prevent="sendRequest">
                    <div class="mb-4">
                        <label for="email" class="sr-only">Email</label>
                        <span class="w-full text-red-500" v-if="errors.email"> {{ errors.email[0] }} </span>
                        <input type="text" name="email" id="email" :placeholder="translation.auth.email"
                        class="bg-gray-200 border-2 w-full p-2 focus:outline-none" v-model="form.email">
                    </div>

                    <div class="mb-4">
                        <label for="password" class="sr-only">Password</label>
                        <span class="w-full text-red-500" v-if="errors.password"> {{ errors.password[0] }} </span>
                        <input type="password" name="password" id="password" :placeholder="translation.auth.pwd"
                        class="bg-gray-200 border-2 w-full p-2 focus:outline-none" v-model="form.password">
                    </div>

                    <div class="mb-4">
                        <label for="password_confirmation" class="sr-only">Password again</label>
                        <input type="password" name="password_confirmation" id="password_confirmation"
                            :placeholder="translation.auth.repPwd" v-model="form.password_confirmation"
                            class="bg-gray-200 border-2 w-full p-2 focus:outline-none">
                    </div>

                    <div>
                        <button type="submit" class="bg-blue-500 text-white p-2 font-medium w-full rounded-md shadow-lg"
                            @click.prevent="sendRequest">{{ translation.auth.forgot.submit }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PwdResetForm',
    data() {
        return {
            form: {
                token: this.$route.params.token,
                email: '',
                password: '',
                password_confirmation: '',
            },
            errors: []
        }
    },
    methods: {
        async sendRequest() {
            await axios.post('/api/reset-password', this.form).then((response) => {
                this.$router.push({ name: "PwdResetSuccess"});
            }).catch((error) => {
                this.errors = error.response.data.errors;
            })
        }
    }
}
</script>
