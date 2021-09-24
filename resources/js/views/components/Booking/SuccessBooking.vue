<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1"></div>
        <main class="col-span-2 my-5">
            <div class="text-2xl font-bold">Your booking was successful</div>
            <div class="text text-gray-500">Now, it can be seen in your dashboard</div>
            <div class="grid grid-cols-2 gap-4 my-4">
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

                    <div class="bg-blue-100 p-3">
                        <div class="text-lg font-bold text-gray-600">Some rules</div>
                        <div class="mb-2">
                            <span class="font-bold text-gray-500 mr-2">Be on time: </span>
                            Please, come to the club at least 10 minutes before the actual start of your booking.
                        </div>
                        <div class="mb-2">
                            <span class="font-bold text-gray-500 mr-2">Bring all equipment: </span>
                            Don't forget to bring all needed equipment with you.
                        </div>
                        <div>
                            <span class="font-bold text-gray-500 mr-2">Have fun: </span>
                            Most importantly, have fun and enjoy the game!
                        </div>
                    </div>
                </div>
        </main>
        <div class="col-span-1"></div>
    </div>
</template>

<script>
export default {
    name: 'SuccessBooking',
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
    async mounted() {
        if(!this.$route.params.booking) this.$router.push('/notfound')
        else this.booking = this.$route.params.booking
    }
};
</script>
