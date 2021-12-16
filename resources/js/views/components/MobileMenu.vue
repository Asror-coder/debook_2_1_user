<template>
    <div v-if="translation">
        <div :class="[showMenu ? 'max-w-lg' : 'max-w-0']"
            class="fixed bg-gray-100 w-2/3 inset-y-0 left-0 transition-all duration-700 overflow-hidden">

            <div class="flex mt-4 mx-4">
                <div class="text-4xl text-dbGray">{{ translation.header.sports }}</div>
                <div class="flex-grow"></div>
                <div @click="toggleShowMenu"><i class="fas fa-times text-dbGray text-3xl"></i></div>
            </div>

            <ul class="w-56 mt-3 pl-8 text-3xl focus:outline-none">
                <li class="mb-2"> <button @click="goToSport('tennis')">Tennis</button> </li>
                <li> <button @click="goToSport('padel')">Padel</button> </li>
            </ul>

            <hr class="border-gray-500 border-opacity-60 my-3 mx-4">

            <div class="w-56 text-4xl text-dbGray mx-4 flex flex-col">
                <router-link to='#' class="mb-4">{{ translation.header.events }}</router-link>
                <router-link to='#' class="mb-4">{{ translation.header.explore }}</router-link>
                <router-link to='#'>{{ translation.header.about_us }}</router-link>
            </div>

            <hr class="border-gray-500 border-opacity-60 my-3 mx-4">

            <div class="flex flex-row justify-around text-xl" v-if="lang">
                <button :class="lang == 'nl' ? 'text-dbGray' : 'text-black'" @click="changeLang('en')">eng</button>
                <button :class="lang == 'en' ? 'text-dbGray' : 'text-black'" @click="changeLang('nl')">nl</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'MobileMenu',
    props: {
        showMenu: null
    },
    data() {
        return {
            lang: ''
        };
    },
    methods: {
        ...mapActions('translation',['getTranslation']),
        changeLang(newLang) {
            this.lang = newLang
            sessionStorage.setItem('lang', this.lang)
            this.getTranslation(this.lang)
        },
        toggleShowMenu() {
            this.$emit("toggle-menu");
        },
        goToSport(sport) {
            this.toggleShowMenu()
            this.$router.push({name:'Clubs', params: { sport: sport}})
        }
    },
    mounted() {
        if (sessionStorage.getItem('lang')) this.changeLang(sessionStorage.getItem('lang'))
        else this.changeLang('en')
    },
}
</script>
