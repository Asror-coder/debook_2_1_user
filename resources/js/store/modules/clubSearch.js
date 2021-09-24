import axios from 'axios'

const state = {
    searchedClubs: []
}

const getters = {
    searchedClubs: state => state.searchedClubs
}

const actions = {
    async searchClubName({ commit }, name) {
        if (name) {
            await axios.get(`/api/clubs/search/like/${name}`).then((response)=> {
                if(response.data.length > 0)
                    commit('setClubs', response.data)
            }).catch((error) => {
                console.log(error.response.data.message);
            })
        } else commit('destroyClubs')
    }
}

const mutations = {
    setClubs: (state, response) => state.searchedClubs = response,
    destroyClubs: (state) => state.searchedClubs = []
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
