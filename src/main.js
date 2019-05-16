import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
const {
  dataApi
} = require('./services/dataApi')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    // check user logged
    dataApi.onAuthStateChanged().then(user => {
      if (user) {
        store.commit('SET_USER', user)
        store.commit('SET_FIRST_LOADING', false)
        router.push('/')
      }
    })
  },
  render: h => h(App),
}).$mount('#app')