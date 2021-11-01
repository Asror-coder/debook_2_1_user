<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1"></div>
        <main class="col-span-2 my-5" v-if="translation">
            <div class="flex flex-row">
                <div class="flex-none text-dbGray text-2xl font-bold">{{ translation.booking.bookPage.title }}</div>
                <div class="flex-grow"></div>
                <button class="flex-none h-12 bg-green-500 text-white px-8 focus:outline-none hover:bg-green-600"
                    @click="book" v-show="isAvailable && allowDateTime()"> {{ translation.booking.bookPage.checkOut }} </button>
            </div>

            <div v-if="!isAvailable" class="p-2 mb-2 bg-red-200 border-red-500 rounded-lg mt-2">
                {{ translation.booking.bookPage.notAvail }}
            </div>

            <div v-if="!allowDateTime()" class="p-2 mb-2 bg-red-200 border-red-500 rounded-lg mt-2">
                {{ translation.booking.bookPage.late }}
            </div>

            <div v-else-if="isAvailable">
                <div class="grid grid-cols-2 gap-4 my-4">
                    <div class="bg-white p-3" v-if="currentUser">
                        <div class="text-lg font-bold text-gray-600">{{ translation.booking.about_you }}</div>

                        <div class="grid grid-cols-3">
                            <div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.dashboard.name }}:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.dashboard.email }}:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.dashboard.phone }}:</div>
                            </div>
                            <div class="col-span-2">
                                <div> {{currentUser.name}} {{currentUser.lastname}} </div>
                                <div> {{currentUser.email}} </div>
                                <div> {{currentUser.phone}} </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3">
                        <div class="text-lg font-bold text-gray-600">{{ translation.booking.about_booking }}</div>
                        <div class="grid grid-cols-3">
                            <div>
                                <div class="font-bold text-gray-500 mr-2">Club:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.booking.phone }}:</div>
                                <div class="font-bold text-gray-500 mr-2">Sport:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.booking.venue }}:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.booking.date }}:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.booking.time }}:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.booking.price }}:</div>
                            </div>
                            <div class="col-span-2">
                                <div> {{venue.clubName}} </div>
                                <div> {{venue.phone}} </div>
                                <div> {{venue.sport_type}} </div>
                                <div>
                                    {{venue.venueName}} ({{venue.surface}},
                                    <span v-if="venue.indoor == 1">{{ translation.booking.indoor }}</span>
                                    <span v-if="venue.indoor == 0">{{ translation.booking.outdoor }}</span>)
                                </div>
                                <div> {{changeDateFormat(clubSearch.date)}} </div>
                                <div>
                                    {{changeTimeFormat(clubSearch.start_time)}} - {{changeTimeFormat(clubSearch.end_time)}}
                                </div>
                                <div>€{{price}}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-3">
                    <div class="text-lg font-bold text-gray-600 mb-3">{{ translation.booking.payment }}</div>
                    <div>{{ translation.booking.bookPage.infoIdeal }}</div>
                    <div>{{ translation.booking.bookPage.infoCheckout }}</div>
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
            var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+('0' + today.getDate()).slice(-2);

            if (this.clubSearch.date < currentDate) return false
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
