import {doc, deleteDoc, getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";

export const deleteFoviritesRequestAPI = async (id) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    await deleteDoc(doc(db, "request", `${id}`));
}