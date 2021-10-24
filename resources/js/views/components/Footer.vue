<template>
    <footer class="h-56 bg-cover bg-right-top grid grid-cols-5 pt-10" style="background-image: url('https://debook.s3.eu-west-1.amazonaws.com/site_images/footer-img.jpeg')">
        <div class="col-start-2 ml-20 text-white">
            <div class="text-xl">Contacts:</div>
            <div class="text-lg">asror@debook.nl</div>
            <p class="mt-4">deBook &copy; 2021</p>
        </div>

        <div class="ml-20">
            <div class="text-white text-lg">Who are we?</div>
            <ul>
                <li>
                    <router-link to='#' class="footer-btn">About us</router-link>
                </li>
                <li>
                    <router-link to='#' class="footer-btn">For clubs</router-link>
                </li>
                <li>
                    <router-link to='#' class="footer-btn">Cookie settings</router-link>
                </li>
            </ul>
        </div>

        <div class="ml-20" >
            <div class="text-white text-lg">Discover</div>
            <ul >
                <li>
                    <router-link to='#' class="footer-btn">Blog</router-link>
                </li>
                <li>
                    <router-link to='#' class="footer-btn">Sport tips</router-link>
                </li>
                <li>
                    <router-link to='#' class="footer-btn">Website navigation</router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>
