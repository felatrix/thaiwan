import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAddsvrFt9pMmAqSZS0MUw6emmVOI_ZWNU",
  authDomain: "thaiwan-db.firebaseapp.com",
  databaseURL: "https://thaiwan-db.firebaseio.com",
  projectId: "thaiwan-db",
  storageBucket: "thaiwan-db.appspot.com",
  messagingSenderId: "315877142498",
  appId: "1:315877142498:web:7cd6c0f80ba18ad83453bb",
  measurementId: "G-GBNGXJX8JK"
  };

firebase.initializeApp(firebaseConfig)

export const cekUserAuth = async (isUserAuth , additionalData) =>{
  if(!isUserAuth) return
  var refDoc =  firestore.doc(`user/${isUserAuth.uid}`)
  var getSnap = await refDoc.get()
  
  console.log('snapshot',getSnap)
  if(!getSnap.exists){
    const {email,displayName} = isUserAuth
    const createdAt = new Date();

    try {
      await refDoc.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log(err.message)
    }
  }
  return refDoc
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = ()=> auth.signInWithPopup(provider).then(res=>{
})

export default firebase