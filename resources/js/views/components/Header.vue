<template>
    <div>
        <nav class="p-6 bg-white flex justify-between shadow-lg">
            <ul class="flex items-center">
                <li>
                    <router-link to='/' class="p-3 mx-6 text-3xl"><span class="text-de">de</span><span class="text-book">Book</span></router-link>
                </li>
                <li @mouseover="showSports = true" @mouseleave="showSports = false" class="relative inline-block text-left" >

                    <a href="" class="p-3 hover:bg-gray-100 focus:outline-none">Sports</a>

                    <transition name="fade">

                        <ul v-if="showSports" @click="listOne = false" class="absolute py-1 w-56 rounded-md shadow-lg bg-white focus:outline-none">

                            <li><router-link to='/clubs/tennis' class="text-gray-700 block px-4 py-2 hover:bg-gray-100">Tennis</router-link></li>
                            <li><router-link to='/clubs/padel' class="text-gray-700 block px-4 py-2 hover:bg-gray-100">Padel</router-link></li>
                            <!-- <li><router-link to='/clubs/squash' class="text-gray-700 block px-4 py-2 hover:bg-gray-100">Squash</router-link></li> -->
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
                <li class="mr-10 relative inline-block text-left" @blur="showClubs = false">
                    <input type="text" name="clubName" placeholder="search" v-model="clubName"
                        class="bg-gray-100 rounded-md p-1 shadow-sm focus:outline-none" @focus="showClubs = true">
                    <!-- <input type="text" name="clubName" placeholder="search" v-model="clubName"
                        class="bg-gray-100 rounded-md p-1 shadow-sm focus:outline-none"> -->

                    <transition name="fade">

                        <ul v-if="showClubs" @click="showClubs = false" class="absolute py-1 w-56 rounded-md shadow-lg bg-white focus:outline-none">

                            <li><router-link to='/clubs/tennis' class="text-gray-700 block px-4 py-2 hover:bg-gray-100">Tennis</router-link></li>
                            <li><router-link to='/clubs/padel' class="text-gray-700 block px-4 py-2 hover:bg-gray-100">Padel</router-link></li>
                            <!-- <li><router-link to='/clubs/squash' class="text-gray-700 block px-4 py-2 hover:bg-gray-100">Squash</router-link></li> -->
                        </ul>

                    </transition>

                    <!-- <transition name="fade">
                        <ul v-show="showClubs" class="absolute shadow-md w-full">
                            <li>
                                <router-link to='/dashboard' class="w-full p-1 hover:bg-gray-100 focus:outline-none">No clubs</router-link>
                            </li>
                        </ul> -->
                        <!-- <div v-if="searchedClubs.length == 0">No clubs
                            <router-link to='/dashboard' class="w-full p-1 hover:bg-gray-100 focus:outline-none">No clubs</router-link>
                        </div> -->

                        <!-- <div v-else v-for="club in searchedClubs" :key="club.id"> -->
                            <!-- <button @click="goToClubPage(club.id)"
                                class="w-full focus:">{{club.name}}</button> -->
                            <!-- <router-link to='/dashboard' class="w-full p-1 hover:bg-gray-100 focus:outline-none">{{club.name}}</router-link>
                        </div> -->
                    <!-- </transition> -->
                </li>
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
// import { mixin as clickaway } from 'vue-clickaway';

export default {
    name: 'Header',
    // mixins: [ clickaway ],
    data() {
        return {
            showSports: false,
            clubName: '',
            showClubs: false
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
        goToClubPage() {
            console.log("id");    //remove
            // if (localStorage.getItem('search')) {
            //     var search_request = JSON.parse(localStorage.getItem('search'))

            //     if(search_request.date && search_request.start_time && search_request.end_time) {
            //         this.clubSearch.partnerId = this.club[0].id
            //         this.clubSearch.sport_type = search_request.sport_type
            //         this.clubSearch.date = search_request.date
            //         this.clubSearch.start_time = search_request.start_time
            //         this.clubSearch.end_time = search_request.end_time

            //         localStorage.setItem('clubSearch', JSON.stringify(this.clubSearch))
            //     }
            // }

            // this.$router.push({name:'Club', params: { clubId: id}})
        }
    },
    watch: {
        clubName: {
            immediate: true,
            handler (newVal, oldVal) {
                this.searchClubName(newVal)
            }
        }
    }
}
</script>
