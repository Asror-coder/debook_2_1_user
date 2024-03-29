import axios from 'axios'

const state = {
    clubs: null,
    request: []
}

const getters = {
    clubs: (state) => state.clubs,
    request: (state) => state.request
}

const actions = {
    async getClubs({ commit }, request) {
        commit('destroyClubs')
        commit('destroyRequest')

        await axios.get(`/api/clubs/search`,{params: request}).then((response)=> {
            commit('setRequest', request)
            if(response.data.data.length > 0)
                commit('setClubs', response.data)
        }).catch((error) => {
            console.log(error.response.data.message);
        })
    },
    async changePage({ commit }, url) {
        commit('destroyClubs')

        await axios.get(url,{params: state.request}).then((response)=> {
            if(response.data.data.length > 0)
                commit('setClubs', response.data)
        }).catch((error) => {
            console.log(error.response.data.message);
        })
    }
}

const mutations = {
    setClubs: (state, clubs) => state.clubs = clubs,
    setRequest: (state, request) => state.request = request,

    destroyClubs: (state) => state.clubs = null,
    destroyRequest: (state) => state.request = []
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
