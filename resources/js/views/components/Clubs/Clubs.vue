<template>
    <div class="flex flex-col" v-if="translation">
        <!-- Top of the page: Image Background, Sport and Location -->
        <TopFilters :passed_sport="sport" :passed_city="request.city" @changeRequest="changeRequest"/>

        <div class="flex-none hidden md:grid md:grid-cols-4 gap-4 mt-3 mb-6">
             <!-- Side Filters: Surface, Inside/Outside and Price -->
            <div class="col-span-1">
                <SideFilters :sport="sport" :passed_surface="request.surface" :passed_indoor="request.indoor"
                    :passed_maxPrice="request.maxPrice" @changeRequest="changeRequest"/>
            </div>

            <main class="col-span-2 2xl:px-16">
                <!-- Date, Start time, End time and Search button-->
                <div class="flex flex-row mt-3 mb-1">
                    <DateTimeFilters class="flex-none" @changeRequest="changeRequest"
                        :date="request.date" :start="request.start_time" :end="request.end_time"/>

                    <div class="flex-grow"></div>

                    <div class="flex-none">
                        <button class="bg-blue-500 text-white px-6 py-2 w-full rounded-xl font-medium focus:outline-none"
                            type="submit">{{ translation.clubs.map }}</button>
                    </div>
                </div>

                <!-- Number of clubs -->
                <div class="text-dbGray text-sm mb-3" v-if="clubs">{{clubs.total}} clubs</div>
                <div class="text-dbGray text-sm mb-3" v-if="!clubs">no clubs</div>

                <!-- List of clubs -->
                <div v-if="clubs">
                    <div :key="club.id" v-for="club in clubs.data">
                        <ClubCard :id="club.id" />
                    </div>
                </div>

                <!-- Pages -->
                <div class="flex flex-row my-8">
                    <div class="flex-grow"></div>
                    <div class="flex flex-row text-lg" v-if="clubs && clubs.last_page > 1">
                        <div :key="index" v-for="(page, index) in clubs.links" class="mx-3">
                            <Button :text="'prev'" v-if="page.label == 'prev' && page.url"
                                :textStyle="'text-gray-400 hover:text-white'" @btn-click="changePage(page.url)"/>

                            <Button :text="page.label" v-if="page.label != 'prev' && page.label != 'next'"
                                :textStyle="page.label == clubs.current_page ? 'text-white h-7 w-7 rounded-full bg-dashBtnBlue' : 'text-gray-400 hover:text-white'"
                                @btn-click="changePage(page.url)"/>

                            <Button :text="'next'" v-if="page.label == 'next' && page.url"
                                :textStyle="'text-gray-400 hover:text-white'" @btn-click="changePage(page.url)"/>
                        </div>
                    </div>
                    <div class="flex-grow"></div>
                </div>
            </main>
            <div class="col-span-1"></div>
        </div>

        <!-- Mobile version -->
        <div class="flex-none md:hidden gap-4 mt-2 mb-2 px-2">
            <!-- Date, Start time, End time and Search button-->
            <DateTimeFilters class="flex-none mt-3 mb-1" @changeRequest="changeRequest"
                :date="request.date" :start="request.start_time" :end="request.end_time"/>

            <!-- Number of clubs -->

            <div class="flex justify-between items-center mb-2 mr-2">
                <div class="text-dbGray text-md mb-3" v-if="clubs">{{clubs.total}} clubs</div>
                <div class="text-dbGray text-md mb-3" v-if="!clubs">no clubs</div>

                <button @click="toggleFilters"
                    class="text-white bg-blue-500 rounded-xl px-6 shadow-md focus:outline-none">
                    filters
                </button>
            </div>

            <!-- Side Filters: Surface, Inside/Outside and Price -->
            <SideFilters :sport="sport" :passed_surface="request.surface" :passed_indoor="request.indoor"
                :passed_maxPrice="request.maxPrice" @changeRequest="changeRequest" v-if="showFilters"/>

            <!-- List of clubs -->
            <div v-if="clubs">
                <div :key="club.id" v-for="club in clubs.data">
                    <ClubCard :id="club.id" />
                </div>
            </div>

            <!-- Pages -->
            <div class="flex flex-row my-4">
                <div class="flex-grow"></div>
                <div class="flex flex-row text-lg" v-if="clubs && clubs.last_page > 1">
                    <div :key="index" v-for="(page, index) in clubs.links" class="mx-3">
                        <Button :text="'prev'" v-if="page.label == 'prev' && page.url"
                            :textStyle="'text-gray-400 hover:text-white'" @btn-click="changePage(page.url)"/>

                        <Button :text="page.label" v-if="page.label != 'prev' && page.label != 'next'"
                            :textStyle="page.label == clubs.current_page ? 'text-white h-7 w-7 rounded-full bg-dashBtnBlue' : 'text-gray-400 hover:text-white'"
                            @btn-click="changePage(page.url)"/>

                        <Button :text="'next'" v-if="page.label == 'next' && page.url"
                            :textStyle="'text-gray-400 hover:text-white'" @btn-click="changePage(page.url)"/>
                    </div>
                </div>
                <div class="flex-grow"></div>
            </div>
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
import Button from '../Dashboard/components/Button.vue'

export default {
    name: 'Clubs',
    components: {
        ClubCard,
        TopFilters,
        DateTimeFilters,
        SideFilters,
        Button
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
            },
            showFilters: false,
        };
    },
    computed: mapGetters('clubs',['clubs']),
    methods: {
        ...mapActions('clubs',['getClubs','changePage']),
        async fetchSport(sport) {

            if (sessionStorage.getItem('search')) {
                var search_request = JSON.parse(sessionStorage.getItem('search'));

                if (search_request.sport_type == sport) this.changeRequest(search_request)
                else this.destroyRequest(sport)
            }
            else {
                this.request.sport_type = sport
                sessionStorage.setItem('search', JSON.stringify(this.request))
                this.getClubs(this.request)
            }

            this.sport = sport
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
        },
        toggleFilters() {
            this.showFilters = !this.showFilters
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
