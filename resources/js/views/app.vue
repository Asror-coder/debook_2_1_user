<template>
    <div class="flex flex-col h-screen">

        <Header class="flex-none w-screen" @toggle-menu="toggleShowMenu" />

        <div class="flex-grow w-screen">
            <router-view></router-view>
        </div>

        <Footer class="flex-none w-screen" />

        <MobileMenu :showMenu="showMenu" @toggle-menu="toggleShowMenu" />
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu.vue';

export default {
    components: {
        Header,
        Footer,
        MobileMenu
    },
    data() {        //remove
        return {
            showMenu: false,
        }
    },
    methods: {      //remove
        toggleShowMenu() {
            this.showMenu = !this.showMenu
        },
    },
};
</script>
