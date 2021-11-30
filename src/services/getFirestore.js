import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}