import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getDatabase } from "firebase/database";



export const firebaseConfig = {
    apiKey: "AIzaSyDSKgvKHvvmhQOGW9O-Ci9s-gKsr1cr42M",
    authDomain: "reacttes-aa123.firebaseapp.com",
    projectId: "reacttes-aa123",
    storageBucket: "reacttes-aa123.appspot.com",
    messagingSenderId: "123520722225",
    appId: "1:123520722225:web:a88adb478cfda3680bbc10",
    measurementId: "G-TESZKPWBZG"
}


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);