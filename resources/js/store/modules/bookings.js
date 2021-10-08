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
        await axios.post(`/api/booking/newbooking`,request).then((response)=> {
            if(state.activeBookings) commit('newActiveBooking', response.data)
        })
    },
}

const mutations = {
    setActiveBookings: (state, bookings) => state.activeBookings = bookings,
    setActiveBookingsPage: (state, pageInfo) => state.ActiveBookingsPage = pageInfo,

    newActiveBooking: (state, booking) => state.activeBookings.unshift(booking),

    setNotActiveBookings: (state, bookings) => state.notActiveBookings = bookings,
    setNotActiveBookingsPage: (state, pageInfo) => state.notActiveBookingsPage = pageInfo,
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
