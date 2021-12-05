require('./bootstrap');

import Vue from 'vue'
import App from './views/app.vue'

import VueRouter from 'vue-router';
import routes from './routes';

import store from './store'     //vuex
import { mapActions } from 'vuex'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueCarousel from 'vue-carousel';

// library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

import globalGetters from './globalGetters';

Vue.use(VueRouter).use(globalGetters).use(VueCarousel);

const app = new Vue({
    el: '#app',
    components: { App },
    router: new VueRouter(routes),
    store,
    methods: {
        ...mapActions('user',['logoutUser','getUser']),
    },
    created () {
        const userInfo = localStorage.getItem('user')

        if (userInfo) {
          const userData = JSON.parse(userInfo)
          this.getUser(userData)
        }

        axios.interceptors.response.use(
          response => response,
          error => {
            if (error.response.status === 401) {
                this.logoutUser()
            }
            return Promise.reject(error)
          }
        )
    },
});
