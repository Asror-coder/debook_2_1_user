<template>
    <div class="flex-none flex justify-center mt-3">
        <div>
            <select name="sport_type" id="sport_type" placeholder="Sport" @change="changeRequest"
            class="bg-gray-100 p-1 rounded focus:outline-none" v-model="form.sport_type">
                <option value="tennis">Tennis</option>
                <option value="padel">Padel</option>
            </select>
        </div>

        <div>
            <select name="city" id="city" placeholder="Sport" v-model="form.city"
            class="bg-gray-100 p-1 rounded focus:outline-none ml-3" @change="changeRequest">
                <option value="" disabled selected hidden>City</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Harlem">Harlem</option>
            </select>
        </div>
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
                // console.log('In top filters: Old(',oldVal, ') -> New(',newVal,')');    //REMOVE
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
