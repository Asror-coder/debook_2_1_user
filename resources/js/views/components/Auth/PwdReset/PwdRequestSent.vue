<template>
    <main class="grid grid-cols-4" v-if="translation">
        <div class="col-start-2 col-span-2 mt-10 p-2 shadow-md bg-white">
            <div class="text-center text-2xl">
                {{ translation.auth.forgot.emailSent }} <span class=" text-de">{{$route.params.email}}</span>
            </div>

            <div class="text-center mt-4 mx-8">{{ translation.auth.forgot.newPasInfo }}</div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'PwdRequestSent',
    mounted() {
        if(!this.$route.params.email) this.$router.push('/notfound')
    }
};
</script>
