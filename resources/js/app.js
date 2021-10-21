require('./bootstrap');

import Vue from 'vue'
import App from './views/app.vue'

import VueRouter from 'vue-router';
import routes from './routes';

import store from './store'     //vuex
import { mapActions, mapGetters } from 'vuex'

import globalGetters from './globalGetters';

Vue.use(VueRouter).use(globalGetters)

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
