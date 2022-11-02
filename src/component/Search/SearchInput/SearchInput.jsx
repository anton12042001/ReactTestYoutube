import React, {useState} from 'react';
import {Controller, useForm} from "react-hook-form";
import MyInputSearch from "../../UI/MyInputSearch/MyInputSearch";
import {useSelector} from "react-redux";
import cl from './SearchInput.module.css'
import Loader from "../../UI/Loader/Loader";
import heart from '../../../img/heart/heart.svg'
import heartActive from '../../../img/heart/heartActive.svg'
import {useLocation} from "react-router-dom";
import SaveModal from "../../Videos/SaveModal/SaveModal";

const SearchInput = ({setModal, showButtonFavorite, saveRequest, youtubeTerm, setInputValue,saveFavorite}) => {
    const {currentRequest} = useSelector(state => state.videos)
    const location = useLocation()




    const saveInputValue = (inputValue) => {
        saveRequest(inputValue)
    }

    const {
        handleSubmit,
        control
    } = useForm();

    const onSubmit = (data) => {
        youtubeTerm(data.termFromSearchBar)

    }


    if (!currentRequest && showButtonFavorite) {
        return <Loader/>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={(location.pathname === "/search/videos") ? cl.formContainerVideos : cl.formContainer}>
                <div className={(location.pathname === "/search/videos") ? cl.formTitleVideos : cl.formTitle}>Поиск видео</div>
                <div className={(location.pathname === "/search/videos") ? cl.inputContainerVideos : cl.inputContainer}>
                    <Controller render={({field, fieldState}) => {
                        return <MyInputSearch showButtonFavorite={showButtonFavorite}
                                              saveInputValue={saveInputValue} type={"text"}
                                              placeholder={"Что хотите посмотреть?"}
                                              field={field} setInputValue={setInputValue}/>;
                    }} defaultValue={(currentRequest) ? currentRequest : ''} control={control} name="termFromSearchBar"/>

                    {showButtonFavorite &&

                        <div className={cl.buttonFavorite}>
                            <button onClick={() => setModal(true)} type={"button"}>
                                <img src={(saveFavorite) ? heartActive : heart}/>
                            </button>
                            <div className={cl.saveFavoriteWrapper} >{(saveFavorite) && <SaveModal/>}</div>
                        </div>
                    }
                    <button className={cl.buttonSearchRequest} type={"submit"}>
                        <span className={cl.searchButtonSpan}>Найти</span>
                    </button>

                </div>
            </div>
        </form>
    );
};

export default SearchInput;