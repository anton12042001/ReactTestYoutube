import React from 'react';
import cl from "./Favorites.module.css";
import {useState} from "react";

const FavoritesList = ({saveRequest,id,getId,showPopapChange}) => {
    const [mouseOverItem, setMouseOverItem] = useState(false)


    const changeStateMouse = () => {
        if(!showPopapChange){
            setMouseOverItem(true)
        }
    }

    return (
        <div className={(mouseOverItem) ? cl.favoritesItemContainerActive : cl.favoritesItemContainer}>
            <div className={cl.favoritesItem} onMouseOut={() => setMouseOverItem(false)} onMouseEnter={changeStateMouse}>
                <div className={cl.favoritesItemTitle}>
                    {saveRequest}
                    <div>
                        <button onClick={() => getId(id,saveRequest)}>Изменить</button>
                        <button>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoritesList;