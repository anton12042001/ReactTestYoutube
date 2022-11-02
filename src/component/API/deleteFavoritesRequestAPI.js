import {doc, deleteDoc, getFirestore, getDoc, updateDoc} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";

export const deleteFoviritesRequestAPI = async (id,idUser) => {
    const arrayRequestId = []
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    const docRef = doc(db, "users", `${idUser}`);
    const docSnap = await getDoc(docRef);
    const userRequestRef = doc(db, "users", `${idUser}`);

    await deleteDoc(doc(db, "request", `${id}`));
    if (docSnap.exists()) {
        docSnap.data().saveRequest.map(r => {
            if(r !== id){
                arrayRequestId.push(r)
            }
        })
        await updateDoc(userRequestRef, {
            saveRequest: arrayRequestId
        });

    }
}