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
import Loader from "../UI/Loader/Loader";

const FavoritesContainer = () => {
    const {favoriteQueriesID} = useSelector(state => state.favoriteQueriesID)
    const {favoriteQueries} = useSelector(state => state.favoriteQueries)
    const [showPopapChange, setShowPopapChange] = useState(false)
    const {videos} = useSelector(state => state.videos)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const {id} = useSelector(state => state.user)
    const [countRequest, setCointRequest] = useState(0)
    const idUser = id

    useEffect(() => {
        if (favoriteQueries.length > 0) {
            dispatch(removeFavoriteQueries())
            setCointRequest(favoriteQueries.length)
        }
        if(countRequest === 0){
            getRequestInfo(dispatch, favoriteQueriesID, setLoading, favoriteQueries)
        }
    }, [favoriteQueriesID,countRequest])


    const youtubeSearchOrder = (id) => {
        utilsFavoriteRequest(id, dispatch, videos, navigate)
    }

    const deleteFavoritesRequest = (id) => {
        deleteFoviritesRequestAPI(id,idUser)
            .then(() => {
                const deleteElement = [...favoriteQueries]
                dispatch(removeFavoriteQueries())
                deleteElement.map(e => {
                    if (e.id !== id) {
                        dispatch(setFavoriteQueries(e))
                    }
                })
            })
    }


    const editRequest = (idItems, request, sliderValue, valueSelect, nameRequest) => {
        editExistingRequestAPI(idItems, request, sliderValue, valueSelect, nameRequest)
            .then(() => {
                setLoading(true)
                setShowPopapChange(false)
                dispatch(removeFavoriteQueries())
                favoriteQueries.map(i => {
                    const middleElement = {
                        id: i.id,
                        numberRequest: i.numberRequest,
                        saveRequest: i.saveRequest,
                        sorting: i.sorting,
                        nameRequest: i.nameRequest
                    }
                    if (i.id === idItems) {
                        middleElement.saveRequest = request
                        middleElement.nameRequest = nameRequest
                        middleElement.sorting = valueSelect
                        dispatch(setFavoriteQueries(middleElement))
                    } else {
                        dispatch(setFavoriteQueries(middleElement))
                    }
                })
                setLoading(false)
            })
    }


    if (!favoriteQueries) {
        return <div className={cl.containerLoader}><Loader/></div>
    }
    if (loading) {
        return <div className={cl.containerLoader}><Loader/></div>
    }
    return (
        <div className={cl.favoritesWrapper}>
            <div className={cl.favoritesContainer}>
                <div className={cl.favoritesTitle}>??????????????????</div>
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