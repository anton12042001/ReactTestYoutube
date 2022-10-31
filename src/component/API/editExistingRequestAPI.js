import {doc, getFirestore, updateDoc} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";


export const editExistingRequestAPI = async (idItems,request,sliderValue,sorting) => {

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const existingRequestRef = doc(db, `request`, `${idItems}`);

    await updateDoc(existingRequestRef, {
        saveRequest: request,
        numberRequest:sliderValue,
        sorting:sorting
    });
}