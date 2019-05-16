const { dataApi } = require('../../services/dataApi')

export default {
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, payload) {
			state.user = payload
		}
  },
  actions: {
    async logIn ( { commit }, payload) {
      await dataApi.logIn(payload).then(user => {        
        commit('SET_USER', user.user)
      })
    },
    async logOut ( { commit }) {
      await dataApi.logOut().then(() => {
        commit('SET_USER', null)
      })
    }
  },
  getters: {
    user: state => state.user
  }
}