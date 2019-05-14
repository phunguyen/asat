export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
			state.user = payload
		}
  },
  actions: {
    logIn ( { commit }, payload) {
      const loginUser = {
        id: 1,
        payload: payload
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setUser', loginUser)
          resolve()
        }, 500)
      })
    },
  },
  getters: {
    user: state => state.user
  }
}