import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore, serverTimestamp } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyANyg0bYCCrB71FtsdFm1sQoK5VgdSFEO8",
    authDomain: "linked-in-d4457.firebaseapp.com",
    databaseURL: "https://linked-in-d4457-default-rtdb.firebaseio.com",
    projectId: "linked-in-d4457",
    storageBucket: "linked-in-d4457.appspot.com",
    messagingSenderId: "869775795347",
    appId: "1:869775795347:web:edb5e3592efa304edcd966"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()
const storage = getStorage()
const provider = new GoogleAuthProvider()
const timeStamp = serverTimestamp()

export {
    app,
    db,
    auth,
    storage,
    timeStamp,
    provider
}
