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
            localStorage.setItem('user', JSON.stringify(response.data.token))
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`

            commit('setUser', response.data.user)
        }).catch((error) => {
            commit('setLoginError', error);
        })
    },
    async getUser({commit}, token) {
        localStorage.setItem('user', JSON.stringify(token))
        axios.defaults.headers.common.Authorization = `Bearer ${token}`

        await axios.get('/api/authenticated/user').then((response) => {
            commit('setUser', response.data)
        });
    },
    async logoutUser({commit}) {
        await axios.post('/api/logout').then((response)=>{
            commit('destroyUser');
        })
    }
}

const mutations = {
    setUser(state, userData) {
        state.user = userData
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
