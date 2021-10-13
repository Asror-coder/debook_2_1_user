import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'
import clubs from './modules/clubs'
import bookings from './modules/bookings'
import clubSearch from './modules/clubSearch'
import translation from './modules/translation'

//Load Vuex
Vue.use(Vuex)

//Create store
export default new Vuex.Store({
    modules: {
        user,
        bookings,
        clubs,
        clubSearch,
        translation
    }
})
