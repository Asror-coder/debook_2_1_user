<template>
    <div class="grid grid-cols-2 gap-2 p-3 rounded-lg shadow-lg my-2">
        <div>
            <div class="flex flex-row">
                <div class="text-lg font-bold text-gray-600">{{service.sport_type}}</div>
                <div v-if="bookingDetails.status_id == 1"
                    class="px-3 text-green-600">active</div>
                <div v-if="bookingDetails.status_id == 4 || bookingDetails.status_id == 7"
                    class="px-3 rounded-lg text-red-600">canceled</div>
                <div class="flex-grow"></div>
                <button @click="cancel" v-if="bookingDetails.status_id == 1"
                    class="hover:text-red-700 mr-3">cancel</button>
            </div>
            <div>
                <span class="font-bold text-gray-500 mr-2">Venue: </span>
                {{venue.name}} ({{service.surface}},
                <span v-if="service.indoor == 1">indoor</span>
                <span v-if="service.indoor == 0">outdoor</span>)
            </div>
            <div>
                <span class="font-bold text-gray-500 mr-2">Date: </span>
                {{changeDateFormat(bookingDetails.date)}}
            </div>
            <div>
                <span class="font-bold text-gray-500 mr-2">Time: </span>
                {{changeTimeFormat(bookingDetails.start_time)}} - {{changeTimeFormat(bookingDetails.end_time)}}
            </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg shadow-lg">
            <div class="flex flex-row">
                <div class="text-lg font-bold text-gray-700">{{clubDetails.name}}</div>
                <div class="flex-grow"></div>
                <router-link v-if="this.venue.partner_id" :to="{ name:'Club', params: { clubId: this.venue.partner_id}}"
                    class="flex-none text-xl text-blue-600 hover:text-blue-900 focus:outline-none">more</router-link>
            </div>
            <div>
                <span class="font-bold text-gray-500 mr-2">Phone: </span>
                {{clubDetails.phone}}
            </div>
            <div>
                <span class="font-bold text-gray-500 mr-2">Address: </span>
                {{clubAddress.city}}, {{clubAddress.street}}, {{clubAddress.house_num}}-{{clubAddress.house_add}}
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
  components: { Button },
    name: 'ClubCard',
    props: {
        booking: Array
    },
    data() {
        return {
            bookingDetails: Object,
            venue: Object,
            service: Object,
            clubDetails: Object,
            clubAddress: Object
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
        },
        cancel() {
            if (this.bookingDetails.status_id == 1)
                this.$router.push({ name:'CancelBooking', params: {id: this.bookingDetails.id} })
        }
    },
    mounted() {
        this.bookingDetails = this.booking[0]
        this.venue = this.booking[1]
        this.service = this.booking[2]
        this.clubAddress = this.booking[3][0]
        this.clubDetails = this.booking[3][1]
    }
}
</script>
