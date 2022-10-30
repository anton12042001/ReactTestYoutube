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
        removeFavoriteQueries(state) {
            state.favoriteQueriesID = []
        }
    },
})
export const {setFavoriteQueriesID,removeFavoriteQueries} = favoriteQueriesIDSlices.actions

export default  favoriteQueriesIDSlices.reducer