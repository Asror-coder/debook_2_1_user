<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1"></div>
        <main class="col-span-2 my-5">
            <div class="flex flex-row">
                <div class="flex-none text-2xl font-bold">New Booking</div>
                <div class="flex-grow"></div>
                <button class="flex-none h-12 bg-green-500 text-white rounded px-8 focus:outline-none hover:shadow-lg"
                @click="book" v-show="isAvailable"> Book </button>
            </div>

            <div v-if="!isAvailable" class="p-2 mb-2 bg-red-200 border-red-500 rounded-lg mt-2">
                We are sorry, but someone just booked this venue. Please try other time slots.
            </div>

            <div v-else-if="isAvailable">
                <div class="grid grid-cols-2 gap-4 my-4">
                    <div class="bg-blue-100 p-3">
                        <div class="text-lg font-bold text-gray-600">Information about you</div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Name: </span>
                            {{user.name}} {{user.lastname}}
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Email: </span>
                            {{user.email}}
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Phone: </span>
                            {{user.phone}}
                        </div>
                    </div>

                    <div class="bg-blue-100 p-3">
                        <div class="text-lg font-bold text-gray-600">Information about booking</div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Club: </span>
                            {{booking.clubName}}
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Phone: </span>
                            {{booking.clubPhone}}
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Sport: </span>
                            {{booking.sport_type}}
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
                    <div class="text-lg font-bold text-gray-600">Payment</div>
                </div>
            </div>
        </main>
        <div class="col-span-1"></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'NewBooking',
    data() {
        return {
            booking: Object,
            user: Object,
            isAvailable: true,
            message: ''
        }
    },
    methods: {
        ...mapActions('bookings',['addBooking']),
        async book() {      //CHANGE ME
            await this.checkVenue();

            await this.addBooking({
                venue_id: this.booking.venueId,
                price: this.booking.price,
                date: this.booking.date,
                start_time: this.booking.start_time,
                end_time: this.booking.end_time
            })

            localStorage.removeItem('newBooking')
            this.$router.push({ name:'SuccessBooking', params: {booking: this.booking}})
        },
        async checkVenue() {
            await axios.get(`/api/venue/${this.booking.venueId}/checkavailability`,{params: this.booking}).then((response)=> {
                if(response.data != 1) this.isAvailable = false
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
        if(!JSON.parse(localStorage.getItem('newBooking')) || !JSON.parse(localStorage.getItem('user'))) {
            this.$router.push('/notfound')
        }
        else {
            this.booking = JSON.parse(localStorage.getItem('newBooking'))
            this.user = JSON.parse(localStorage.getItem('user')).user

            if(this.booking.venueId != this.$route.params.venueId) this.$router.push('/notfound')
            else await this.checkVenue()
        }
    }
};
</script>
