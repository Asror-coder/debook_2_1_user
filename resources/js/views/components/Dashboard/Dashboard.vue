<template>
    <div class="grid grid-cols-4 gap-4" v-if="translation">
        <main class="col-span-2 col-start-2">

                                            <!-- Dashboard header -->
            <div class="flex flex-row my-5">
                <div class="flex-none text-2xl font-bold">{{user.name}} {{user.lastname}}</div>
                <div class="flex-grow"></div>
                <button class="flex-none text-gray-600 hover:text-black focus:outline-none px-3"
                    @click="toggleShowPassed" v-if="showPassed"> {{ translation.dashboard.upcomming }} </button>
                <button class="flex-none text-gray-600 hover:text-black focus:outline-none px-3"
                    @click="toggleShowPassed" v-else-if="!showPassed"> {{ translation.dashboard.passed }} </button>
                <button class="flex-none text-gray-600 hover:text-black focus:outline-none px-3"
                    @click="toggleShowProfile"> {{ translation.dashboard.profile }} </button>
                <button class="flex-none text-gray-600 hover:text-black focus:outline-none px-3"
                    @click.prevent="logout"> {{ translation.dashboard.logout }} </button>
            </div>

                                            <!-- Profile -->
            <div v-show="showProfile">
                <Profile />
            </div>

                                            <!-- Upcomming bookings -->
            <div v-if="!showPassed">
                <div class="text-xl text-gray-500 font-bold"> {{ translation.dashboard.upcomming }}</div>

                <div v-if="this.activeBookings.length > 0">
                    <!-- Bookings -->
                    <div :key="activeBooking[0].id" v-for="activeBooking in activeBookings">
                        <BookingCard :booking="activeBooking" />
                    </div>

                    <!-- Pages -->
                    <div class="flex flex-row my-8">
                        <div class="flex-grow"></div>
                        <div class="flex flex-row text-lg" v-if="activeBookingsPage">
                            <div :key="index" v-for="(page, index) in activeBookingsPage.links" class="mx-3">
                                <Button :text="'prev'" v-if="page.label == '&laquo; Previous' && page.url"
                                    :textStyle="'text-gray-400'"
                                    @btn-click="changeActiveBookings(page.url)"/>

                                <Button :text="page.label" v-if="page.label != '&laquo; Previous' && page.label != 'Next &raquo;'"
                                    :textStyle="page.label == activeBookingsPage.current_page ? 'text-black' : 'text-gray-400'"
                                    @btn-click="changeActiveBookings(page.url)"/>

                                <Button :text="'next'" v-if="page.label == 'Next &raquo;' && page.url"
                                    :textStyle="'text-gray-400'"
                                    @btn-click="changeActiveBookings(page.url)"/>
                            </div>
                        </div>
                        <div class="flex-grow"></div>
                    </div>
                </div>
                <div v-else class="text-lg text-gray-500"> {{ translation.dashboard.no_bookings }} </div>
            </div>

                                            <!-- Passed bookings -->
            <div v-if="showPassed">
                <div class="text-xl text-gray-500 font-bold">{{ translation.dashboard.passed }}</div>

                <div v-if="this.notActiveBookings.length > 0">
                    <!-- Bookings -->
                    <div :key="notActiveBooking[0].id" v-for="notActiveBooking in notActiveBookings">
                        <BookingCard :booking="notActiveBooking" />
                    </div>

                    <!-- Pages -->
                    <div class="flex flex-row my-8">
                        <div class="flex-grow"></div>
                        <div class="flex flex-row text-lg" v-if="notActiveBookingsPage">
                            <div :key="index" v-for="(page, index) in notActiveBookingsPage.links" class="mx-3">
                                <Button :text="'prev'" v-if="page.label == '&laquo; Previous' && page.url"
                                    :textStyle="'text-gray-400'"
                                    @btn-click="changeNotActiveBookings(page.url)"/>

                                <Button :text="page.label" v-if="page.label != '&laquo; Previous' && page.label != 'Next &raquo;'"
                                    :textStyle="page.label == notActiveBookingsPage.current_page ? 'text-black' : 'text-gray-400'"
                                    @btn-click="changeNotActiveBookings(page.url)"/>

                                <Button :text="'next'" v-if="page.label == 'Next &raquo;' && page.url"
                                    :textStyle="'text-gray-400'"
                                    @btn-click="changeNotActiveBookings(page.url)"/>
                            </div>
                        </div>
                        <div class="flex-grow"></div>
                    </div>
                </div>
                <div v-else class="text-lg text-gray-500"> {{ translation.dashboard.no_bookings }} </div>
            </div>

        </main>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BookingCard from './BookingCard'
import Button from './Button.vue'
import Profile from './Profile.vue'

export default {
    name: 'Dashboard',
    components: {
        BookingCard,
        Button,
        Profile
    },
    data() {
        return {
            user: Object,
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
        this.user = JSON.parse(localStorage.getItem('user')).user
        this.fetchActiveBookings(this.user.id)
        this.fetchNotActiveBookings(this.user.id)
    }
}
</script>
