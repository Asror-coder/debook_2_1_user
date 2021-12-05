<template>
    <div>
        <div class="hidden md:grid grid-cols-4 gap-4">
            <div class="col-span-1"></div>
            <main class="col-span-2 my-5" v-if="translation">
                <div class="text-2xl text-white font-bold">{{ translation.booking.cancelSuccess.title }}</div>
                <div class="text text-dbGray">{{ translation.booking.cancelSuccess.try }}</div>
                <div class="grid grid-cols-2 gap-4 my-4">
                        <div class="bg-white p-3">
                            <div class="text-lg font-bold text-gray-600">{{ translation.booking.cancelSuccess.infoBooking }}</div>

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

                        <div class="bg-white p-3">
                            <div class="text-lg font-bold text-gray-600">{{ translation.booking.cancelSuccess.info }}</div>
                            <div class="mb-2">
                                <span class="font-bold text-gray-500 mr-2">{{ translation.booking.cancelSuccess.payment }}: </span>
                                {{ translation.booking.cancelSuccess.paymentInfo }}
                            </div>
                            <div class="mb-2">
                                <span class="font-bold text-gray-500 mr-2">{{ translation.booking.cancelSuccess.newBooking }}: </span>
                                {{ translation.booking.cancelSuccess.newBookingInfo }}
                            </div>
                            <div>
                                <span class="font-bold text-gray-500 mr-2">{{ translation.booking.cancelSuccess.activities }}: </span>
                                {{ translation.booking.cancelSuccess.activitiesInfo }}
                            </div>
                        </div>
                    </div>
            </main>
            <div class="col-span-1"></div>
        </div>

        <!-- Mobile version -->
        <div class="md:hidden px-3" v-if="translation">
            <div class="text-2xl text-white font-bold mt-5">{{ translation.booking.cancelSuccess.title }}</div>

            <div class="text text-dbGray">{{ translation.booking.cancelSuccess.try }}</div>

            <div class="bg-white p-3 my-3 rounded-lg">
                <div class="text-lg font-bold text-gray-600">{{ translation.booking.cancelSuccess.infoBooking }}</div>

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
                <div class="text-lg font-bold text-gray-600">{{ translation.booking.cancelSuccess.info }}</div>
                <div class="mb-2">
                    <span class="font-bold text-gray-500 mr-2">{{ translation.booking.cancelSuccess.payment }}: </span>
                    {{ translation.booking.cancelSuccess.paymentInfo }}
                </div>
                <div class="mb-2">
                    <span class="font-bold text-gray-500 mr-2">{{ translation.booking.cancelSuccess.newBooking }}: </span>
                    {{ translation.booking.cancelSuccess.newBookingInfo }}
                </div>
                <div>
                    <span class="font-bold text-gray-500 mr-2">{{ translation.booking.cancelSuccess.activities }}: </span>
                    {{ translation.booking.cancelSuccess.activitiesInfo }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuccessCancelBooking',
    data() {
        return {
            booking: Object
        }
    },
    methods: {
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
    mounted() {
        if(!this.$route.params.booking) this.$router.push('/notfound')
        else this.booking = this.$route.params.booking
    }
}
</script>
