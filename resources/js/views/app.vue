<template>
    <div class="flex flex-col h-screen">
        <Header class="flex-none w-screen" />

        <div class="flex-grow w-screen">
            <router-view></router-view>
        </div>

        <Footer class="flex-none w-screen" />
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
    components: {
        Header,
        Footer
    },
};
</script>
