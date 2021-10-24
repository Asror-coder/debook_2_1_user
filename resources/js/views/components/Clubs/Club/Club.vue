<template>
    <div class="grid grid-cols-5">
        <div class="col-span-1"></div>
        <main class="col-span-3" v-show="showClubInfo">
            <!-- Name and Short Information -->
            <div class="w-full py-3 px-7 bg-dbGray bg-opacity-30 my-4">
                <div class="text-white text-4xl" style="text-shadow: 2px 2px 4px #222121">{{ clubDetails.name }}</div>
                <div class="text-gray-400 text-md" style="text-shadow: 2px 2px 4px #222121">
                    <i class="fas fa-map-marker-alt"></i> {{ clubAddress.city }}, {{ clubAddress.country}}
                </div>
            </div>

            <!-- Images -->
            <SlideShow :images="images" :index="0" class="mt-4" />

            <!-- Venue search -->
            <SearchVenueForm :clubId="this.$route.params.clubId" @search-venue="searchVenue" class="my-4"/>

            <div v-show="showAvailableVenues" class="mb-4 px-3 pt-3 grid grid-cols-4 shadow-lg bg-white">
                <div class="text-xl text-gray-500">
                    Matching your search
                </div>
                <div class=" col-span-3">
                    <div class="p-2 mb-2 bg-red-200 border-red-500 mt-2"
                        v-show="showLoginMessage"> Please login first! </div>

                    <div :key="venue.venue_id" v-for="venue in availableVenues" v-show="availableVenues">
                        <VenueCard :venue="venue" @book="makeBooking"/>
                    </div>

                    <div v-show="noVenuesMessage"> {{ noVenuesMessage }} </div>
                </div>
            </div>

            <!-- About club -->

            <div class="w-full py-3 px-7 bg-dbGray bg-opacity-30 my-4">
                <div class="text-white text-xl" style="text-shadow: 1px 1px 4px #222121">ABOUT</div>

                <div class="text-white my-2">{{ clubDetails.description }}</div>
                <div class="flex">
                    <div class="text-gray-400 text-md" style="text-shadow: 2px 2px 4px #222121">
                        Address: <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="text-white ml-2">
                        {{ clubAddress.street }} {{ clubAddress.house_num }}-{{ clubAddress.house_add }}, {{ clubAddress.city }}, {{ clubAddress.country}}
                    </div>
                </div>
            </div>

        </main>
        <div class="col-span-1"></div>
    </div>
</template>

<script>
import SlideShow from './Images/SlideShow.vue'
import SearchVenueForm from './Venue/SearchVenue'
import VenueCard from './Venue/VenueCard'

export default {
    name: 'Club',
    components: {
        SearchVenueForm,
        VenueCard,
        SlideShow
    },
    data() {
        return {
            clubDetails: Object,
            clubAddress: Object,
            images: Array,
            showClubInfo: false,

            searchRequest: Object,
            availableVenues: Array,
            noVenuesMessage: String,
            showAvailableVenues: false,

            showLoginMessage: false,
            message: String
        };
    },
    methods: {
        searchVenue(searchDetails) {
            this.noVenuesMessage = ''
            this.searchRequest = searchDetails
            this.availableVenues = []
            this.showLoginMessage = false

            axios.get(`/api/clubs/club/${this.$route.params.clubId}/availablevenues`,{params: searchDetails}).then((response)=> {
                this.showAvailableVenues = true;

                if(response.data.length > 0) {
                    this.availableVenues = response.data;
                }
                else {
                    this.noVenuesMessage = 'Sorry, no available venues according to chosen parameters.';
                }
            }).catch((error) => {
                this.message = error.response.data.message;
            })
        },
        async fetchInfo(id) {
            await axios.get(`/api/clubs/club/${id}`).then((response)=> {
                if(response.data.length > 0) {
                    this.clubAddress = response.data[0];
                    this.clubDetails = response.data[1];
                    this.images = response.data[2]
                    this.showClubInfo = true;
                }
            }).catch((error) => {
                this.message = error.response.data.message;
            })
        },
        makeBooking(venue) {
            if (localStorage.getItem('user')) {
                var booking = {
                    clubName: this.clubDetails.name,
                    clubPhone: this.clubDetails.phone,
                    venueName: venue.name,
                    venueId: venue.venue_id,
                    sport_type: this.searchRequest.sport_type,
                    surface: venue.surface,
                    indoor: venue.indoor,
                    date: this.searchRequest.date,
                    start_time: this.searchRequest.start_time,
                    end_time: this.searchRequest.end_time,
                    price: venue.price
                }

                // sessionStorage.setItem('newBooking', JSON.stringify(booking))
                this.$router.push({ name:'NewBooking', params: {venueId: venue.venue_id}})
            } else this.showLoginMessage = true
        }
    },
    watch: {
        '$route.params.clubId': {
            handler: function(clubId) {
                this.fetchInfo(clubId)
            },
            deep: true,
            immediate: true
        },
    }
}
</script>
