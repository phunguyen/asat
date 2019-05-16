import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

const store = new Vuex.Store({	
	modules: {
		user,
		shared
	}
})

export default store