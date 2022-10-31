import React from 'react';
import cl from "./Favorites.module.css";
import {useState} from "react";

const FavoritesList = ({saveRequest, id, getId, showPopapChange, youtubeSearchOrder,sorting,deleteFavoritesRequest}) => {
    const [mouseOverItem, setMouseOverItem] = useState(false)


    const changeStateMouse = () => {
        if (!showPopapChange) {
            setMouseOverItem(true)
        }
    }

    const getIdItems = (id) => {
        youtubeSearchOrder(id)
    }

    const deleteIdItems = (id) => {
        deleteFavoritesRequest(id)
    }

    return (
        <div className={(mouseOverItem) ? cl.favoritesItemContainerActive : cl.favoritesItemContainer}>
            <div onClick={() => getIdItems(id)} className={cl.favoritesItem} onMouseOut={() => setMouseOverItem(false)}
                 onMouseEnter={changeStateMouse}>
                <div className={cl.favoritesItemTitle}>
                    {saveRequest}
                </div>
            </div>
            <div className={cl.blockButtonFuntional} >
                <div>
                    <button onClick={() => getId(id, saveRequest,sorting)}>Изменить</button>
                </div>
                <div>
                    <button onClick={() => deleteIdItems(id)} >Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default FavoritesList;