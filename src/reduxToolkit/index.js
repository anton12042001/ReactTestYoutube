import {configureStore} from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import videosReducer from "./slices/videosSlice";
import favoriteQueriesIDReducer from './slices/favoriteQueriesIDSlices'
import favoriteQueriesReducer from './slices/favoriteQueriesSlices'


export const store = configureStore({
    reducer: {
        user: userReducer,
        videos: videosReducer,
        favoriteQueriesID:favoriteQueriesIDReducer,
        favoriteQueries:favoriteQueriesReducer
    },
})