import {doc, getDoc, getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../../firebase";
import {removeVideoInfo, setCurrentRequest, setVideo} from "../../../reduxToolkit/slices/videosSlice";
import youtube from "../../API/youtubeAPI";


export const utilsFavoriteRequest = async (id, dispatch, videos, navigate) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    const docRef = doc(db, "request", `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        (videos.length !== 0) && dispatch(removeVideoInfo())
        const response = await youtube.get('/search', {
            params: {
                q: docSnap.data().saveRequest,
                maxResults:docSnap.data().numberRequest ,
                order:(docSnap.data().sorting) ? docSnap.data().sorting : "relevance",
            }
        })
        dispatch(setCurrentRequest(docSnap.data().saveRequest))
        dispatch(setVideo(response.data.items))
        navigate('/search/videos')
    }
}
