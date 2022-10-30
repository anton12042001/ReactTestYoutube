import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc,getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const singInAPI = (email,password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
}