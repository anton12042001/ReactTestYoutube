import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favoriteQueries: []
}


const favoriteQueriesSlices = createSlice({
    name: 'queries',
    initialState,
    reducers: {
        setFavoriteQueries(state,action) {
            state.favoriteQueries.push(action.payload)
        },
        removeFavoriteQueries(state) {
            state.favoriteQueries = []
        }
    },
})
export const {setFavoriteQueries,removeFavoriteQueries} = favoriteQueriesSlices.actions

export default  favoriteQueriesSlices.reducer