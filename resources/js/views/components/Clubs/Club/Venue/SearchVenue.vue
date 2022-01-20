<template>
    <div class="bg-white py-2 px-3 shadow-lg">
        <!-- <div class="text-gray-500 text-xl">Wanna play sports?</div> -->
        <span class="text-center text-red-700" v-if="message">{{message}}</span>
        <form @submit.prevent="searchVenue">
            <div class="hidden md:flex flex-row">

                <div class="flex-none">
                    <!-- <label for="sport_type">{{ translation.home_search.sport }}:</label> -->
                    <select name="sport_type" id="sport_type" placeholder="Sport"
                    class="border-2 border-gray-400 shadow-2xl py-2 px-1 focus:outline-none" v-model="form.sport_type">
                        <option value="" disabled selected hidden>{{ translation.home_search.choose_sport }}</option>
                        <option :key="sport.sport_type" v-for="sport in sports">
                            {{ sport.sport_type }}
                        </option>
                    </select>
                </div>

                <div id='date' class="flex-none ml-3">
                    <label for="name">{{ translation.home_search.date }}: </label>
                    <input type="date" name="date" placeholder="date"
                        class="border-2 border-gray-400 shadow-2xl p-1 focus:outline-none" v-model="form.date">
                </div>

                <div id='start_time' class="flex-none  ml-3">
                    <label for="cars">{{ translation.home_search.time }}:</label>
                    <select name="start-time" v-model="form.start_time"
                    class="border-2 border-gray-400 shadow-2xl py-2 px-1  focus:outline-none">
                        <option value="" disabled selected hidden>{{ translation.home_search.start }}</option>
                        <option :value="openTime.value" :key="openTime.value" v-for="openTime in openTimes">
                            {{ openTime.time }}
                        </option>
                    </select>
                </div>

                <div id='end_time' class="flex-none">
                    <label for="cars">-</label>
                    <select name="end-time" v-model="form.end_time"
                    class="border-2 border-gray-400 shadow-2xl py-2 px-1  focus:outline-none">
                        <option value="" disabled selected hidden>{{ translation.home_search.end }}</option>
                        <option :value="openTime.value" :key="openTime.value" v-for="openTime in openTimes">
                            {{ openTime.time }}
                        </option>
                    </select>
                </div>

                <div @change="setDuration">
                    <select name="duration" v-model="duration"
                    class="border-2 border-gray-400 shadow-2xl py-2 px-1 ml-4 focus:outline-none" >
                        <option value="" disabled selected hidden>Duration</option>
                        <option value="1">1 hour</option>
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                    </select>
                </div>

                <div class="flex-grow"></div>

                <div class="flex-none">
                    <button class="bg-dashBtnBlue border-none text-white text-lg py-1 px-5 focus:outline-none hover:shadow-lg"
                    type="submit" placeholder="Search">{{ translation.home_search.search }}</button>
                </div>
            </div>

            <!-- Mobile version -->
            <div class="md:hidden">

                <div class="grid grid-cols-2 gap-2">
                    <div>
                        <!-- <label for="sport_type">{{ translation.home_search.sport }}:</label> -->
                        <select name="sport_type" id="sport_type" placeholder="Sport" v-model="form.sport_type"
                            class="border-2 border-gray-400 shadow-2xl py-2 px-1 focus:outline-none w-full">
                            <option value="" disabled selected hidden>{{ translation.home_search.choose_sport }}</option>
                            <option :key="sport.sport_type" v-for="sport in sports">
                                {{ sport.sport_type }}
                            </option>
                        </select>
                    </div>

                    <div>
                        <!-- <label for="name">{{ translation.home_search.date }}: </label> -->
                        <input type="date" name="date" placeholder="date" v-model="form.date"
                            class="border-2 border-gray-400 shadow-2xl p-1 focus:outline-none w-full">
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 mt-1">
                    <div>
                        <!-- <label for="cars">{{ translation.home_search.time }}:</label> -->
                        <select name="start-time" v-model="form.start_time"
                        class="border-2 border-gray-400 shadow-2xl py-2 px-1 focus:outline-none w-full">
                            <option value="" disabled selected hidden>{{ translation.clubs.start }}</option>
                            <option :value="openTime.value" :key="openTime.value" v-for="openTime in openTimes">
                                {{ openTime.time }}
                            </option>
                        </select>
                    </div>

                    <!-- <div>
                        <select name="end-time" v-model="form.end_time"
                        class="border-2 border-gray-400 shadow-2xl py-2 px-1 focus:outline-none w-full">
                            <option value="" disabled selected hidden>{{ translation.clubs.end }}</option>
                            <option :value="openTime.value" :key="openTime.value" v-for="openTime in openTimes">
                                {{ openTime.time }}
                            </option>
                        </select>
                    </div> -->

                    <div @change="setDuration">
                        <select name="duration" v-model="duration"
                        class="border-2 border-gray-400 shadow-2xl py-2 px-1 focus:outline-none w-full" >
                            <option value="" disabled selected hidden>Duration</option>
                            <option value="1">1 hour</option>
                            <option value="2">2 hours</option>
                            <option value="3">3 hours</option>
                        </select>
                    </div>

                    <div>
                        <button class="bg-dashBtnBlue border-dashBtnBlue border-2 w-full
                            text-white text-lg py-1 px-5 focus:outline-none hover:shadow-lg"
                        type="submit" placeholder="Search">{{ translation.home_search.search }}</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SearchVenueForm',
    props: {
        clubId: null
    },
    data() {
        return {
            form: {
                partnerId: this.clubId,
                sport_type: '',
                date: '',
                start_time: '',
                end_time: '',
                surface: ''
            },
            duration: '',
            sports: [],
            openTimes: [],
            message: null,
            errors: []
        }
    },
    methods: {
        async searchVenue() {
            this.message = null

            if (!this.form.sport_type || !this.form.date || !this.form.start_time || !this.form.end_time) {
                this.message = 'Please fill all fields!'
            }
            else if (this.form.start_time > this.form.end_time) {
                this.message = 'End time cannot be earlier than start time! Please change chosen time.'
            }
            else if (!this.validateDate(this.form.date)) {
                this.message = "Date cannot be in the past! Please change chosen date."
            }
            else {
                sessionStorage.setItem('clubSearch', JSON.stringify(this.form))
                this.$emit('search-venue', this.form)
            }
        },
        async fetchSports() {
            await axios.get(`/api/clubs/club/${this.clubId}/sports`).then((response)=>{
                if(response.data.length > 0) { this.sports = response.data; }
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.message = error.response.data.message;
            })
        },
        async fetchOpenTime() {
            await axios.get(`/api/clubs/club/${this.clubId}/opentime`).then((response)=>{
                if(response.data.length > 0) this.generateOpenTime(response.data[0], response.data[1])
            }).catch((error) => {
                console.log(error.response.data.message);
            })
        },
        generateOpenTime(start,end) {
            var openHours = end - start;

            var i;
            for (i = 0; i <= openHours; i++) {
                this.openTimes[i] = {value: parseInt(start) + i, time: this.changeTimeFormat(parseInt(start) + i)};
            }
        },
        changeTimeFormat(time) {
            if (time.toString().length > 1) {
                if (time == 24) return '00:00'
                else return time+':00'
            }
            else return '0'+time+':00'
        },
        validateDate(formDate) {
            var date = new Date()
            var dateArr = formDate.split("-");

            if (dateArr[0] < date.getFullYear()) return false
            if (dateArr[0] == date.getFullYear() && dateArr[1] < (date.getMonth()+1)) return false
            if (dateArr[0] == date.getFullYear() && dateArr[1] == (date.getMonth()+1) && dateArr[2] < date.getDate()) return false

            return true
        },
        checkLocalStorage() {
            if(sessionStorage.getItem('clubSearch')) {
                var clubSearch = JSON.parse(sessionStorage.getItem('clubSearch'))

                if (clubSearch.partnerId == this.clubId) {
                    this.form.sport_type = clubSearch.sport_type.charAt(0).toUpperCase() + clubSearch.sport_type.slice(1)
                    this.form.date = clubSearch.date
                    this.form.start_time = this.splitTime(clubSearch.start_time)
                    this.form.end_time = this.splitTime(clubSearch.end_time)

                    this.searchVenue()
                }
            }
        },
        splitTime(time) {
            var digits = time.toString().split('').map(iNum => parseInt(iNum, 10));

            if(digits[0] == 0) return digits[1]
            else return time
        },
        setDuration() {
            this.message = ""

            if (!this.form.start_time)
                this.message = 'Please, choose start time.'
            else if ((parseInt(this.form.start_time) + parseInt(this.duration)) > this.openTimes[this.openTimes.length - 1].value)
                this.message = 'Please, choose another start time or duration.'
            else
                this.form.end_time = ('0' + (parseInt(this.form.start_time) + parseInt(this.duration))).slice(-2);
        }
    },
    async created() {
        await this.fetchOpenTime()
        await this.fetchSports()
        this.checkLocalStorage()
    },
    watch: {
        'form.end_time': {
            immediate: true,
            handler (newVal, oldVal) {
                if (this.form.start_time) {
                    var newDur = parseInt(newVal) - parseInt(this.form.start_time)

                    if (newDur == 1 || newDur == 2 || newDur == 3) this.duration = newDur
                    else this.duration = ""
                }
                else this.duration = ""
            }
        }
    }
};
</script>
