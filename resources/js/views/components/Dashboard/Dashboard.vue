<template>
    <div>
        <div class="hidden md:grid grid-cols-4 gap-4" v-if="translation">
            <main class="col-span-2 col-start-2">

                                                <!-- Dashboard header -->
                <div class="grid grid-cols-7 my-3">
                    <div class="flex justify-center">
                        <img src="https://debook.s3.eu-west-1.amazonaws.com/site_images/default.png"  class="h-20 rounded-3xl">
                    </div>

                    <div class="col-span-6">
                        <div class="text-2xl text-white font-bold ml-2">{{currentUser.name}} {{currentUser.lastname}}</div>

                        <div class="flex flex-row bg-gray-700 bg-opacity-80 shadow-lg rounded-2xl p-2 mt-1">
                            <button :class="!showPassed ? 'flex-none text-white rounded-full hover:text-white focus:outline-none px-3 bg-dashBtnBlue' : 'dash-btn'"
                                @click="toggleShowPassed"> {{ translation.dashboard.upcomming }} </button>
                            <button :class="showPassed ? 'flex-none text-white rounded-full hover:text-white focus:outline-none px-3 bg-dashBtnBlue' : 'dash-btn'"
                                @click="toggleShowPassed"> {{ translation.dashboard.passed }} </button>

                            <div class="flex-grow"></div>

                            <button class="dash-btn"
                                @click="toggleShowProfile"> {{ translation.dashboard.profile }} </button>
                            <button class="dash-btn"
                                @click.prevent="logout"> {{ translation.dashboard.logout }} </button>
                        </div>
                    </div>
                </div>

                                                <!-- Profile -->
                <div v-show="showProfile">
                    <Profile />
                </div>

                                                <!-- Upcomming bookings -->
                <div v-if="!showPassed">
                    <div class="text-xl text-dbGray font-bold"> {{ translation.dashboard.upcomming }}</div>

                    <div v-if="this.activeBookings.length > 0">
                        <Bookings :bookings="activeBookings" :pages="activeBookingsPage" @changePage="changeActiveBookings" />
                    </div>
                    <div v-else class="text-lg text-gray-500"> {{ translation.dashboard.no_bookings }} </div>
                </div>

                                                <!-- Passed bookings -->
                <div v-if="showPassed">
                    <div class="text-xl text-dbGray font-bold">{{ translation.dashboard.passed }}</div>

                    <div v-if="this.notActiveBookings">
                        <Bookings :bookings="notActiveBookings" :pages="notActiveBookingsPage" @changePage="changeNotActiveBookings" />
                    </div>
                    <div v-else class="text-lg text-gray-500"> {{ translation.dashboard.no_bookings }} </div>
                </div>
            </main>
        </div>

        <!-- Mobile version -->
        <div class="md:hidden px-2" v-if="translation">

                                            <!-- Dashboard header -->
            <div class="grid grid-cols-4 my-3">
                <div class="flex justify-center items-center">
                    <img src="https://debook.s3.eu-west-1.amazonaws.com/site_images/default.png"  class="h-20 rounded-3xl">
                </div>

                <div class="col-span-3">
                    <div class="text-2xl text-white font-bold ml-2">{{currentUser.name}} {{currentUser.lastname}}</div>

                    <div class="flex items-center justify-between px-6 py-2 mt-1">
                        <button class="text-white bg-gray-700 px-8 rounded-xl bg-opacity-80 shadow-lg focus:outline-none"
                            @click="toggleShowProfile"> {{ translation.dashboard.profile }} </button>
                        <button class="text-dbGray focus:outline-none"
                            @click.prevent="logout"> {{ translation.dashboard.logout }} </button>
                    </div>
                </div>
            </div>

                                            <!-- Profile -->
            <div v-show="showProfile">
                <Profile />
            </div>

                                            <!-- Bookings buttons -->
            <div class="flex justify-around bg-gray-700 bg-opacity-80 shadow-lg rounded-2xl p-2 mt-1">
                <button :class="!showPassed ? 'flex-none text-white rounded-full hover:text-white focus:outline-none px-3 bg-dashBtnBlue' : 'dash-btn'"
                    @click="toggleShowPassed"> {{ translation.dashboard.upcomming }} </button>
                <button :class="showPassed ? 'flex-none text-white rounded-full hover:text-white focus:outline-none px-3 bg-dashBtnBlue' : 'dash-btn'"
                    @click="toggleShowPassed"> {{ translation.dashboard.passed }} </button>
            </div>

                                            <!-- Upcomming bookings -->
            <div v-if="!showPassed">
                <div class="text-xl text-dbGray font-bold"> {{ translation.dashboard.upcomming }}</div>

                <div v-if="this.activeBookings.length > 0">
                    <Bookings :bookings="activeBookings" :pages="activeBookingsPage" @changePage="changeActiveBookings" />
                </div>
                <div v-else class="text-lg text-gray-500"> {{ translation.dashboard.no_bookings }} </div>
            </div>

                                            <!-- Passed bookings -->
            <div v-if="showPassed">
                <div class="text-xl text-dbGray font-bold">{{ translation.dashboard.passed }}</div>

                <div v-if="this.notActiveBookings">
                    <Bookings :bookings="notActiveBookings" :pages="notActiveBookingsPage" @changePage="changeNotActiveBookings" />
                </div>
                <div v-else class="text-lg text-gray-500"> {{ translation.dashboard.no_bookings }} </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BookingCard from './components/BookingCard'
import Bookings from './components/Bookings.vue'
import Button from './components/Button.vue'
import Profile from './components/Profile.vue'

export default {
    name: 'Dashboard',
    components: {
        BookingCard,
        Button,
        Profile,
        Bookings
    },
    data() {
        return {
            showProfile: false,
            showPassed: false
        };
    },
    methods: {
        ...mapActions('user',['logoutUser']),
        ...mapActions('bookings',['fetchActiveBookings','fetchNotActiveBookings',
                                  'changeNotActiveBookings','changeActiveBookings']),
        async logout() {
            await this.logoutUser()
        },
        toggleShowProfile() {
            this.showProfile = !this.showProfile
        },
        toggleShowPassed() {
            this.showPassed = !this.showPassed
        }
    },
    computed: {
        ...mapGetters('bookings',['activeBookings','notActiveBookings',
                                   'notActiveBookingsPage','activeBookingsPage'])
    },
    async mounted() {
        this.fetchActiveBookings()
        this.fetchNotActiveBookings()
    }
}
</script>
