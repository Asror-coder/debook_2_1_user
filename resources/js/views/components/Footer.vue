<template>
    <footer class="h-56 bg-cover bg-right-top grid grid-cols-5 pt-10" v-if="translation"
        style="background-image: url('https://debook.s3.eu-west-1.amazonaws.com/site_images/footer-img.jpeg')">
        <div class="col-start-2 ml-20 text-white">
            <div class="text-xl">{{ translation.footer.contacts }}:</div>
            <div class="text-lg">asror@debook.nl</div>
            <p class="mt-4">deBook &copy; 2021</p>
        </div>

        <div class="ml-20">
            <div class="text-white text-lg">{{ translation.footer.who }}</div>
            <ul>
                <li>
                    <router-link to='#' class="footer-btn">{{ translation.footer.about_us }}</router-link>
                </li>
                <li>
                    <router-link to='#' class="footer-btn">{{ translation.footer.for_clubs }}</router-link>
                </li>
                <li>
                    <router-link to='#' class="footer-btn">{{ translation.footer.cookie }}</router-link>
                </li>
            </ul>
        </div>

        <div class="ml-20" >
            <div class="text-white text-lg">{{ translation.footer.discover }}</div>
            <ul >
                <li>
                    <router-link to='#' class="footer-btn">{{ translation.footer.blog }}</router-link>
                </li>
                <li>
                    <router-link to='#' class="footer-btn">{{ translation.footer.tips }}</router-link>
                </li>
                <li>
                    <router-link to='#' class="footer-btn">{{ translation.footer.navigation }}</router-link>
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
