// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDC9UQz3FVRCzTsJXCJPsLsCD6FzuncKmo",
    authDomain: "toteco-426117.firebaseapp.com",
    projectId: "toteco-426117",
    storageBucket: "toteco-426117.appspot.com",
    messagingSenderId: "184189703325",
    appId: "1:184189703325:web:e7ea9eb232b683b56d3074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)