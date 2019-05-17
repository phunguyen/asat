/* eslint-disable no-console */
const { dataApi } = require('../../services/dataApi')

export default {
  state: {
    user: null,
    userInfo: null,
  },
  mutations: {
    SET_USER (state, payload) {
			state.user = payload
		},
    SET_USER_INFO (state, payload) {
			state.userInfo = payload
		}
  },
  actions: {
    async logIn ( { commit, dispatch }, payload) {
      await dataApi.logIn(payload).then(user => {        
        commit('SET_USER', user)
        dispatch('getUserInfo', user)
      })
    },
    async logOut ( { commit }) {
      await dataApi.logOut().then(() => {
        commit('SET_USER', null)
      })
    },
    async signUp ( { commit, dispatch }, payload) {
      await dataApi.signUp(payload).then(user => {
        commit('SET_USER', user)
        
        //
        let newPayload = {
          ...payload,
          uid: user.uid
        }
        dispatch('addUserInfo', newPayload)
      })
    },
    async addUserInfo ( { dispatch }, payload) {
      await dataApi.addUserInfo(payload).then(() => {
        dispatch('getUserInfo', payload)
      })
    },
    async getUserInfo ( { commit }, payload) {
      await dataApi.getUserInfo(payload).then(info => {
        commit('SET_USER_INFO', info)
      })
    }
  },
  getters: {
    user: state => state.user,
    userInfo: state => state.userInfo
  }
}