import React from 'react';
import cl from "../Favorites.module.css";

const FavoritesListButton = ({changeStateMouse,setMouseOverItem,getId,id,saveRequest,sorting,deleteIdItems}) => {
    return (
        <div

            className={cl.blockButtonFuntional}>
            <div>
                <button
                    onMouseEnter={() => changeStateMouse}
                    onMouseOut={() => setMouseOverItem(false)}
                    className={cl.buttonChange}
                    onClick={() => getId(id, saveRequest, sorting)}>
                    Изменить
                </button>
            </div>
            <div>
                <button
                    onMouseOut={() => setMouseOverItem(false)}
                    onMouseEnter={changeStateMouse}
                    className={cl.buttonDelete}
                    onClick={() => deleteIdItems(id)}>
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default FavoritesListButton;