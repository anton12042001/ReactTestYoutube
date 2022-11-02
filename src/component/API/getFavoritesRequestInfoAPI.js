import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import {removeFavoriteQueries, setFavoriteQueries} from "../../reduxToolkit/slices/favoriteQueriesSlices";

export const getRequestInfo = (dispatch, favoriteQueriesID, setLoading, favoriteQueries) => {

    dispatch(removeFavoriteQueries())
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

        favoriteQueriesID.map(async (r) => {
            debugger
            const docRef = doc(db, "request", `${r}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const middleElement = {
                    saveRequest: docSnap.data().saveRequest,
                    numberRequest: docSnap.data().numberRequest,
                    sorting: docSnap.data().sorting,
                    nameRequest: docSnap.data().nameRequest,
                    id: docSnap.id
                }
                dispatch(setFavoriteQueries(middleElement))
            }
        })


}