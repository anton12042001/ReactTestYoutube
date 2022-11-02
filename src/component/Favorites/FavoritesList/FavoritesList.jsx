import React from 'react';
import cl from "../Favorites.module.css";
import {useState} from "react";
import FavoritesListButton from "./FavoritesListButton";

const FavoritesList = ({
                           saveRequest, id, getId, showPopapChange,
                           youtubeSearchOrder, sorting, deleteFavoritesRequest,nameRequest
                       }) => {

    const [mouseOverItem, setMouseOverItem] = useState(false)


    const changeStateMouse = () => {
        if (!showPopapChange) {
            setMouseOverItem(true)
        }
    }

    const getIdItems = (id,nameRequest) => {
        youtubeSearchOrder(id,nameRequest)
    }

    const deleteIdItems = (id) => {
        deleteFavoritesRequest(id)
    }

    return (
        <div className={(mouseOverItem) ? cl.favoritesItemContainerActive : cl.favoritesItemContainer}
             onMouseOut={() => setMouseOverItem(false)}>
            <div onClick={() => getIdItems(id,nameRequest)} className={cl.favoritesItem}
                 onMouseEnter={changeStateMouse}>
                <div className={cl.favoritesItemTitle}>
                    {(nameRequest) ? nameRequest : saveRequest }

                </div>
            </div>
            <div
                onMouseOut={() => setMouseOverItem(false)}
                onMouseEnter={changeStateMouse}
                className={cl.buttonContainer}
            >
                <div className={cl.wideScreens}>
                    {
                        (mouseOverItem) &&
                        <FavoritesListButton
                            changeStateMouse={changeStateMouse}
                            setMouseOverItem={setMouseOverItem}
                            getId={getId} id={id}
                            saveRequest={saveRequest}
                            sorting={sorting}
                            deleteIdItems={deleteIdItems}/>
                    }
                </div>
                <div className={cl.narrowScreens}>
                    <FavoritesListButton
                        changeStateMouse={changeStateMouse}
                        setMouseOverItem={setMouseOverItem}
                        getId={getId} id={id}
                        saveRequest={saveRequest}
                        sorting={sorting}
                        deleteIdItems={deleteIdItems}/>

                </div>
            </div>

        </div>
    );
};

export default FavoritesList;