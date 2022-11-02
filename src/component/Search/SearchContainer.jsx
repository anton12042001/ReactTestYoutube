import React, {useEffect} from 'react';
import Search from "./Search";
import cl from "./Search.module.css";
import {useDispatch, useSelector} from "react-redux";
import {removeVideoInfo, setCurrentRequest} from "../../reduxToolkit/slices/videosSlice";
import {useNavigate} from "react-router-dom";
import {utilsVideosRequest} from "../utils/utilsVideosRequest/utilsVideosRequest";
import {getFavoritesRequestIdAPI} from "../API/getFavoritesRequestIdAPI";

const SearchContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {videos, currentRequest} = useSelector(state => state.videos)
    const {id} = useSelector(state => state.user)
    const {favoriteQueries} = useSelector(state => state.favoriteQueries)


    useEffect(() => {
        dispatch(removeVideoInfo())
        getFavoritesRequestIdAPI(id, dispatch)
    }, [])


    const youtubeRequest = async (termFromSearchBar) => {
        await utilsVideosRequest(termFromSearchBar, dispatch, videos)
        navigate('/search/videos')
        dispatch(setCurrentRequest(termFromSearchBar))
    }

    return (
        <div className={cl.searchContainer}>
            <Search youtubeRequest={youtubeRequest}/>
        </div>
    );
};

export default SearchContainer;