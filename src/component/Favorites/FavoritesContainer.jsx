import React, {useEffect, useState} from 'react';
import Favorites from "./Favorites";
import {useDispatch, useSelector} from "react-redux";
import {getRequestInfo} from "../API/getFavoritesRequestInfoAPI";
import cl from './Favorites.module.css'
import {editExistingRequestAPI} from "../API/editExistingRequestAPI";

const FavoritesContainer = () => {
    const {favoriteQueriesID} = useSelector(state => state.favoriteQueriesID)
    const {favoriteQueries} = useSelector(state => state.favoriteQueries)
    const [showPopapChange, setShowPopapChange] = useState(false)

    const dispatch = useDispatch()


    useEffect(() => {
        if (favoriteQueries.length === 0) {
            getRequestInfo(dispatch, favoriteQueriesID)
        }
    }, [])

    //todo сделать диспатч в стейт актуального имени
    const editRequest = (idItems,request) => {
        editExistingRequestAPI(idItems,request)
            .then(() => {
                setShowPopapChange(false)
            })
    }



    return (
        <div className={cl.favoritesWrapper}>
            <div className={cl.favoritesContainer}>
                <div className={cl.favoritesTitle}>Избранное</div>
                <Favorites editRequest={editRequest} showPopapChange={showPopapChange} setShowPopapChange={setShowPopapChange} favoriteQueries={favoriteQueries} />
            </div>

        </div>
    );
};

export default FavoritesContainer;