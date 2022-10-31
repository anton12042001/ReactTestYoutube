import {removeVideoInfo, setVideo} from "../../../reduxToolkit/slices/videosSlice";
import youtube from "../../API/youtubeAPI";

export const utilsVideosRequest = async (termFromSearchBar,dispatch,videos) => {
    (videos.length !== 0) && dispatch(removeVideoInfo())
    const response = await youtube.get('/search',{
        params:{
            q:termFromSearchBar,
            order:"relevance",
            maxResults: 12,
        }
    })
    dispatch(setVideo(response.data.items))
}