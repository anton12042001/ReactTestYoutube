import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import {setFavoriteQueriesID} from "../../reduxToolkit/slices/favoriteQueriesIDSlices";

export const getFavoritesRequestIdAPI = async (id, dispatch) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, "users", `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        dispatch(setFavoriteQueriesID(docSnap.data().saveRequest))
    }
}