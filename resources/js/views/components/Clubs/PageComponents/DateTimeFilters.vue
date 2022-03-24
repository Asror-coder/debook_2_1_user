<template>
    <form @submit.prevent="search">
        <div class="hidden md:flex flex-row">
            <div class="flex-none">
                <input type="date" name="date" placeholder="Date" v-model="form.date"
                    class="bg-gray-100 p-1 focus:outline-none">
            </div>

            <div class="flex-none">
                <select name="start-time" v-model="form.start_time"
                class="bg-gray-100 ml-2 p-2 focus:outline-none">
                    <option value="" disabled selected hidden>{{ translation.clubs.start }}</option>
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

                <label class="text-white" for="time">-</label>
                <select name="end-time" v-model="form.end_time"
                class="bg-gray-100 p-2 focus:outline-none">
                    <option value="" disabled selected hidden>{{ translation.clubs.end }}</option>
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

            <div @change="setDuration">
                <select name="duration" v-model="duration"
                class="bg-gray-100 ml-2 p-2 focus:outline-none" >
                    <option value="" disabled selected hidden>{{ translation.home_search.duration }}</option>
                    <option value="1">1 {{ translation.home_search.hour }}</option>
                    <option value="2">2 {{ translation.home_search.hours }}</option>
                    <option value="3">3 {{ translation.home_search.hours }}</option>
                </select>
            </div>

            <div class="flex-none">
                <button class="bg-gray-400 hover:bg-gray-500 text-white ml-3 px-6 py-1 text-lg w-full focus:outline-none"
                type="submit">{{ translation.clubs.search }}</button>
            </div>
        </div>

        <!-- Mobile version -->
        <div class="md:hidden flex items-center">
            <input type="date" name="date" placeholder="Date" v-model="form.date"
                class="bg-gray-100 focus:outline-none">

            <select name="start-time" v-model="form.start_time"
            class="bg-gray-100 ml-1 p-1 focus:outline-none">
                <option value="" disabled selected hidden>{{ translation.clubs.start }}</option>
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

            <div @change="setDuration">
                <select name="duration" v-model="duration"
                class="bg-gray-100 ml-1 p-1 focus:outline-none" >
                    <option value="" disabled selected hidden>{{ translation.home_search.duration }}</option>
                    <option value="1">1 {{ translation.home_search.hour }}</option>
                    <option value="2">2 {{ translation.home_search.hours }}</option>
                    <option value="3">3 {{ translation.home_search.hours }}</option>
                </select>
            </div>

            <!-- <label class="text-white" for="time">-</label>
            <select name="end-time" v-model="form.end_time"
            class="bg-gray-100 p-1 focus:outline-none">
                <option value="" disabled selected hidden>{{ translation.clubs.end }}</option>
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
            </select> -->

            <button class="text-blue-500 focus:outline-none ml-1" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <div class="text-center text-red-700" v-if="message">{{message}}</div>
    </form>
</template>

<script>
export default {
    name: 'DateTimeFilters',
    props: {
        date: '',
        start: '',
        end: ''
    },
    data() {
        return {
            form: {
                date: this.date,
                start_time: this.start,
                end_time: this.end
            },
            message: '',
            duration: ''
        }
    },
    methods: {
        search() {
            this.message = null

            if ((this.form.start_time && !this.form.end_time) ||
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
                this.$emit('changeRequest', this.form)
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
        setDuration() {
            if (!this.form.start_time)
                this.message = 'Please, choose start time.'
            else if ((parseInt(this.form.start_time) + parseInt(this.duration)) > 24)
                this.message = 'Please, choose another start time or duration.'
            else
                this.form.end_time = ('0' + (parseInt(this.form.start_time) + parseInt(this.duration))).slice(-2);
        }
    },
    watch: {
        date: {
            immediate: true,
            handler (newVal, oldVal) {
                this.form.date = newVal
            }
        },
        start: {
            immediate: true,
            handler (newVal, oldVal) {
                this.form.start_time = newVal
            }
        },
        end: {
            immediate: true,
            handler (newVal, oldVal) {
                this.form.end_time = newVal
            }
        },
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
        },
        'form.start_time': {
            immediate: true,
            handler (newVal, oldVal) {
                if (this.duration) this.setDuration(this.duration)
            }
        }
    }
}
</script>
