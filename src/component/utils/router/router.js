import React from "react";
import SearchContainer from "../../Search/SearchContainer";
import FavoritesContainer from "../../Favorites/FavoritesContainer";
import AuthorizationContainer from "../../Authorization/AuthorizationContainer";
import VideosContainer from "../../Videos/VideosContainer";

export const privateRoutes = [
    {path: '/search',element: <SearchContainer/> },
    {path: '/favorites',element: <FavoritesContainer/> },
    {path: '/search/videos',element: <VideosContainer/> },
]
export const publicRoutes = [
    {path: '/authorization',element: <AuthorizationContainer/> },

]