import React, {useState} from 'react';
import cl from "./Favorites.module.css";
import EditAddRequestPopap from "../EditAddRequest/EditAddRequestPopap/EditAddRequestPopap";
import FavoritesList from "./FavoritesList";

const Favorites = ({editRequest,favoriteQueries, showPopapChange, setShowPopapChange}) => {

    const [idItems, setIdItems] = useState(null)
    const [nameRequest,setNameRequest] = useState(null)
    console.log(idItems)

    const getId = (id,saveRequest) => {
        setShowPopapChange(true)
        setIdItems(id)
        setNameRequest(saveRequest)

    }

    const editRequestId = (request) => {
        debugger
        editRequest(idItems,request)
    }


    return (
        <div>
            <div>
                {favoriteQueries.map(r => <FavoritesList
                    saveRequest={r.saveRequest}
                    id={r.id}
                    key={r.id}
                    getId={getId}
                    showPopapChange={showPopapChange}
                />)}
            </div>
            {showPopapChange &&
                <div className={cl.popapContainer}>
                    <EditAddRequestPopap editRequestId={editRequestId} setShowPopapChange={setShowPopapChange}
                                         showPopapChange={showPopapChange}
                                         idItems={idItems} nameRequest={nameRequest}/>
                </div>
            }
        </div>
    );
};

export default Favorites;