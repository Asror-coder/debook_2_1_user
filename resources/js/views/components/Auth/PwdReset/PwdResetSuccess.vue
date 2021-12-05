<template>
    <div>
        <main class="hidden md:grid grid-cols-4" v-if="translation">
            <div class="col-start-2 col-span-2 mt-10 p-2 bg-white">
                <div class="text-center text-2xl">
                    {{ translation.auth.forgot.success }}
                </div>

                <div class="text-center mt-4 mx-8">
                    {{ translation.auth.forgot.successInfo }}
                </div>
            </div>
        </main>

        <!-- Mobile version -->
        <main class="md:hidden px-3 py-6" v-if="translation">
            <div class="mt-10 p-2 bg-white rounded-lg">
                <div class="text-center text-2xl">
                    {{ translation.auth.forgot.success }}
                </div>

                <div class="text-center mt-4 mx-4">
                    {{ translation.auth.forgot.successInfo }}
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'PwdResetSuccess',
};
</script>
