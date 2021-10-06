<template>
    <div class="flex flex-col">
        <!-- Top of the page: Image Background, Sport and Location -->
        <TopFilters :passed_sport="sport" :passed_city="request.city" @changeRequest="changeRequest"/>

        <div class="flex-none grid grid-cols-4 gap-4">
             <!-- Side Filters: Surface, Inside/Outside and Price -->
            <div class="col-span-1">
                <SideFilters :sport="sport" :passed_surface="request.surface" :passed_indoor="request.indoor"
                    :passed_maxPrice="request.maxPrice" @changeRequest="changeRequest"/>
            </div>

            <main class="col-span-2">
                <!-- Date, Start time, End time and Search button-->
                <div class="flex flex-row my-3">
                    <DateTimeFilters class="flex-none" @changeRequest="changeRequest"
                        :date="request.date" :start="request.start_time" :end="request.end_time"/>

                    <div class="flex-grow"></div>

                    <div class="flex-none">
                        <button class="bg-blue-500 text-white px-6 py-1 w-full rounded font-medium focus:outline-none"
                            type="submit">Map</button>
                    </div>
                </div>

                <!-- List of clubs -->
                <div :key="club[0].partner_id" v-for="club in clubs" class="">
                    <ClubCard :club="club" />
                </div>
            </main>
            <div class="col-span-1"></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ClubCard from './PageComponents/ClubCard'
import TopFilters from './PageComponents/TopFilters'
import DateTimeFilters from './PageComponents/DateTimeFilters'
import SideFilters from './PageComponents/SideFilters'

export default {
    name: 'Clubs',
    components: {
        ClubCard,
        TopFilters,
        DateTimeFilters,
        SideFilters
    },
    data() {
        return {
            sport: this.$route.params.sport,
            message: String,
            request: {
                sport_type: '',
                city: '',
                date: '',
                start_time: '',
                end_time: '',
                surface: [],
                indoor: null,
                maxPrice: 0
            }
        };
    },
    computed: mapGetters('clubs',['clubs']),
    methods: {
        ...mapActions('clubs',['getClubs']),
        async fetchSport(sport) {

            if (sessionStorage.getItem('search')) {
                var search_request = JSON.parse(sessionStorage.getItem('search'));

                if (search_request.sport_type == sport) this.changeRequest(search_request)
                else this.destroyRequest(sport)
            }
            else {
                this.request.sport_type = sport
                sessionStorage.setItem('search', JSON.stringify(this.request))
            }

            this.sport = sport

            await this.getClubs(this.request)
        },
        async changeRequest(newRequest) {
            if(newRequest.sport_type) this.request.sport_type = newRequest.sport_type
            if(newRequest.city) this.request.city = newRequest.city
            if(newRequest.date) this.request.date = newRequest.date
            if(newRequest.start_time) this.request.start_time = newRequest.start_time
            if(newRequest.end_time) this.request.end_time = newRequest.end_time
            if(newRequest.surface) this.request.surface = newRequest.surface
            if(newRequest.indoor) this.request.indoor = newRequest.indoor
            if(newRequest.maxPrice) this.request.maxPrice = newRequest.maxPrice

            sessionStorage.setItem('search', JSON.stringify(this.request))

            if(newRequest.sport_type && newRequest.sport_type != this.sport)
                this.$router.push({ name:'Clubs', params: { sport: newRequest.sport_type}}).catch(err => {});

            await this.getClubs(this.request)
        },
        async destroyRequest(sport) {
            this.request.sport_type = sport
            this.request.city = ''
            this.request.date = ''
            this.request.start_time = ''
            this.request.end_time = ''
            this.request.surface = []
            this.request.indoor = null
            this.request.maxPrice = 0

            sessionStorage.setItem('search', JSON.stringify(this.request))

            await this.getClubs(this.request)
        }
    },
    watch: {
        '$route.params.sport': {
            handler: function(sport) {
                this.fetchSport(sport)
            },
            deep: true,
            immediate: true
        },
    }
}
</script>
