import firebase from 'firebase/app'
import 'firebase/database'

// firebase init goes here
const config = {
    apiKey: "AIzaSyDtgzCsGKZaot5JzKaYMdB9Uu7g4hNbkB4",
    authDomain: "have-dirt-need-dirt.firebaseapp.com",
    databaseURL: "https://have-dirt-need-dirt.firebaseio.com",
    projectId: "have-dirt-need-dirt",
    storageBucket: "have-dirt-need-dirt.appspot.com",
    messagingSenderId: "83722743635"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.database()

export {
    db,
}