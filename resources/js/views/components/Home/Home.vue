<template>
    <div>
        <main class="grid grid-cols-4 gap-4 bg-cover" style="background-image: url('storage/images/main-page.jpg')">
            <div class="col-span-1"></div>
            <div class="col-span-2 flex justify-center ">
                <SearchForm class="my-24" @searchClubs="search"/>
            </div>
            <div class="col-span-1"></div>
        </main>
    </div>
</template>

<script>
import SearchForm from './SearchForm'

export default {
    name: 'Home',
    components: {
        SearchForm
    },
    methods: {
        search(request) {
            sessionStorage.setItem('search', JSON.stringify(request))
            this.$router.push({ name:'Clubs', params: {sport: request.sport_type} })
        }
    }
}
</script>
