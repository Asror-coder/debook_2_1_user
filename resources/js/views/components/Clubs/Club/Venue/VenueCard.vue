<template>
    <div class="mt-2 md:p-3">
        <div class="flex justify-between text-lg mb-2">
            <div class="flex items-center">
                <div class="flex-none">{{ this.venue.name }}</div>
                <div class="text-gray-500 ml-4">
                    {{ this.venue.surface }},
                    <span v-if="this.venue.indoor == 1">{{ translation.booking.indoor }}</span>
                    <span v-else-if="this.venue.indoor == 0">{{ translation.booking.outdoor }}</span>
                </div>
            </div>

            <div class="flex items-center">
                <div>€{{ this.venue.price }}</div>
                <button class="flex-none bg-green-500 text-white ml-2 md:ml-4 py-1 px-5 focus:outline-none hover:shadow-lg"
                    @click="book">{{ translation.booking.bookPage.btn }}</button>
            </div>
        </div>
        <hr class="border-gray-300">
    </div>
</template>

<script>
export default {
    name: 'VenueCard',
    props: {
        venue: Object
    },
    methods: {
        book() {
            this.$emit('book',this.venue)
        }
    }
}
</script>
