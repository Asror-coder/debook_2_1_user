<template>
    <div v-if="translation">
        <nav class="pt-6 pb-3 bg-background">
            <div class="flex flex-row items-center">
                <div class="md:hidden ml-4" @click="toggleShowMenu">
                    <i class="fas fa-bars text-dbGray text-3xl"></i>
                </div>

                <div class="md:hidden flex-grow"></div>

                <div class="flex items-center">
                    <router-link to='/' class="p-3 mx-6 text-4xl"><span class="text-de">de</span><span class="text-book">Book</span></router-link>
                    <ul class="hidden md:flex items-center">
                        <li @mouseover="showSports = true" @mouseleave="showSports = false" class="relative inline-block text-left" >

                            <button class="nav-btn">{{ translation.header.sports }}</button>

                            <transition name="fade">

                                <ul v-if="showSports" @click="listOne = false" class="absolute w-56 shadow-lg bg-white focus:outline-none">

                                    <li><router-link to='/clubs/tennis' class="drop-down">Tennis</router-link></li>
                                    <li><router-link to='/clubs/padel' class="drop-down">Padel</router-link></li>
                                </ul>

                            </transition>
                        </li>
                        <li>
                            <router-link to='#' class="nav-btn">{{ translation.header.events }}</router-link>
                        </li>
                        <li>
                            <router-link to='#' class="nav-btn">{{ translation.header.explore }}</router-link>
                        </li>
                        <li>
                            <router-link to='#' class="nav-btn">{{ translation.header.about_us }}</router-link>
                        </li>
                    </ul>
                </div>

                <div class="flex-grow"></div>

                <ul class="hidden md:flex items-center flex-row-reverse">
                    <!-- Login -->
                    <li v-if="!currentUser">
                        <router-link to='/login' class="nav-btn mr-2">
                            {{ translation.header.login }}
                        </router-link>
                    </li>
                    <li v-else-if="currentUser">
                        <router-link to='/dashboard' class="nav-btn mr-2">
                            {{currentUser.name}} {{currentUser.lastname}}
                        </router-link>
                    </li>

                    <!-- Language -->
                    <li class="mr-10 w-9 text-center hover:shadow-lg text-white" v-if="lang">
                        <button v-if="lang == 'nl'" @click="changeLang('en')" class="bg-red-500 w-full rounded-md">eng</button>
                        <button v-if="lang == 'en'" @click="changeLang('nl')" class="bg-yellow-500 w-full rounded-md">nl</button>
                    </li>

                    <!-- Club search -->
                    <li class="mr-10 relative inline-block text-left" v-on-clickaway="away">
                        <div class="border-b border-teal-500 mb-2">
                            <input type="text" name="clubName" :placeholder="translation.header.search" v-model="clubName" @focus="focused"
                                class="bg-transparent border-none text-white leading-tight p-1 shadow-lg focus:outline-none placeholder-gray-400">
                        </div>

                        <transition name="fade">

                            <div v-show="showClubs" class="absolute w-48 shadow-lg bg-white focus:outline-none">
                                <div v-if="searchedClubs.length == 0">
                                    <p class="w-full px-4 py-2">{{ translation.header.no_clubs }}</p>
                                </div>

                                <div v-for="club in searchedClubs" :key="club.id" class="w-full">
                                    <button @click="goToClubPage(club.partner_id)" class="drop-down w-full">{{club.name}}</button>
                                </div>
                            </div>
                        </transition>
                    </li>
                </ul>

                <!-- Mobile search button -->

                <button class="md:hidden mr-4" @click="toggleShowSearch">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dbGray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                <!-- Login mobile version -->
                <div class="md:hidden mr-4">
                    <router-link to='/login' v-if="!currentUser">
                        <i class="fas fa-user-circle text-dbGray text-3xl"></i>
                    </router-link>
                    <router-link to='/dashboard' v-else-if="currentUser">
                        <i class="fas fa-user-circle text-dbGray text-3xl"></i>
                    </router-link>
                </div>
            </div>

            <!-- Mobile search form -->
            <div v-if="showSearch" v-on-clickaway="toggleShowSearch" class="flex flex-row items-center justify-around px-6">
                <div class="relative inline-block text-left w-full">
                    <div class="border-b border-teal-500 mb-2">
                        <input type="text" name="clubName" :placeholder="translation.header.search" v-model="clubName"
                            class="bg-transparent border-none text-white text-xl leading-tight p-1 shadow-lg focus:outline-none placeholder-gray-400">
                    </div>

                    <div v-show="showSearch" class="absolute w-full shadow-lg bg-white focus:outline-none">
                        <div v-if="searchedClubs.length == 0">
                            <p class="w-full px-4 py-2 text-xl">{{ translation.header.no_clubs }}</p>
                        </div>

                        <div v-for="club in searchedClubs" :key="club.id" class="w-full">
                            <button @click="goToClubPage(club.partner_id)" class="drop-down w-full text-left text-xl">{{ club.name }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <hr class="border-gray-500 border-opacity-60">

        <!-- Mobile menu -->
        <!-- <div :class="[showMenu ? 'max-w-lg' : 'max-w-0']"
            class="absolute bg-gray-100 w-2/3 inset-y-0 left-0 transition-all duration-700 overflow-hidden">

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
        </div> -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway';
import Button from './Dashboard/components/Button.vue';

export default {
  components: { Button },
    name: 'Header',
    mixins: [ clickaway ],
    props: {
        showMenu: null
    },
    data() {
        return {
            showSports: false,
            showClubs: false,
            // showMenu: false,
            showSearch: false,

            clubName: '',
            lang: ''
            // clubSearch: {
            //     partnerId: '',
            //     sport_type: '',
            //     date: '',
            //     start_time: '',
            //     end_time: '',
            // }
        };
    },
    computed: {
        ...mapGetters('clubSearch',['searchedClubs'])
    },
    methods: {
        ...mapActions('clubSearch',['searchClubName']),
        ...mapActions('translation',['getTranslation']),
        goToClubPage(id) {

            /** Passing search information to club page **/

            // if (sessionStorage.getItem('search')) {
            //     var search_request = JSON.parse(sessionStorage.getItem('search'))

            //     if(search_request.date && search_request.start_time && search_request.end_time) {
            //         this.clubSearch.partnerId = id
            //         this.clubSearch.sport_type = search_request.sport_type
            //         this.clubSearch.date = search_request.date
            //         this.clubSearch.start_time = search_request.start_time
            //         this.clubSearch.end_time = search_request.end_time

            //         sessionStorage.setItem('clubSearch', JSON.stringify(this.clubSearch))
            //     }
            // }

            if (sessionStorage.getItem('clubSearch')) sessionStorage.removeItem('clubSearch')

            this.away()
            this.showSearch = false

            this.$router.push({name:'Club', params: { clubId: id}})
        },
        away() {
            this.showClubs = false
        },
        focused() {
            this.showClubs = true
        },
        changeLang(newLang) {
            this.lang = newLang
            sessionStorage.setItem('lang', this.lang)
            this.getTranslation(this.lang)
        },
        toggleShowMenu() {
            this.$emit("toggle-menu");
        },
        toggleShowSearch() {
            if (this.showMenu) this.toggleShowMenu()
            this.showSearch = !this.showSearch
        },
        goToSport(sport) {
            this.toggleShowMenu()
            this.$router.push({name:'Clubs', params: { sport: sport}})
        }
    },
    watch: {
        clubName: {
            immediate: true,
            handler (newVal, oldVal) {
                this.searchClubName(newVal)
            }
        }
    },
    mounted() {
        if (sessionStorage.getItem('lang')) this.changeLang(sessionStorage.getItem('lang'))
        else this.changeLang('en')
    },
}
</script>
