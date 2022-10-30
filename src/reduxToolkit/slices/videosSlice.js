import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    videos: [],
    currentRequest: null,
}


const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        setVideo(state,action) {
            state.videos = action.payload
        },
        setCurrentRequest(state,action){
          state.currentRequest = action.payload
        },
        removeVideoInfo(state){
            state.videos = []
            state.currentRequest = null
        }

    },
})
export const {setVideo,setCurrentRequest,removeVideoInfo} = videosSlice.actions

export default  videosSlice.reducer