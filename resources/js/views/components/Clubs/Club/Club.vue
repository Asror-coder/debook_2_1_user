<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1"></div>
        <main class="col-span-2" v-show="showClubInfo">
            <div class="text-center my-4">{{this.clubDetails.name}}</div>

            <SearchVenueForm :clubId="this.$route.params.clubId" @search-venue="searchVenue" class="mt-4"/>

            <div v-show="showAvailableVenues" class="px-3 pt-3 rounded-lg shadow-lg">
                <div class="p-2 mb-2 bg-red-200 border-red-500 rounded-lg mt-2"
                    v-show="showLoginMessage"> Please login first! </div>

                <div :key="venue.venue_id" v-for="venue in availableVenues" v-show="availableVenues">
                    <VenueCard :venue="venue" @book="makeBooking"/>
                </div>

                <div v-show="noVenuesMessage"> {{ noVenuesMessage }} </div>
            </div>
        </main>
        <div class="col-span-1"></div>
    </div>
</template>

<script>
import SearchVenueForm from './Venue/SearchVenue'
import VenueCard from './Venue/VenueCard'

export default {
    name: 'Club',
    components: {
        SearchVenueForm,
        VenueCard
    },
    data() {
        return {
            clubDetails: Object,
            clubAddress: Object,
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
    created() {
        this.fetchInfo(this.$route.params.clubId)
    }
}
</script>
