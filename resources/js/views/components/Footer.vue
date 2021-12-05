<template>
    <footer v-if="translation">

        <div class="h-56 bg-cover bg-right-top hidden md:grid grid-cols-5 pt-10"
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
        </div>

        <!-- Mobile version -->
        <div class="bg-cover md:hidden px-3 py-3"
            style="background-image: url('https://debook.s3.eu-west-1.amazonaws.com/site_images/footer-img.jpeg');
                   background-position: 75% 25%;">

            <div class=" grid grid-cols-2 mb-6 gap-3">
                 <div class="flex flex-col">
                    <div class="text-dbGray text-xl">{{ translation.footer.who }}</div>
                    <router-link to='#' class="text-white text-lg">{{ translation.footer.about_us }}</router-link>
                    <router-link to='#' class="text-white text-lg">{{ translation.footer.for_clubs }}</router-link>
                    <router-link to='#' class="text-white text-lg">{{ translation.footer.cookie }}</router-link>
                </div>

                <div class="flex flex-col" >
                    <div class="text-dbGray text-xl">{{ translation.footer.discover }}</div>
                    <router-link to='#' class="text-white text-lg">{{ translation.footer.blog }}</router-link>
                    <router-link to='#' class="text-white text-lg">{{ translation.footer.tips }}</router-link>
                    <router-link to='#' class="text-white text-lg">{{ translation.footer.navigation }}</router-link>
                </div>
            </div>

            <div class="text-white flex justify-center">
                <div>
                    <div class="text-xl">{{ translation.footer.contacts }}:</div>
                    <div class="text-lg">asror@debook.nl</div>
                    <p class="mt-4 text-dbGray">deBook &copy; 2021</p>
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>
