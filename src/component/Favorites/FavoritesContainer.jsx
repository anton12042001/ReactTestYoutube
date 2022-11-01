import React, {useEffect, useState} from 'react';
import Favorites from "./Favorites";
import {useDispatch, useSelector} from "react-redux";
import {getRequestInfo} from "../API/getFavoritesRequestInfoAPI";
import cl from './Favorites.module.css'
import {editExistingRequestAPI} from "../API/editExistingRequestAPI";
import {removeFavoriteQueries, setFavoriteQueries} from "../../reduxToolkit/slices/favoriteQueriesSlices";
import {utilsFavoriteRequest} from "../utils/utilsVideosRequest/utilsFavoriteRequest";
import {useNavigate} from "react-router-dom";
import {deleteFoviritesRequestAPI} from "../API/deleteFavoritesRequestAPI";
import {favirutesUtuls} from "./FavoritesUtils";
import Loader from "../UI/Loader/Loader";

const FavoritesContainer = () => {
    const {favoriteQueriesID} = useSelector(state => state.favoriteQueriesID)
    const {favoriteQueries} = useSelector(state => state.favoriteQueries)
    const [showPopapChange, setShowPopapChange] = useState(false)
    const {videos} = useSelector(state => state.videos)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        getRequestInfo(dispatch, favoriteQueriesID)


    }, [favoriteQueriesID])


    const youtubeSearchOrder = (id) => {
        utilsFavoriteRequest(id, dispatch, videos, navigate)
    }

    const deleteFavoritesRequest = (id) => {

        deleteFoviritesRequestAPI(id)
            .then(() => {
                const deleteElement = [...favoriteQueries]
                dispatch(removeFavoriteQueries())
                deleteElement.map(e => {
                    if(e.id !== id) {
                        dispatch(setFavoriteQueries(e))
                    }
                })
            })
    }


    const editRequest = (idItems, request, sliderValue, sortingValue) => {
        editExistingRequestAPI(idItems, request, sliderValue, sortingValue)
            .then(() => {
                dispatch(removeFavoriteQueries())
                favoriteQueries.map(i => {
                    const middleElement = {
                        id: i.id,
                        numberRequest: i.numberRequest,
                        saveRequest: i.saveRequest,
                        sorting:i.sorting
                    }
                    if (i.id === idItems) {
                        middleElement.saveRequest = request
                        dispatch(setFavoriteQueries(middleElement))
                    } else {
                        dispatch(setFavoriteQueries(middleElement))
                    }
                })
                setShowPopapChange(false)
            })
    }


    if(favoriteQueries.length === 0) {
        return <Loader/>
    }
    return (
        <div className={cl.favoritesWrapper}>
            <div className={cl.favoritesContainer}>
                <div className={cl.favoritesTitle}>Избранное</div>
                <Favorites
                    deleteFavoritesRequest={deleteFavoritesRequest}
                    editRequest={editRequest}
                    showPopapChange={showPopapChange}
                    setShowPopapChange={setShowPopapChange}
                    favoriteQueries={favoriteQueries}
                    youtubeSearchOrder={youtubeSearchOrder}
                />
            </div>

        </div>
    );
};

export default FavoritesContainer;