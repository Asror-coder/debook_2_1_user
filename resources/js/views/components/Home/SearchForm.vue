<template>
    <div class="flex flex-col w-10/12 bg-white p-6 rounded-lg shadow-xl">
        <h1 class="text-2xl text-center pb-5">Wanna play sport?</h1>

        <div class="text-center text-red-700" v-if="message">{{message}}</div>
        <form action="" @submit.prevent="searchClubs" class="mx-10">

            <div class="flex flex-row mb-4">
                <!-- Sport -->
                <div class="flex-none">
                    <label for="sport_type">Sport: </label>
                    <select name="sport_type" id="sport_type" placeholder="Sport" v-model="form.sport_type"
                    class="bg-gray-100 border-2 p-1 rounded focus:outline-none">
                        <option value="" disabled selected hidden>Choose a sport</option>
                        <option value="tennis">Tennis</option>
                        <option value="padel">Padel</option>
                    </select>
                </div>

                <div class="flex-grow"></div>

                <!-- City -->
                <div class="flex-none">
                    <label for="city">City: </label>
                    <select name="city" id="city" placeholder="Sport" v-model="form.city"
                    class="bg-gray-100 border-2 p-1 rounded focus:outline-none">
                        <option value="" disabled selected hidden>Choose your city</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="Harlem">Harlem</option>
                    </select>
                </div>
            </div>

            <hr>
            <div class="text-gray-400 text-md">Optional</div>

            <div class="flex flex-row mb-4">
                <!-- Date -->
                <div class="flex-none">
                    <label for="date">Date: </label>
                    <input type="date" name="date" placeholder="date"
                        class="bg-gray-100 border-2 p-1 rounded focus:outline-none" v-model="form.date">
                </div>

                <div class="flex-grow"></div>

                 <!-- Time -->
                <div class="flex-none">
                    <label for="time">Time:</label>
                    <select name="start-time" v-model="form.start_time"
                    class="bg-gray-100 border-2 p-1 rounded focus:outline-none">
                        <option value="" disabled selected hidden>Start</option>
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

                    <label for="time">-</label>
                    <select name="end-time" v-model="form.end_time"
                    class="bg-gray-100 border-2 p-1 rounded focus:outline-none">
                        <option value="" disabled selected hidden>End</option>
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
            </div>

            <div>
                <button class="bg-blue-500 text-white px-6 py-2 w-full rounded font-medium focus:outline-none"
                type="submit">Search</button>
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
        }
    }
}
</script>
