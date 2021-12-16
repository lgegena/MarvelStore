
import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDK1YGAO4MmI2e1x5vq8pu52uFZYs9O0Bk",
    authDomain: "marvelstore-lgegena.firebaseapp.com",
    projectId: "marvelstore-lgegena",
    storageBucket: "marvelstore-lgegena.appspot.com",
    messagingSenderId: "1068967633800",
    appId: "1:1068967633800:web:5fe08598e03316f3f7503d",
    measurementId: "G-Z1J6WQ9SB3"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}

export function getToday(){
    return firebase.firestore.Timestamp.fromDate(new Date())
}

export function getDocId(){
    return firebase.firestore.FieldPath.documentId()
}