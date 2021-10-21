<template>
    <div class="grid grid-cols-4 gap-4">
        <main class="col-span-2 col-start-2 mt-4">
            <div class="flex flex-row">
                <div class="flex-none text-2xl font-bold">Booking cancelation</div>
                <div class="flex-grow"></div>
                <button class="flex-none h-8 bg-red-600 text-white rounded px-8 focus:outline-none hover:shadow-lg"
                    @click="cancel"> Cancel </button>
            </div>

            <div v-if="message" class="text-red-600 my-2">{{ message }}</div>

            <div class="grid grid-cols-2 gap-4 my-4">
                <div class="bg-blue-100 p-3" v-if="currentUser">
                    <div class="text-lg font-bold text-gray-600">Information about you</div>
                    <div>
                        <span class="font-bold text-gray-500 mr-2">Name: </span>
                        {{currentUser.name}} {{currentUser.lastname}}
                    </div>
                    <div>
                        <span class="font-bold text-gray-500 mr-2">Email: </span>
                        {{currentUser.email}}
                    </div>
                    <div>
                        <span class="font-bold text-gray-500 mr-2">Phone: </span>
                        {{currentUser.phone}}
                    </div>
                </div>

                <div class="bg-blue-100 p-3" v-if="booking">
                    <div class="text-lg font-bold text-gray-600">Information about booking</div>
                    <div>
                        <span class="font-bold text-gray-500 mr-2">Club: </span>
                        {{booking.clubName}}
                    </div>
                    <div>
                        <span class="font-bold text-gray-500 mr-2">Sport: </span>
                        {{booking.sport}}
                    </div>
                    <div>
                        <span class="font-bold text-gray-500 mr-2">Venue: </span>
                        {{booking.venueName}} ({{booking.surface}},
                        <span v-if="booking.indoor == 1">indoor</span>
                        <span v-if="booking.indoor == 0">outdoor</span>)
                    </div>
                    <div>
                        <span class="font-bold text-gray-500 mr-2">Date: </span>
                        {{changeDateFormat(booking.date)}}
                    </div>
                    <div>
                        <span class="font-bold text-gray-500 mr-2">Time: </span>
                        {{changeTimeFormat(booking.start_time)}} - {{changeTimeFormat(booking.end_time)}}
                    </div>
                    <div>
                        <span class="font-bold text-gray-500 mr-2">Price: </span>
                        €{{booking.price}}
                    </div>
                </div>
            </div>

            <div class="bg-blue-100 p-3">
                <div class="text-lg font-bold text-gray-600 mb-2">Payment</div>

                <div>Dear customer, you will receive the full amount to your bank that you earlier paid with.</div>
                <div>Please keep in mind that refund period might take up to 3 days.</div>
            </div>
        </main>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'CancelBooking',
    data() {
        return {
            id: this.$route.params.id,
            booking: null,
            message: ''
        }
    },
    methods: {
        ...mapActions('bookings',['fetchActiveBookings','fetchNotActiveBookings']),
        async cancel() {
            await axios.put(`/api/booking/cancel/${this.id}`).then((response)=> {
                if (response.data.message[0] == 'Success') {
                    this.fetchActiveBookings()
                    this.fetchNotActiveBookings()
                    this.$router.push({ name:'SuccessCancelBooking', params: {booking: this.booking}});
                }
                else this.message = response.data.message[0];
            }).catch((error) => {
                this.message = error.response.data.message;
            })
        },
        changeTimeFormat(time) {
            if (time) {
                if (time.toString().length > 1) return time+':00'
                else return '0'+time+':00'
            }
        },
        changeDateFormat(date) {
            if (date) {
                var dateArr = date.split('-')

                if (dateArr[1] == '01') return dateArr[2]+' January, '+dateArr[0]
                else if (dateArr[1] == '02') return dateArr[2]+' February, '+dateArr[0]
                else if (dateArr[1] == '03') return dateArr[2]+' March, '+dateArr[0]
                else if (dateArr[1] == '04') return dateArr[2]+' April, '+dateArr[0]
                else if (dateArr[1] == '05') return dateArr[2]+' May, '+dateArr[0]
                else if (dateArr[1] == '06') return dateArr[2]+' June, '+dateArr[0]
                else if (dateArr[1] == '07') return dateArr[2]+' July, '+dateArr[0]
                else if (dateArr[1] == '08') return dateArr[2]+' August, '+dateArr[0]
                else if (dateArr[1] == '09') return dateArr[2]+' September, '+dateArr[0]
                else if (dateArr[1] == '10') return dateArr[2]+' October, '+dateArr[0]
                else if (dateArr[1] == '11') return dateArr[2]+' November, '+dateArr[0]
                else if (dateArr[1] == '12') return dateArr[2]+' December, '+dateArr[0]
            }
        }
    },
    async mounted() {
        await axios.get(`/api/booking/show/${this.id}`).then((response)=> {
            this.booking = response.data[0]
        }).catch((error) => {
            this.message = error.response.data.message;
        })
    }
}
</script>
