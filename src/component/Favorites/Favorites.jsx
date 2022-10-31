import React, {useState} from 'react';
import cl from "./Favorites.module.css";
import EditAddRequestPopap from "../EditAddRequest/EditAddRequestPopap/EditAddRequestPopap";
import FavoritesList from "./FavoritesList";

const Favorites = ({editRequest,favoriteQueries, showPopapChange, setShowPopapChange,youtubeSearchOrder,deleteFavoritesRequest}) => {


    const [idItems, setIdItems] = useState(null)
    const [nameRequest,setNameRequest] = useState(null)


    const getId = (id,saveRequest) => {
        setShowPopapChange(true)
        setIdItems(id)
        setNameRequest(saveRequest)

    }

    const editRequestId = (request,sliderValue,sorting) => {
        editRequest(idItems,request,sliderValue,sorting)
    }


    return (
        <div>
            <div>
                {favoriteQueries.map(r => <FavoritesList
                    deleteFavoritesRequest={deleteFavoritesRequest}
                    saveRequest={r.saveRequest}
                    sorting={r.sorting}
                    id={r.id}
                    key={r.id}
                    getId={getId}
                    showPopapChange={showPopapChange}
                    youtubeSearchOrder={youtubeSearchOrder}
                />)}
            </div>
            {showPopapChange &&
                <div className={cl.popapContainer}>
                    <EditAddRequestPopap editRequestId={editRequestId} setShowPopapChange={setShowPopapChange}
                                         showPopapChange={showPopapChange}
                                         idItems={idItems} nameRequest={nameRequest}
                                         />
                </div>
            }

        </div>
    );
};

export default Favorites;