<template>
    <main class="grid grid-cols-4">
        <div class="col-start-2 col-span-2 mt-5 p-2 rounded-lg shadow-md">
            <div class="text-center text-2xl">We have sent an email with a link to {{$route.params.email}}.</div>

            <div class="text-center mt-4 mx-8">You now can set your new password using that link.</div>
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
