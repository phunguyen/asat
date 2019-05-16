import store from '../store'

export default (to, from, next) => {
	// const currentUser = firebase.auth().currentUser
	if (store.getters.user) {
		next()
	} else {
		next('/login')
	}
}