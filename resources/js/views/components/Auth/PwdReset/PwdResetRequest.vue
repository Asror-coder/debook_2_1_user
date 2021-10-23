<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1"></div>
        <main class="col-span-2 flex justify-center mt-16">
            <div class="flex flex-col w-10/12 bg-white p-6 shadow-xl">
                <h1 class="text-2xl text-center pb-5">Reset your password</h1>
                <div class="text-gray-600 mx-5 mb-2 text-center">Please enter your email address where a link to reset your password will be sent.</div>

                <form action="" @submit.prevent="sendRequest" class="mx-10">
                    <div class="text-red-600" v-show="emailError">{{ emailError }}</div>
                    <div class="mb-4">
                        <label for="email" class="sr-only">Email</label>
                        <input type="text" name="email" id="email" placeholder="Your email" v-model="form.email"
                        class="bg-gray-200 border-none p-2 w-full focus:outline-none">
                    </div>

                    <div>
                        <button class="bg-blue-500 text-white px-6 py-2 w-full font-medium focus:outline-none"
                        type="submit">Send request</button>
                    </div>
                </form>
            </div>
        </main>
        <div class="col-span-1"></div>
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
