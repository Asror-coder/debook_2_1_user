<template>
    <div>
        <div class="p-3 rounded-lg hidden md:grid grid-cols-2 bg-white mb-2" v-if="club">
            <div class="h-48 rounded-lg shadow-2xl bg-cover mr-3" :style="makeUrl()"></div>
            <div class="flex flex-col">
                <div class="text-3xl">{{ club.name }}</div>
                <div class="text-gray-400"><i class="fas fa-map-marker-alt mr-1"></i>{{ club.city }}</div>
                <div class="flex-grow"></div>
                <div class="flex">
                    <div class="flex-none flex">
                        <span class="text-xl mt-1 mr-2 text-gray-600">{{ translation.clubs.from }}</span>
                        <div class="text-2xl"> €{{ club.price.toFixed(2) }}</div>
                    </div>
                    <div class="flex-grow"></div>
                    <button class="flex-none text-2xl text-blue-600 hover:text-blue-900  focus:outline-none"
                        @click="goToClubPage">{{ translation.clubs.more }}</button>
                </div>
            </div>
        </div>

        <div class="rounded-lg md:hidden bg-white mb-2" v-if="club" @click="goToClubPage">
            <div class="h-48 rounded-t-lg shadow-2xl bg-cover" :style="makeUrl()"></div>
            <div class="flex items-center justify-between p-2">
                <div class="text-3xl">{{ club.name }}</div>
                <div class="text-gray-400"><i class="fas fa-map-marker-alt mr-1"></i>{{ club.city }}</div>
            </div>
            <div class="flex justify-between items-center p-2">
                <div class="flex">
                    <span class="text-xl mt-1 mr-2 text-gray-600">{{ translation.clubs.from }}</span>
                    <div class="text-2xl"> €{{ club.price.toFixed(2) }}</div>
                </div>
                <div class="text-2xl text-blue-600 hover:text-blue-900  focus:outline-none"
                    >{{ translation.clubs.more }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ClubCard',
    props: {
        id: null
    },
    data() {
        return {
            club: null,
            clubSearch: {
                partnerId: this.id,
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
                    this.clubSearch.sport_type = search_request.sport_type
                    this.clubSearch.date = search_request.date
                    this.clubSearch.start_time = search_request.start_time
                    this.clubSearch.end_time = search_request.end_time

                    sessionStorage.setItem('clubSearch', JSON.stringify(this.clubSearch))
                }
            }

            this.$router.push({name:'Club', params: { clubId: this.id}})
        },
        makeUrl() {
            return 'background-image: url("'+this.club.imageUrl+'")'
        }
    },
    mounted() {
        var request = JSON.parse(sessionStorage.getItem('search'))

        axios.get(`/api/clubs/club/${this.id}/search/info`,{params: request}).then((response)=> {
            this.club = response.data
            // console.log(this.club.imageUrl);
        }).catch((error) => {
            console.log(error.response.data.message);
        })
    }
}
</script>
