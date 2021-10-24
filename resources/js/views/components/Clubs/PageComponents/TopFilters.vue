<template>
    <div class="py-10 bg-cover flex" style="background-image: url('https://debook.s3.eu-west-1.amazonaws.com/site_images/main-page.jpg')">
        <div class="flex-grow"></div>
        <div class="flex-none flex justify-center bg-dbGray bg-opacity-70 p-6">
            <select name="sport_type" id="sport_type" placeholder="Sport" @change="changeRequest"
                class="bg-gray-100 shadow-2xl p-2 border-none focus:outline-none w-36 text-lg" v-model="form.sport_type">
                <option value="tennis">Tennis</option>
                <option value="padel">Padel</option>
            </select>

            <select name="city" id="city" placeholder="Sport" v-model="form.city"
                class="bg-gray-100 shadow-2xl p-2 border-none focus:outline-none ml-4 w-36 text-lg" @change="changeRequest">
                <option value="" disabled selected hidden>City</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Harlem">Harlem</option>
            </select>
        </div>
        <div class="flex-grow"></div>
    </div>
</template>

<script>
export default {
    name: 'TopFilters',
    props: {
        passed_sport: '',
        passed_city: ''
    },
    data() {
        return {
            form: {
                sport_type: this.passed_sport,
                city: this.passed_city,
            }
        }
    },
    methods: {
        changeRequest() {
            this.$emit('changeRequest', this.form)
        }
    },
    watch: {
        passed_sport: {
            immediate: true,
            handler (newVal, oldVal) {
                this.form.sport_type = newVal
            }
        },
        passed_city: {
            immediate: true,
            handler (newVal, oldVal) {
                this.form.city = newVal
            }
        },
    }
}
</script>
