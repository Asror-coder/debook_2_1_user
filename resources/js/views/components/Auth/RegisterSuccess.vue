<template>
    <main class="grid grid-cols-4" v-if="translation">
        <div class="col-start-2 col-span-2 mt-10 p-2 bg-white">
            <div class="text-center text-2xl">
                {{ translation.auth.register.success }}
            </div>

            <div class="text-center mt-4 mx-8">
                 {{ translation.auth.register.successInfo }}
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'RegisterSuccess',
};
</script>
