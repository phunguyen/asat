const fb = require('./firebaseConfig')

const firebaseApi = {
  logIn(payload) {
    return new Promise((resolve, reject) => {
      fb.auth.signInWithEmailAndPassword(payload.email, payload.password).then(user => {
        resolve(user)
      }).catch(err => {
        reject(err)
      })
    })
  },
  signUp(payload) {
    return new Promise((resolve, reject) => {
      fb.auth.createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
        resolve(user)
      }).catch(err => {
        reject(err)
      })
    })
  },
  createUser(payload) {
    return new Promise((resolve, reject) => {
      fb.usersCollection.doc(payload.uid).set({
        name: payload.name,
        title: payload.title
      }).then(() => {
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  logOut() {
    return new Promise((resolve, reject) => {
      fb.auth.signOut().then(() => {
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  onAuthStateChanged() {
    return new Promise(resolve => {
      fb.auth.onAuthStateChanged(user => {
        resolve(user)
      });
    })
  }
}

export {
  firebaseApi
}