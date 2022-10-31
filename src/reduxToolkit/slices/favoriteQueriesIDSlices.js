import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favoriteQueriesID: []
}


const favoriteQueriesIDSlices = createSlice({
    name: 'queriesID',
    initialState,
    reducers: {
        setFavoriteQueriesID(state,action) {
            state.favoriteQueriesID = action.payload
        },
        removeFavoriteQueriesID(state) {
            state.favoriteQueriesID = []
        }
    },
})
export const {setFavoriteQueriesID,removeFavoriteQueriesID} = favoriteQueriesIDSlices.actions

export default  favoriteQueriesIDSlices.reducer