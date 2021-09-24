require('./bootstrap');

import Vue from 'vue'
import App from './views/app.vue'

import VueRouter from 'vue-router';
import routes from './routes';

import store from './store'     //vuex

// import vClickOutside from 'v-click-outside'

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    components: { App },
    router: new VueRouter(routes),
    store,
    created () {
        const userInfo = localStorage.getItem('user')
        if (userInfo) {
          const userData = JSON.parse(userInfo)
          this.$store.commit('user/setUser', userData)
        }
        axios.interceptors.response.use(
          response => response,
          error => {
            if (error.response.status === 401) {
              this.$store.dispatch('logout')
            }
            return Promise.reject(error)
          }
        )
      },
});
