<template>
    <div class="flex flex-row">
        <div class="flex-grow"></div>
        <div class="flex flex-col mr-10 mt-5">
            <!-- Surface -->
            <div>
                <div class="text-gray-500">Surface: </div>
                <!-- Tennis -->
                <div v-if="sport == 'tennis'" class="flex flex-col ml-3">
                    <div>
                        <input type="checkbox" id="carpet" value="carpet" v-model="form.surface" @change="changeRequest">
                        <label for="carpet">Carpet</label>
                    </div>
                    <div>
                        <input type="checkbox" id="clay" value="clay" v-model="form.surface" @change="changeRequest">
                        <label for="clay">Clay</label>
                    </div>
                    <div>
                        <input type="checkbox" id="acrylic" value="acrylic" v-model="form.surface" @change="changeRequest">
                        <label for="acrylic">Acrylic</label>
                    </div>
                </div>

                <!-- Padel -->
                <div v-else-if="sport == 'padel'" class="flex flex-col ml-3">
                    <div>
                        <input type="checkbox" id="concrete" value="concrete" v-model="form.surface" @change="changeRequest">
                        <label for="concrete">Concrete</label>
                    </div>
                </div>
            </div>

            <!-- Indoor/Outdoor -->
            <div class="mt-5">
                <div class="text-gray-500">Indoor/Outdoor: </div>

                <div class="ml-3" @change="changeRequest">
                    <input type="radio" value="1" v-model="form.indoor">
                    <label for="1">Indoor</label> <br>
                    <input type="radio" value="0" v-model="form.indoor">
                    <label for="0">Outdoor</label> <br>
                    <input type="radio" value="null" v-model="form.indoor">
                    <label for="null">Doesn't matter</label> <br>
                </div>
            </div>

            <!-- Price -->
            <div class="mt-5">
                <div class="text-gray-500">Max price(per hour): </div>

                <div class="ml-3" @change="changeRequest">
                    <input type="radio" value="20" v-model="form.maxPrice">
                    <label for="1">€20</label> <br>
                    <input type="radio" value="25" v-model="form.maxPrice">
                    <label for="0">€25</label> <br>
                    <input type="radio" value="30" v-model="form.maxPrice">
                    <label for="0">€30</label> <br>
                    <input type="radio" value="35" v-model="form.maxPrice">
                    <label for="0">€35</label> <br>
                    <input type="radio" value="40" v-model="form.maxPrice">
                    <label for="0">€40</label> <br>
                    <input type="radio" value="50" v-model="form.maxPrice">
                    <label for="0">€50</label> <br>
                    <input type="radio" value="" v-model="form.maxPrice">
                    <label for="">Doesn't matter</label> <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideFilters',
    props: {
        sport: '',
        passed_surface: Array,
        passed_indoor: null,
        passed_maxPrice: ''
    },
    data() {
        return {
            form: {
                surface: this.passed_surface,
                indoor: this.passed_indoor,
                maxPrice: this.passed_maxPrice
            }
        }
    },
    methods: {
        changeRequest() {
            this.$emit('changeRequest', this.form)
        }
    },
    watch: {
        passed_surface: {
            immediate: true,
            handler (newVal, oldVal) {
                this.form.surface = newVal
            }
        },
        passed_indoor: {
            immediate: true,
            handler (newVal, oldVal) {
                this.form.indoor = newVal
            }
        },
        passed_maxPrice: {
            immediate: true,
            handler (newVal, oldVal) {
                this.form.maxPrice = newVal
            }
        }
    }
}
</script>
