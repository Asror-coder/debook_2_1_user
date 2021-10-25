<template>
    <div class="p-3">
        <div class="flex flex-row text-lg mb-2">
            <div class="flex-none">{{ this.venue.name }}</div>
            <div class="flex-none text-gray-500 ml-4">
                {{ this.venue.surface }},
                <span v-if="this.venue.indoor == 1">{{ translation.booking.indoor }}</span>
                <span v-else-if="this.venue.indoor == 0">{{ translation.booking.outdoor }}</span>
            </div>
            <div class="flex-grow"></div>
            <div class="flex-none">€{{ this.venue.price }}</div>
            <button class="flex-none bg-green-500 text-white ml-4 py-1 px-5 focus:outline-none hover:shadow-lg"
                @click="book">{{ translation.booking.bookPage.btn }}</button>
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
