<template>
    <div>
        <main class="hidden md:grid grid-cols-4 gap-4 bg-cover" style="background-image: url('https://debook.s3.eu-west-1.amazonaws.com/site_images/main-page.jpg')">
            <div class="col-span-1"></div>
            <div class="col-span-2 flex justify-center">
                <SearchForm class="my-24" @searchClubs="search"/>
            </div>
            <div class="col-span-1"></div>
        </main>

        <main class="md:hidden bg-cover"
            style=" background-image: url('https://debook.s3.eu-west-1.amazonaws.com/site_images/main-page.jpg');
                    background-position: bottom right;">
            <div class="flex justify-center">
                <MobileSearchForm class="my-12" @searchClubs="search"/>
            </div>
        </main>
    </div>
</template>

<script>
import MobileSearchForm from './MobileSearchForm.vue'
import SearchForm from './SearchForm'

export default {
    name: 'Home',
    components: {
        SearchForm,
        MobileSearchForm
    },
    methods: {
        search(request) {
            sessionStorage.setItem('search', JSON.stringify(request))
            this.$router.push({ name:'Clubs', params: {sport: request.sport_type} })
        }
    }
}
</script>
