<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1"></div>
        <main class="col-span-2">
            <div class="flex flex-row my-5 ">
                <div class="flex-none text-2xl font-bold">{{user.name}} {{user.lastname}}</div>
                <div class="flex-grow"></div>
                <button class="flex-none text-gray-600 hover:text-black focus:outline-none" @click.prevent="logout">Logout</button>
            </div>

            <div v-show="this.activeBookings.length > 0" class="">
                <div class="text-xl text-gray-500 font-bold">Upcomming bookings</div>

                <div :key="activeBooking[0].id" v-for="activeBooking in activeBookings" class="">
                    <BookingCard :booking="activeBooking" />
                </div>
            </div>

            <hr v-show="this.notActiveBookings.length > 0" class="my-4 border-gray-300">

            <div v-show="this.notActiveBookings.length > 0" class="">
                <div class="text-xl text-gray-500 font-bold">Passed bookings</div>

                <div :key="notActiveBooking[0].id" v-for="notActiveBooking in notActiveBookings" class="">
                    <BookingCard :booking="notActiveBooking" />
                </div>
            </div>

        </main>
        <div class="col-span-1"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BookingCard from './BookingCard'

export default {
    name: 'Dashboard',
    components: {
        BookingCard
    },
    data() {
        return {
            user: Object
        };
    },
    methods: {
        ...mapActions('user',['logoutUser']),
        ...mapActions('bookings',['fetchBookings']),
        async logout() {
            await this.logoutUser()
        }
    },
    computed: mapGetters('bookings',['activeBookings','notActiveBookings']),
    async mounted() {
        this.user = JSON.parse(localStorage.getItem('user')).user
        this.fetchBookings(this.user.id)
    }
}
</script>
