import React, {useState} from 'react';
import cl from "./Favorites.module.css";
import EditAddRequestPopap from "../EditAddRequest/EditAddRequestPopap/EditAddRequestPopap";
import FavoritesList from "./FavoritesList/FavoritesList";

const Favorites = ({editRequest,favoriteQueries, showPopapChange, setShowPopapChange,youtubeSearchOrder,deleteFavoritesRequest}) => {


    const [idItems, setIdItems] = useState(null)
    const [nameRequest,setNameRequest] = useState(null)
    const [sortingValue,setSortingValue] = useState("")


    const getId = (id,saveRequest,sorting) => {
        setSortingValue(sorting)
        setShowPopapChange(true)
        setIdItems(id)
        setNameRequest(saveRequest)

    }

    const editRequestId = (request,sliderValue,valueSelect,nameRequest) => {
        editRequest(idItems,request,sliderValue,valueSelect,nameRequest)
    }

    if(favoriteQueries.length === 0){
        return  <div>В настоящий момент нет избранных запросов</div>
    }

    return (
        <div>
            <div>
                {favoriteQueries.map(r => <FavoritesList
                    nameRequest={r.nameRequest}
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
                                         sortingValue={sortingValue}
                                         />
                </div>
            }

        </div>
    );
};

export default Favorites;