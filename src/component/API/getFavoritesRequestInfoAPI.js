import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import {removeFavoriteQueries, setFavoriteQueries} from "../../reduxToolkit/slices/favoriteQueriesSlices";

export const getRequestInfo =  (dispatch,favoriteQueriesID) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    dispatch(removeFavoriteQueries())
    {favoriteQueriesID.map(async (r) => {
        const docRef = doc(db, "request", `${r}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const middleElement = {
                saveRequest:docSnap.data().saveRequest,
                numberRequest:docSnap.data().numberRequest,
                sorting:docSnap.data().sorting,
                id:docSnap.id
            }
            console.log(middleElement.sorting)
            dispatch(setFavoriteQueries(middleElement))
        }
    })}
}