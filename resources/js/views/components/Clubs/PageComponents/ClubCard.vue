<template>
    <div class="flex flex-row p-3 rounded-lg shadow-lg text-lg">
        <div class="flex-none">{{ this.club[2].name }}</div>
        <div class="flex-none text-gray-600 ml-4">{{ this.club[1].city }}</div>
        <div class="flex-grow"></div>
        <button class="flex-none text-blue-600 hover:text-blue-900  focus:outline-none"
            @click="goToClubPage">more</button>
    </div>
</template>

<script>
export default {
    name: 'ClubCard',
    props: {
        club: Array
    },
    data() {
        return {
            clubSearch: {
                partnerId: null,
                sport_type: '',
                date: '',
                start_time: '',
                end_time: ''
            }
        }
    },
    methods: {
        goToClubPage() {
            if (sessionStorage.getItem('search')) {
                var search_request = JSON.parse(sessionStorage.getItem('search'))

                if(search_request.date && search_request.start_time && search_request.end_time) {
                    this.clubSearch.partnerId = this.club[0].id
                    this.clubSearch.sport_type = search_request.sport_type
                    this.clubSearch.date = search_request.date
                    this.clubSearch.start_time = search_request.start_time
                    this.clubSearch.end_time = search_request.end_time

                    sessionStorage.setItem('clubSearch', JSON.stringify(this.clubSearch))
                }
            }

            this.$router.push({name:'Club', params: { clubId: this.club[0].id}})
        }
    }
}
</script>
