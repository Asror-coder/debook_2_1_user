<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1"></div>
        <main class="col-span-2 my-5">
            <div class="flex flex-row">
                <div class="flex-none text-2xl font-bold">New Booking</div>
                <div class="flex-grow"></div>
                <button class="flex-none h-12 bg-green-500 text-white rounded px-8 focus:outline-none hover:shadow-lg"
                @click="book" v-show="isAvailable && allowDateTime()"> Check out </button>
            </div>

            <div v-if="!isAvailable" class="p-2 mb-2 bg-red-200 border-red-500 rounded-lg mt-2">
                We are sorry, but someone just booked this venue. Please try other time slots.
            </div>

            <div v-if="!allowDateTime()" class="p-2 mb-2 bg-red-200 border-red-500 rounded-lg mt-2">
                We are sorry, but it is too late to book this venue. Please try other time slots.
            </div>

            <div v-else-if="isAvailable">
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

                    <div class="bg-blue-100 p-3">
                        <div class="text-lg font-bold text-gray-600">Information about booking</div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Club: </span>
                            {{venue.clubName}}
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Phone: </span>
                            {{venue.phone}}
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Sport: </span>
                            {{venue.sport_type}}
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Venue: </span>
                            {{venue.venueName}} ({{venue.surface}},
                            <span v-if="venue.indoor == 1">indoor</span>
                            <span v-if="venue.indoor == 0">outdoor</span>)
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Date: </span>
                            {{changeDateFormat(clubSearch.date)}}
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Time: </span>
                            {{changeTimeFormat(clubSearch.start_time)}} - {{changeTimeFormat(clubSearch.end_time)}}
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Price: </span>
                            €{{price}}
                        </div>
                    </div>
                </div>

                <div class="bg-blue-100 p-3">
                    <div class="text-lg font-bold text-gray-600 mb-3">Payment</div>
                    <div>Dear customer, our payment system currently only supports iDeal. </div>
                    <div>Please keep this in mind before checking out.</div>
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
            venue: Object,
            clubSearch: Object,
            price: '',
            isAvailable: true,
            message: ''
        }
    },
    methods: {
        ...mapActions('bookings',['addBooking']),
        async book() {
            await this.checkVenue();

            await this.addBooking({
                venue_id: this.venue.id,
                date: this.clubSearch.date,
                start_time: this.clubSearch.start_time,
                end_time: this.clubSearch.end_time
            })
        },
        async checkVenue() {
            await axios.get(`/api/venue/${this.venue.id}/checkavailability`,{params: this.clubSearch}).then((response)=> {
                if(response.data != 1) this.isAvailable = false
            }).catch((error) => {
                this.message = error.response.data.message;
            })
        },
        allowDateTime() {
            var today = new Date();
            var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

            if (this.clubSearch.date < currentDate) return false;
            if (this.clubSearch.date == currentDate && this.clubSearch.start_time <= today.getHours()) return false;

            return true
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
        if(!JSON.parse(localStorage.getItem('user'))) this.$router.push('/notfound');
        if(!JSON.parse(sessionStorage.getItem('clubSearch'))) this.$router.push('/notfound');

        this.clubSearch = JSON.parse(sessionStorage.getItem('clubSearch'))

        await axios.get(`/api/authenticated`).then((response)=> {
            if (!response.data) this.$router.push('/notfound')
        }).catch((error) => {})

        await axios.get(`/api/venue/${this.$route.params.venueId}/full`).then((response)=> {
            if (response.data.length == 0) this.$router.push('/notfound')
            if (response.data[0].partner_id != this.clubSearch.partnerId) this.$router.push('/notfound')

            this.venue = response.data[0]
        }).catch((error) => {})

        this.checkVenue();

        await axios.get(`/api/venue/${this.venue.id}/price/calculate`,{params: this.clubSearch}).then((response)=> {
            this.price = response.data
        }).catch((error) => {})
    }
};
</script>
