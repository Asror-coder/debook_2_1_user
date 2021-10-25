<template>
    <form action="" @submit.prevent="search">
        <div class="flex flex-row">
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

            <div class="flex-none">
                <button class="bg-gray-400 hover:bg-gray-500 text-white ml-3 px-6 py-1 text-lg w-full focus:outline-none"
                type="submit">{{ translation.clubs.search }}</button>
            </div>
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
            message: ''
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
    }
}
</script>
