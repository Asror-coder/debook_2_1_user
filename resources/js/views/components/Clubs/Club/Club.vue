<template>
    <div>
        <div class="hidden md:grid grid-cols-5" v-if="translation">
            <div class="col-span-1"></div>
            <main class="col-span-3 2xl:px-20" v-show="showClubInfo">
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
                        {{ translation.clubs.match}}
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

                <div class="w-full py-3 px-7 bg-dbGray bg-opacity-30 mt-4">
                    <div class="grid grid-cols-3 gap-8">
                        <div class="col-span-2">
                            <div class="text-white text-xl" style="text-shadow: 1px 1px 4px #222121">{{ translation.clubs.about }}</div>
                            <div class="text-white my-2">{{ clubDetails.description }}</div>
                        </div>

                        <!-- Open hours -->
                        <div v-if="openHours">
                            <div class="text-gray-300 text-xl" style="text-shadow: 1px 1px 4px #222121">Open Hours</div>
                            <div class="grid grid-cols-2 gap-2  my-2">
                                <div class="text-white">
                                    <div>Monday: </div>
                                    <div>Tuesday: </div>
                                    <div>Wednesday: </div>
                                    <div>Thursday: </div>
                                    <div>Friday: </div>
                                    <div>Saturday: </div>
                                    <div>Sunday: </div>
                                </div>

                                <div class="text-white">
                                    <div>{{ changeTimeFormat(openHours.start_time_wd) }} - {{ changeTimeFormat(openHours.end_time_wd) }}</div>
                                    <div>{{ changeTimeFormat(openHours.start_time_wd) }} - {{ changeTimeFormat(openHours.end_time_wd) }}</div>
                                    <div>{{ changeTimeFormat(openHours.start_time_wd) }} - {{ changeTimeFormat(openHours.end_time_wd) }}</div>
                                    <div>{{ changeTimeFormat(openHours.start_time_wd) }} - {{ changeTimeFormat(openHours.end_time_wd) }}</div>
                                    <div>{{ changeTimeFormat(openHours.start_time_wd) }} - {{ changeTimeFormat(openHours.end_time_wd) }}</div>
                                    <div>{{ changeTimeFormat(openHours.start_time_we) }} - {{ changeTimeFormat(openHours.end_time_we) }}</div>
                                    <div>{{ changeTimeFormat(openHours.start_time_we) }} - {{ changeTimeFormat(openHours.end_time_we) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full bg-dbGray bg-opacity-30 mt-4 mb-8">
                    <div class="grid grid-cols-2">
                        <div class="py-3 px-7">
                            <div class="grid grid-cols-3 gap-1">
                                <div class="text-gray-400 text-md" style="text-shadow: 2px 2px 4px #222121">
                                    <i class="fas fa-map-marker-alt mr-2"></i> {{ translation.booking.address }}:
                                </div>
                                <div class="col-span-2 text-white">
                                    {{ clubAddress.street }} {{ clubAddress.house_num }}-{{ clubAddress.house_add }}, {{ clubAddress.city }}, {{ clubAddress.country}}
                                </div>
                            </div>

                            <div class="grid grid-cols-3 gap-1">
                                <div class="text-gray-400 text-md" style="text-shadow: 2px 2px 4px #222121">
                                    <i class="fas fa-phone mr-1"></i> {{ translation.dashboard.phone }}:
                                </div>
                                <div class="col-span-2 text-white">{{ clubDetails.phone }}</div>
                            </div>

                            <div class="grid grid-cols-3 gap-1">
                                <div class="text-gray-400 text-md" style="text-shadow: 2px 2px 4px #222121">
                                    <i class="fas fa-envelope-open mr-2"></i> {{ translation.dashboard.email }}:
                                </div>
                                <div class="col-span-2 text-white">{{ clubDetails.email }}</div>
                            </div>
                        </div>

                        <!-- Map -->
                        <div v-if="coordinates.lat" class="justify-self-end p-2">
                            <GmapMap class=""
                                :center="coordinates"
                                :zoom="14"
                                map-type-id="terrain"
                                style="width: 420px; height: 300px">
                                <GmapMarker
                                    :key="index"
                                    v-for="(m, index) in coordinates"
                                    :position="coordinates"
                                    :clickable="true"
                                    :draggable="true"
                                    @click="center=coordinates"
                                />
                            </GmapMap>
                        </div>
                    </div>
                </div>

            </main>
            <div class="col-span-1"></div>
        </div>

        <!-- Mobile version -->
        <div class="md:hidden" v-if="translation">
            <!-- Images -->
            <MobileSwiper :images="images" :index="0" class="mt-4" />

            <!-- Name and Short Information -->
            <div class="w-full py-3 px-7 bg-dbGray bg-opacity-30 my-4">
                <div class="text-white text-4xl" style="text-shadow: 2px 2px 4px #222121">{{ clubDetails.name }}</div>
                <div class="text-gray-400 text-md" style="text-shadow: 2px 2px 4px #222121">
                    <i class="fas fa-map-marker-alt"></i> {{ clubAddress.city }}, {{ clubAddress.country}}
                </div>
            </div>

            <!-- Venue search -->
            <SearchVenueForm :clubId="this.$route.params.clubId" @search-venue="searchVenue" class="my-4"/>

            <div v-show="showAvailableVenues" class="mb-4 px-3 pt-3 shadow-lg bg-white">
                <div class="text-xl text-gray-500">
                    {{ translation.clubs.match}}
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

            <div class="w-full py-3 px-7 bg-dbGray bg-opacity-30 mt-4 mb-8">
                <div class="text-white text-xl" style="text-shadow: 1px 1px 4px #222121">{{ translation.clubs.about }}</div>

                <div class="text-white my-2">{{ clubDetails.description }}</div>

                <div v-if="openHours">
                    <div class="text-gray-300 text-xl" style="text-shadow: 1px 1px 4px #222121">Open Hours</div>
                    <div class="grid grid-cols-2 gap-2  my-2">
                        <div class="text-white">
                            <div>Monday: </div>
                            <div>Tuesday: </div>
                            <div>Wednesday: </div>
                            <div>Thursday: </div>
                            <div>Friday: </div>
                            <div>Saturday: </div>
                            <div>Sunday: </div>
                        </div>

                        <div class="text-white">
                            <div>{{ changeTimeFormat(openHours.start_time_wd) }} - {{ changeTimeFormat(openHours.end_time_wd) }}</div>
                            <div>{{ changeTimeFormat(openHours.start_time_wd) }} - {{ changeTimeFormat(openHours.end_time_wd) }}</div>
                            <div>{{ changeTimeFormat(openHours.start_time_wd) }} - {{ changeTimeFormat(openHours.end_time_wd) }}</div>
                            <div>{{ changeTimeFormat(openHours.start_time_wd) }} - {{ changeTimeFormat(openHours.end_time_wd) }}</div>
                            <div>{{ changeTimeFormat(openHours.start_time_wd) }} - {{ changeTimeFormat(openHours.end_time_wd) }}</div>
                            <div>{{ changeTimeFormat(openHours.start_time_we) }} - {{ changeTimeFormat(openHours.end_time_we) }}</div>
                            <div>{{ changeTimeFormat(openHours.start_time_we) }} - {{ changeTimeFormat(openHours.end_time_we) }}</div>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <div class="grid grid-cols-3">
                        <div class="text-gray-400 text-md" style="text-shadow: 2px 2px 4px #222121">
                            <i class="fas fa-map-marker-alt mr-2"></i> {{ translation.booking.address }}:
                        </div>

                        <div class="text-white ml-2 col-span-2">
                            {{ clubAddress.street }} {{ clubAddress.house_num }}-{{ clubAddress.house_add }}, {{ clubAddress.city }}, {{ clubAddress.country}}
                        </div>
                    </div>

                    <div class="grid grid-cols-3">
                        <div class="text-gray-400 text-md" style="text-shadow: 2px 2px 4px #222121">
                           <i class="fas fa-phone mr-1"></i> {{ translation.dashboard.phone }}:
                        </div>

                        <div class="text-white ml-2 col-span-2"> {{ clubDetails.phone }} </div>
                    </div>

                    <div class="grid grid-cols-3">
                        <div class="text-gray-400 text-md" style="text-shadow: 2px 2px 4px #222121">
                           <i class="fas fa-envelope-open mr-2"></i> {{ translation.dashboard.email }}:
                        </div>

                        <div class="text-white ml-2 col-span-2"> {{ clubDetails.email }} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MobileSwiper from './Images/MobileSwiper.vue'
import SlideShow from './Images/SlideShow.vue'
import SearchVenueForm from './Venue/SearchVenue'
import VenueCard from './Venue/VenueCard'

export default {
    name: 'Club',
    components: {
        SearchVenueForm,
        VenueCard,
        SlideShow,
        MobileSwiper
    },
    data() {
        return {
            clubDetails: Object,
            images: Array,
            openHours: Object,
            showClubInfo: false,

            clubAddress: Object,
            coordinates: {
                lat: null,
                lng: null
            },

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
                    this.openHours = response.data[3]
                    this.showClubInfo = true;

                    if (this.clubAddress) {
                        this.coordinates.lat = parseFloat(this.clubAddress.lat)
                        this.coordinates.lng = parseFloat(this.clubAddress.long)
                    }
                }
            }).catch((error) => {
                this.message = error.response.data.message;
            })
        },
        makeBooking(venue) {
            if (localStorage.getItem('user')) {
                this.$router.push({ name:'NewBooking', params: {venueId: venue.venue_id}})
            }
            else {
                sessionStorage.setItem("back", "d7JD8Hr3Gs")
                this.$router.push({ name:'Login' })
                this.showLoginMessage = true
            }
        },
        changeTimeFormat($time) {
            if ($time == 24) $time = 0;

            if ($time < 10) return '0'+$time+':00';
            else if ($time >= 10) return $time+':00';
        }
    },
    watch: {
        '$route.params.clubId': {
            handler: function(clubId) {
                this.fetchInfo(clubId)

                if (!sessionStorage.getItem('clubSearch')) {
                    this.noVenuesMessage = ''
                    this.availableVenues = []
                    this.showLoginMessage = false
                    this.showAvailableVenues = false
                }
            },
            deep: true,
            immediate: true
        },
    }
}
</script>
