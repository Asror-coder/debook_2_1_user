<template>
    <div>
        <!-- Bookings -->
        <div :key="booking[0].id" v-for="booking in bookings">
            <BookingCard :booking="booking" />
        </div>

        <!-- Pages -->
        <div class="flex flex-row my-8">
            <div class="flex-grow"></div>
            <div class="flex flex-row text-lg" v-if="pages">
                <div :key="index" v-for="(page, index) in pages.links" class="mx-3">
                    <Button :text="'prev'" v-if="page.label == 'prev' && page.url"
                        :textStyle="'text-gray-400 hover:text-white'" @btn-click="$emit('changePage',page.url)"/>

                    <Button :text="page.label" v-if="page.label != 'prev' && page.label != 'next'"
                        :textStyle="page.label == pages.current_page ? 'text-white h-7 w-7 rounded-full bg-dashBtnBlue' : 'text-gray-400 hover:text-white'"
                        @btn-click="$emit('changePage',page.url)"/>

                    <Button :text="'next'" v-if="page.label == 'next' && page.url"
                        :textStyle="'text-gray-400 hover:text-white'" @btn-click="$emit('changePage',page.url)"/>
                </div>
            </div>
            <div class="flex-grow"></div>
        </div>
    </div>
</template>

<script>
import BookingCard from './BookingCard.vue'
import Button from './Button.vue'

export default {
    name: 'Bookings',
    components: {
        BookingCard,
        Button
    },
    props: {
        bookings: null,
        pages: null
    }
}
</script>
