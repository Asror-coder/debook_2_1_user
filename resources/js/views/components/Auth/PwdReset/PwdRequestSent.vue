<template>
    <div>
        <main class="hidden md:grid grid-cols-4" v-if="translation">
            <div class="col-start-2 col-span-2 mt-10 p-2 shadow-md bg-white">
                <div class="text-center text-2xl">
                    {{ translation.auth.forgot.emailSent }} <span class=" text-de">{{$route.params.email}}</span>
                </div>

                <div class="text-center mt-4 mx-8">{{ translation.auth.forgot.newPasInfo }}</div>
            </div>
        </main>

        <!-- Mobile version -->
        <main class="md:hidden px-3 py-6" v-if="translation">
            <div class="mt-10 p-2 bg-white rounded-lg">
                <div class="text-center text-2xl">
                    {{ translation.auth.forgot.emailSent }} <span class=" text-de">{{$route.params.email}}</span>
                </div>

                <div class="text-center mt-4 mx-4">
                    {{ translation.auth.forgot.newPasInfo }}
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'PwdRequestSent',
    mounted() {
        if(!this.$route.params.email) this.$router.push('/notfound')
    }
};
</script>
