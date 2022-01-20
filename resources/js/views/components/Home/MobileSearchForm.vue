<template>
    <div class="flex flex-col w-11/12 bg-dbGray bg-opacity-70 p-6 shadow-xl" v-if="translation">
        <div class="text-2xl text-gray-400 font-bold text-center pb-5" style="text-shadow: 0.5px 0.5px 4px #222121">
            {{ translation.home_search.wanna}}
        </div>

        <div class="text-center text-red-700" v-if="message">{{message}}</div>
        <form action="" @submit.prevent="searchClubs">

            <!-- Sport -->
            <div class="mb-2">
                <select name="sport_type" id="sport_type" placeholder="Sport" v-model="form.sport_type"
                class="border-2 border-gray-400 shadow-2xl py-2 px-1 w-full focus:outline-none">
                    <option value="" disabled selected hidden>{{ translation.home_search.choose_sport}}</option>
                    <option value="tennis">Tennis</option>
                    <option value="padel">Padel</option>
                </select>
            </div>

            <!-- City -->
            <div class="mb-4">
                <select name="city" id="city" placeholder="Sport" v-model="form.city"
                    class="border-2 border-gray-400 shadow-2xl py-2 px-1 w-full focus:outline-none">
                    <option value="" disabled selected hidden>{{ translation.home_search.choose_city }}</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="Harlem">Harlem</option>
                </select>
            </div>

            <hr>
            <div class="text-gray-700 text-md">{{ translation.home_search.optional }}</div>

            <!-- Date -->
            <div class="flex mb-2 items-center">
                <label for="date" class="text-xl mr-1 text-gray-700">{{ translation.home_search.date }}: </label>
                <input type="date" name="date" placeholder="date"
                    class="border-2 border-gray-400 shadow-2xl py-1 px-1 w-full focus:outline-none" v-model="form.date">
            </div>

            <!-- Time -->
            <div class="flex items-center appearance-none">
                <label for="time" class="text-xl text-gray-700 mr-1">{{ translation.home_search.time }}:</label>
                <select name="start-time" v-model="form.start_time"
                class="border-2 border-gray-400 shadow-2xl py-2 px-1 focus:outline-none w-full">
                    <option value="" disabled selected hidden>{{ translation.home_search.start }}</option>
                    <option value="05">05:00</option>
                    <option value="06">06:00</option>
                    <option value="07">07:00</option>
                    <option value="08">08:00</option>
                    <option value="09">09:00</option>
                    <option value="10">10:00</option>
                    <option value="11">11:00</option>
                    <option value="12">12:00</option>
                    <option value="13">13:00</option>
                    <option value="14">14:00</option>
                    <option value="15">15:00</option>
                    <option value="16">16:00</option>
                    <option value="17">17:00</option>
                    <option value="18">18:00</option>
                    <option value="19">19:00</option>
                    <option value="20">20:00</option>
                    <option value="21">21:00</option>
                    <option value="22">22:00</option>
                    <option value="23">23:00</option>
                    <option value="24">00:00</option>
                </select>

                <label for="time text-gray-700 mx-1"> - </label>
                <select name="end-time" v-model="form.end_time"
                class="border-2 border-gray-400 shadow-2xl py-2 px-1 focus:outline-none  w-full">
                    <option value="" disabled selected hidden>{{ translation.home_search.end }}</option>
                    <option value="05">05:00</option>
                    <option value="06">06:00</option>
                    <option value="07">07:00</option>
                    <option value="08">08:00</option>
                    <option value="09">09:00</option>
                    <option value="10">10:00</option>
                    <option value="11">11:00</option>
                    <option value="12">12:00</option>
                    <option value="13">13:00</option>
                    <option value="14">14:00</option>
                    <option value="15">15:00</option>
                    <option value="16">16:00</option>
                    <option value="17">17:00</option>
                    <option value="18">18:00</option>
                    <option value="19">19:00</option>
                    <option value="20">20:00</option>
                    <option value="21">21:00</option>
                    <option value="22">22:00</option>
                    <option value="23">23:00</option>
                    <option value="24">00:00</option>
                </select>
            </div>

            <div class="grid grid-cols-4 my-4">
                <label for="duration" class="text-xl text-gray-700">Duration:</label>
                <div class="duration-btn" :class="duration == 1 ? 'bg-blue-300 ' : 'bg-gray-500 ' "
                    @click="setDuration(1)">1 hour</div>
                <div class="duration-btn" :class="duration == 2 ? 'bg-blue-300 ' : 'bg-gray-500 ' "
                    @click="setDuration(2)">2 hours</div>
                <div class="duration-btn" :class="duration == 3 ? 'bg-blue-300 ' : 'bg-gray-500 ' "
                    @click="setDuration(3)">3 hours</div>
            </div>

            <div class="mt-4">
                <button class="bg-blue-500 text-white px-6 py-2 w-full rounded font-medium focus:outline-none"
                type="submit">{{ translation.home_search.search }}</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SearchForm',
    data() {
        return {
            form: {
                sport_type: '',
                city: '',
                date: '',
                end_time: '',
                start_time: ''
            },
            duration: '',
            message: ''
        }
    },
    methods: {
        async searchClubs() {
            this.message = null

            if (!this.form.sport_type) {
                this.message = 'Please, choose sport.'
            }
            else if (this.form.city && !this.form.sport_type) {
                this.message = 'Please, choose sport as well.'
            }
            else if (this.form.date && (!this.form.sport_type)) {
                this.message = 'Please, choose sport as well.'
            }
            else if ((this.form.start_time && !this.form.end_time) ||
                (!this.form.start_time && this.form.end_time)) {
                this.message = 'Please, choose time.'
            }
            else if (this.form.date && (!this.form.start_time || !this.form.end_time)) {
                this.message = 'Please, choose time as well.'
            }
            else if (!this.form.date && (this.form.start_time && this.form.end_time)) {
                this.message = 'Please, choose date as well.'
            }
            else if (this.form.start_time > this.form.end_time) {
                this.message = 'End time cannot be earlier than start time! Please change chosen time.'
            }
            else if (this.form.date && !this.validateDate(this.form.date)) {
                this.message = "Date cannot be in the past! Please change chosen date."
            }
            else {
                this.$emit('searchClubs', this.form)
            }
        },
        validateDate(formDate) {
            var date = new Date()
            var dateArr = formDate.split("-");

            if (dateArr[0] < date.getFullYear()) return false
            if (dateArr[0] == date.getFullYear() && dateArr[1] < (date.getMonth()+1)) return false
            if (dateArr[0] == date.getFullYear() && dateArr[1] == (date.getMonth()+1) && dateArr[2] < date.getDate()) return false

            return true
        },
        setDuration(hours) {
            if (!this.form.start_time)
                this.message = 'Please, choose start time.'
            else if ((parseInt(this.form.start_time) + hours) > 24)
                this.message = 'Please, choose another start time or duration.'
            else
                this.form.end_time = ('0' + (parseInt(this.form.start_time) + hours)).slice(-2);
        }
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
}
</script>
