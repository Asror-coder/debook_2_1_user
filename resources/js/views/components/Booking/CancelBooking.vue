<template>
    <div>
        <div class="hidden md:grid grid-cols-4 gap-4" v-if="translation">
            <main class="col-span-2 col-start-2 mt-4 2xl:px-20">
                <div class="flex flex-row">
                    <div class="flex-none text-2xl text-white font-bold">{{ translation.booking.cancelPage.title }}</div>
                    <div class="flex-grow"></div>
                    <button class="flex-none h-8 bg-red-500 text-white px-8 focus:outline-none hover:bg-red-600"
                        @click="cancel"> {{ translation.booking.cancelPage.btn }} </button>
                </div>

                <div v-if="message" class="text-red-600 my-2">{{ message }}</div>

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

                    <div class="bg-white p-3" v-if="booking">
                        <div class="text-lg font-bold text-gray-600">{{ translation.booking.about_booking }}</div>

                        <div class="grid grid-cols-3">
                            <div>
                                <div class="font-bold text-gray-500 mr-2">Club:</div>
                                <div class="font-bold text-gray-500 mr-2">Sport:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.booking.venue }}:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.booking.date }}:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.booking.time }}:</div>
                                <div class="font-bold text-gray-500 mr-2">{{ translation.booking.price }}:</div>
                            </div>
                            <div class="col-span-2">
                                <div> {{booking.clubName}} </div>
                                <div> {{booking.sport}} </div>
                                <div>
                                    {{booking.venueName}} ({{booking.surface}},
                                    <span v-if="booking.indoor == 1">{{ translation.booking.indoor }}</span>
                                    <span v-if="booking.indoor == 0">{{ translation.booking.outdoor }}</span>)
                                </div>
                                <div>{{changeDateFormat(booking.date)}} </div>
                                <div>
                                    {{changeTimeFormat(booking.start_time)}} - {{changeTimeFormat(booking.end_time)}}
                                </div>
                                <div>€{{booking.price}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3">
                    <div class="text-lg font-bold text-gray-600 mb-2">{{ translation.booking.payment }}</div>

                    <div>{{ translation.booking.cancelPage.infoAmount }}</div>
                    <div>{{ translation.booking.cancelPage.infoDate }}</div>
                </div>
            </main>
        </div>

        <!-- Mobile version -->
        <div class="md:hidden px-3" v-if="translation">
            <div class="flex justify-between items-center my-3">
                <div class="flex-none text-2xl text-white font-bold">{{ translation.booking.cancelPage.title }}</div>
                <button class="flex-none h-8 bg-red-500 text-white px-8 focus:outline-none rounded-lg"
                    @click="cancel"> {{ translation.booking.cancelPage.btn }} </button>
            </div>

            <div v-if="message" class="text-red-600 my-2">{{ message }}</div>

            <div class="bg-white p-3 my-3 rounded-lg" v-if="currentUser">
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

            <div class="bg-white p-3 my-3 rounded-lg" v-if="booking">
                <div class="text-lg font-bold text-gray-600">{{ translation.booking.about_booking }}</div>

                <div class="grid grid-cols-3">
                    <div>
                        <div class="font-bold text-gray-500 mr-2">Club:</div>
                        <div class="font-bold text-gray-500 mr-2">Sport:</div>
                        <div class="font-bold text-gray-500 mr-2">{{ translation.booking.venue }}:</div>
                        <div class="font-bold text-gray-500 mr-2">{{ translation.booking.date }}:</div>
                        <div class="font-bold text-gray-500 mr-2">{{ translation.booking.time }}:</div>
                        <div class="font-bold text-gray-500 mr-2">{{ translation.booking.price }}:</div>
                    </div>
                    <div class="col-span-2">
                        <div> {{booking.clubName}} </div>
                        <div> {{booking.sport}} </div>
                        <div>
                            {{booking.venueName}} ({{booking.surface}},
                            <span v-if="booking.indoor == 1">{{ translation.booking.indoor }}</span>
                            <span v-if="booking.indoor == 0">{{ translation.booking.outdoor }}</span>)
                        </div>
                        <div>{{changeDateFormat(booking.date)}} </div>
                        <div>
                            {{changeTimeFormat(booking.start_time)}} - {{changeTimeFormat(booking.end_time)}}
                        </div>
                        <div>€{{booking.price}}</div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-3 my-3 rounded-lg">
                <div class="text-lg font-bold text-gray-600 mb-2">{{ translation.booking.payment }}</div>

                <div>{{ translation.booking.cancelPage.infoAmount }}</div>
                <div>{{ translation.booking.cancelPage.infoDate }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

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
