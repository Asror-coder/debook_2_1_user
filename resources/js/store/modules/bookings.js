import axios from 'axios'

const state = {
    activeBookings: [],
    activeBookingsPage: null,
    notActiveBookings: [],
    notActiveBookingsPage: null
}

const getters = {
    activeBookings: (state) => state.activeBookings,
    activeBookingsPage: (state) => state.activeBookingsPage,
    notActiveBookings: (state) => state.notActiveBookings,
    notActiveBookingsPage: (state) => state.notActiveBookingsPage
}

const actions = {
    async fetchActiveBookings({ commit }, userId) {
        commit('destroyActiveBookings')
        commit('destroyActiveBookingsPage')

        await axios.get(`/api/booking/active/${userId}`).then((response)=> {
            if(response.data[0]) {
                commit('setActiveBookings', response.data[0])
                commit('setActiveBookingsPage', response.data[1])
            }
        })
    },
    async changeActiveBookings({ commit }, url) {
        await axios.get(url).then((response)=> {
            if(response.data[0].length > 0) {
                commit('setActiveBookings', response.data[0])
                commit('setActiveBookingsPage', response.data[1])
            }
        })
    },
    async fetchNotActiveBookings({ commit }, userId) {
        commit('destroyNotActiveBookings')
        commit('destroyNotActiveBookingsPage')

        await axios.get(`/api/booking/notactive/${userId}`).then((response)=> {
            if(response.data[0]) {
                commit('setNotActiveBookings', response.data[0])
                commit('setNotActiveBookingsPage', response.data[1])
            }
        })
    },
    async changeNotActiveBookings({ commit }, url) {
        await axios.get(url).then((response)=> {
            if(response.data[0].length > 0) {
                commit('setNotActiveBookings', response.data[0])
                commit('setNotActiveBookingsPage', response.data[1])
            }
        })
    },
    async addBooking({ commit }, request) {
        await axios.post(`/api/booking/new`,request).then((response)=> {
            console.log(response.data);     //remove
            localStorage.removeItem('newBooking')
            // if(state.activeBookings) commit('newActiveBooking', response.data)
        })
    },
}

const mutations = {
    setActiveBookings: (state, bookings) => state.activeBookings = bookings,
    destroyActiveBookings: (state) => state.activeBookings = [],

    setActiveBookingsPage: (state, pageInfo) => state.activeBookingsPage = pageInfo,
    destroyActiveBookingsPage: (state) => state.activeBookingsPage = null,

    newActiveBooking: (state, booking) => state.activeBookings.unshift(booking),

    setNotActiveBookings: (state, bookings) => state.notActiveBookings = bookings,
    destroyNotActiveBookings: (state) => state.notActiveBookings = [],

    setNotActiveBookingsPage: (state, pageInfo) => state.notActiveBookingsPage = pageInfo,
    destroyNotActiveBookingsPage: (state) => state.notActiveBookings = null,
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
