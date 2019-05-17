const fb = require('./firebaseConfig')

const firebaseApi = {
  logIn(payload) {
    return new Promise((resolve, reject) => {
      fb.auth.signInWithEmailAndPassword(payload.email, payload.password).then(user => {
        resolve(user.user)
      }).catch(err => {
        reject(err)
      })
    })
  },
  signUp(payload) {
    return new Promise((resolve, reject) => {
      fb.auth.createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
        resolve(user.user)
      }).catch(err => {
        reject(err)
      })
    })
  },
  addUserInfo(payload) {
    return new Promise((resolve, reject) => {
      fb.usersCollection.doc(payload.uid).set({
        name: payload.name,
        phone: payload.phone,
        birthdate: payload.date
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getUserInfo(payload) {
    return new Promise((resolve, reject) => {
      fb.usersCollection.doc(payload.uid).get().then(res => {
        resolve(res.data())
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