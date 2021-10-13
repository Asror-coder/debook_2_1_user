<template>
    <div>
        <nav class="p-6 bg-white flex justify-between shadow-lg">
            <ul class="flex items-center">
                <li>
                    <router-link to='/' class="p-3 mx-6 text-3xl"><span class="text-de">de</span><span class="text-book">Book</span></router-link>
                </li>
                <li @mouseover="showSports = true" @mouseleave="showSports = false" class="relative inline-block text-left" >

                    <div class="p-3 hover:bg-gray-100 focus:outline-none">Sports</div>

                    <transition name="fade">

                        <ul v-if="showSports" @click="listOne = false" class="absolute py-1 w-56 rounded-md shadow-lg bg-white focus:outline-none">

                            <li><router-link to='/clubs/tennis' class="text-gray-700 block px-4 py-2 hover:bg-gray-100">Tennis</router-link></li>
                            <li><router-link to='/clubs/padel' class="text-gray-700 block px-4 py-2 hover:bg-gray-100">Padel</router-link></li>
                        </ul>

                    </transition>
                </li>
                <li>
                    <router-link to='#' class="p-3 hover:bg-gray-100 focus:outline-none">Events</router-link>
                </li>
                <li>
                    <router-link to='#' class="p-3 hover:bg-gray-100 focus:outline-none">Explore</router-link>
                </li>
                <li>
                    <router-link to='#' class="p-3 hover:bg-gray-100 focus:outline-none">About us</router-link>
                </li>
            </ul>

            <ul class="flex items-center mr-6">

                <!-- Club search -->
                <li class="mr-10 relative inline-block text-left" v-on-clickaway="away">
                    <input type="text" name="clubName" placeholder="search" v-model="clubName"
                        class="bg-gray-100 rounded-md p-1 shadow-sm focus:outline-none" @focus="focused">

                    <transition name="fade">

                        <div v-show="showClubs" class="absolute py-1 w-48 rounded-md shadow-lg bg-white focus:outline-none">
                            <div v-if="searchedClubs.length == 0">
                                <p class="w-full p-1 hover:bg-gray-100">No clubs</p>
                            </div>

                            <div v-for="club in searchedClubs" :key="club.id" class="w-full">
                                <button @click="goToClubPage(club.partner_id)" class="focus:outline-none hover:bg-gray-100">{{club.name}}</button>
                            </div>
                        </div>
                    </transition>
                </li>

                <li class="mr-10 w-9 text-center hover:shadow-lg text-white" v-if="lang">
                    <button v-if="lang == 'nl'" @click="changeLang('en')" class="bg-red-500 w-full rounded-md">eng</button>
                    <button v-if="lang == 'en'" @click="changeLang('nl')" class="bg-yellow-500 w-full rounded-md">nl</button>
                </li>

                <!-- Login -->
                <li v-if="!user">
                    <router-link to='/login' class="p-3 hover:bg-gray-100 focus:outline-none">
                        Login
                    </router-link>
                </li>
                <li v-else-if="user">
                    <router-link to='/dashboard' class="p-3 hover:bg-gray-100 focus:outline-none">
                        {{user.name}} {{user.lastname}}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway';
import Button from './Dashboard/Button.vue';

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
        ...mapGetters('clubSearch',['searchedClubs']),
        user: function () {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user')).user
            } else return null
        }
    },
    methods: {
        ...mapActions('clubSearch',['searchClubName']),
        ...mapActions('translation',['getTranslation']),
        goToClubPage(id) {
            // console.log(id);    //remove
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
