import axios from 'axios'

const state = {
    translation: null
}

const getters = {
    translation: (state) => state.translation
}

const actions = {
    async getTranslation({ commit }, newLang) {
        commit('destroyTranslation')

        await axios.get(`/api/lang/set/${newLang}`).then((response)=> {
            commit('setTranslation', response.data)
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

const mutations = {
    setTranslation: (state, translation) => state.translation = translation,
    destroyTranslation: (state) => state.translation = null
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
