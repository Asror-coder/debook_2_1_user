import axios from 'axios'

const state = {
    activeBookings: [],
    notActiveBookings: [],
}

const getters = {
    activeBookings: (state) => state.activeBookings,
    notActiveBookings: (state) => state.notActiveBookings,
}

const actions = {
    async fetchBookings({ commit }, userId) {
        await axios.get(`/api/booking/active/${userId}`).then((response)=> {
            if(response.data.length > 0)
                commit('setActiveBookings', response.data)
        }).catch((error) => {
            console.log(error.response.data.message);   //REMOVE
        })

        await axios.get(`/api/booking/notactive/${userId}`).then((response)=> {
            if(response.data.length > 0)
                commit('setNotActiveBookings', response.data)
        }).catch((error) => {
            console.log(error.response.data.message);   //REMOVE
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
    setNotActiveBookings: (state, bookings) => state.notActiveBookings = bookings,
    newActiveBooking: (state, booking) => state.activeBookings.unshift(booking),
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
