<template>
    <div>
        <div class="hidden md:grid grid-cols-4 gap-4">
            <div class="col-span-1"></div>
            <main class="col-span-2 flex justify-center mt-16 2xl:px-20" v-if="translation">
                <div class="flex flex-col w-10/12 bg-white p-6 shadow-xl">
                    <h1 class="text-2xl text-center pb-5">{{ translation.auth.forgot.requestTitle }}</h1>
                    <div class="text-gray-600 mx-5 mb-2 text-center">{{ translation.auth.forgot.requestInfo }}</div>

                    <form action="" @submit.prevent="sendRequest" class="mx-10">
                        <div class="text-red-600" v-show="emailError">{{ emailError }}</div>
                        <div class="mb-4">
                            <label for="email" class="sr-only">Email</label>
                            <input type="text" name="email" id="email" :placeholder="translation.auth.email" v-model="form.email"
                            class="bg-gray-200 border-none p-2 w-full focus:outline-none">
                        </div>

                        <div>
                            <button class="bg-blue-500 text-white px-6 py-2 w-full font-medium focus:outline-none"
                            type="submit">{{ translation.auth.forgot.send }}</button>
                        </div>
                    </form>
                </div>
            </main>
            <div class="col-span-1"></div>
        </div>

        <!-- Mobile version -->
        <div class="md:hidden px-3 py-20" v-if="translation">
            <div class="flex flex-col w-full bg-white p-5 rounded-lg shadow-xl">
                <div class="text-2xl text-center pb-5">{{ translation.auth.forgot.requestTitle }}</div>

                <div class="text-gray-600 mb-2">{{ translation.auth.forgot.requestInfo }}</div>

                <form @submit.prevent="sendRequest">
                    <div class="text-red-600" v-show="emailError">{{ emailError }}</div>
                    <div class="mb-4">
                        <label for="email" class="sr-only">Email</label>
                        <input type="text" name="email" id="email" :placeholder="translation.auth.email" v-model="form.email"
                        class="bg-gray-200 border-none p-2 w-full focus:outline-none">
                    </div>

                    <div>
                        <button class="bg-blue-500 text-white px-6 py-2 w-full font-medium rounded-md shadow-lg"
                        type="submit">{{ translation.auth.forgot.send }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PwdResetRequest',
    data() {
        return {
            form: {
                email: ''
            },
            emailError: ''
        }
    },
    methods: {
        async sendRequest() {

            if (this.emailError) this.emailError = ''
            if (this.messageError) this.messageError = ''

            await axios.post('/api/forgot-password', this.form).then((response)=>{
                this.$router.push({ name:'PwdRequestSent', params: {email: this.form.email} })
            }).catch((error) => {
                this.emailError = error.response.data.message[0]
            })
        }
    }
}
</script>
