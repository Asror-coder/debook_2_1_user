<template>
    <div v-if="translation">
        <nav class="pt-6 pb-3 bg-background flex flex-row">
            <ul class="flex items-center">
                <li>
                    <router-link to='/' class="p-3 mx-6 text-4xl"><span class="text-de">de</span><span class="text-book">Book</span></router-link>
                </li>
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

            <div class="flex-grow"></div>

            <ul class="flex items-center flex-row-reverse">
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
        </nav>

        <hr class=" border-gray-500 border-opacity-60">
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
    data() {
        return {
            showSports: false,
            clubName: '',
            showClubs: false,
            lang: ''
        };
    },
    computed: {
        ...mapGetters('clubSearch',['searchedClubs'])
    },
    methods: {
        ...mapActions('clubSearch',['searchClubName']),
        ...mapActions('translation',['getTranslation']),
        goToClubPage(id) {
            if (sessionStorage.getItem('search')) {
                var search_request = JSON.parse(sessionStorage.getItem('search'))

                if(search_request.date && search_request.start_time && search_request.end_time) {
                    this.clubSearch.partnerId = this.club[0].id
                    this.clubSearch.sport_type = search_request.sport_type
                    this.clubSearch.date = search_request.date
                    this.clubSearch.start_time = search_request.start_time
                    this.clubSearch.end_time = search_request.end_time

                    sessionStorage.setItem('clubSearch', JSON.stringify(this.clubSearch))
                }
            }

            this.away()

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
