import axios from 'axios'

const state = {
    user: null,
    loginError: null,
}

const getters = {
    currentUser: (state) => state.user,
    loginError: (state) => state.loginError,
}

const actions = {
    async loginUser({ commit }, user) {
        if (state.loginError) commit('destroyLoginError');

        await axios.post('/api/login', user).then((response)=>{
            commit('setUser', response.data)
        }).catch((error) => {
            commit('setLoginError', error);
        })
    },
    async logoutUser({commit}) {
        commit('destroyUser');
    }
}

const mutations = {
    setUser(state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },
    destroyUser () {
        localStorage.removeItem('user')
        location.reload()
    },

    setLoginError: (state, error) => (state.loginError = error),

    destroyLoginError: (state) => (state.loginError = null)
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
