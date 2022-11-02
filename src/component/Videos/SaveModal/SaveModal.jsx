import React from 'react';
import cl from './SaveMoval.module.css'
import {useNavigate} from "react-router-dom";

const SaveModal = () => {
    const navigate = useNavigate()



    return (
        <div className={cl.saveModalContainer}>
            <div className={cl.saveModalArrayLeft}></div>
            <div className={cl.saveModalArrayRight}></div>
            <div className={cl.infoSaveSearch} >Поиск сохранён в разделе «Избранное»</div>
            <div onClick={() => navigate('/favorites')} className={cl.navigateToFavorite}><span>Перейти в избранное</span></div>
        </div>

    );
};

export default SaveModal;