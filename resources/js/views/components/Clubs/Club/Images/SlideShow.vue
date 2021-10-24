<template>
    <div v-if="images">
        <div class="slideshow-container">

            <div :key="image.id" v-for="(image, index) in images">
                <div class="fade" :class="slideIndex == index ? 'block' : 'hidden'">
                    <img :src="image.url" style="width:100%" class="object-cover h-96">
                </div>
            </div>

            <a class="prev" @click="plusSlides(-1)">&#10094;</a>
            <a class="next" @click="plusSlides(1)">&#10095;</a>

        </div>
        <div class="flex justify-center mt-2">
            <span :key="image.id" v-for="(image, index) in images" style="text-align:center">
                <span class="dot" :class="slideIndex == index ? 'active' : ''"></span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SlideShow',
    props: {
        images: null,
        index: null
    },
    data() {
        return {
            slideIndex: this.index
        }
    },
    methods: {
        plusSlides(n) {
            this.slideIndex += n
            if (this.slideIndex > this.images.length-1) this.slideIndex = 0
            if (this.slideIndex < 0) this.slideIndex = this.images.length-1
        }
    },
    watch: {
        index: {
            immediate: true,
            handler (newVal, oldVal) {
                this.slideIndex = newVal
            }
        },
    }
}
</script>

<style scoped>
* {box-sizing: border-box}
img {
    vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
    /* background-color: #717171; */
    max-width: 100%;
    position: relative;
    margin: auto;
}

/* Next & previous buttons */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

/* Position the "next button" to the right */
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}

/* The dots/bullets/indicators */
.dot {
    cursor: pointer;
    height: 12px;
    width: 12px;
    margin: 0 3px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dot:hover {
    background-color: #717171;
}

/* Fading animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
    .prev, .next,.text {font-size: 11px}
}
</style>
