const shared = {
  state: {
    firstLoading: true,
    performingRequest: false
  },
  mutations: {
    SET_FIRST_LOADING(state, payload) {
      state.firstLoading = payload
    },
    SET_PERFORMING_REQUEST(state, payload) {
      state.performingRequest = payload
    }
  },
  actions: {
    setFirstLoading({ commit }, payload) {
      commit('SET_FIRST_LOADING', payload)
    },
    setPerformingRequest({ commit }, payload) {
      commit('SET_PERFORMING_REQUEST', payload)
    }
  },
  getters: {
    firstLoading: state => state.firstLoading,
    performingRequest: state => state.performingRequest,
  }
}

export default shared