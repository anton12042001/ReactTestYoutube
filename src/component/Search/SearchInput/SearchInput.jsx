import React from 'react';
import {Controller, useForm} from "react-hook-form";
import MyInputSearch from "../../UI/MyInputSearch/MyInputSearch";
import {useSelector} from "react-redux";
import cl from './SearchInput.module.css'
import Loader from "../../UI/Loader/Loader";

const SearchInput = ({setModal,showButtonFavorite,saveRequest, youtubeTerm,setInputValue}) => {
    const {currentRequest} = useSelector(state => state.videos)

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


    if(!currentRequest && showButtonFavorite){
        return  <Loader/>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Поиск видео</div>
            <div className={cl.formContainer}>
                <Controller
                    render={({field, fieldState}) => {
                        return <MyInputSearch showButtonFavorite={showButtonFavorite} saveInputValue={saveInputValue} type={"text"}
                                              placeholder={"Что хотите посмотреть?"}
                                              field={field} setInputValue={setInputValue}/>;
                    }}
                    defaultValue={currentRequest}
                    control={control}
                    name="termFromSearchBar"

                />
                {showButtonFavorite && <button onClick={() => setModal(true)} type={"button"} >Избранное</button>}
                <button type={"submit"}>Найти</button>
            </div>
        </form>
    );
};

export default SearchInput;