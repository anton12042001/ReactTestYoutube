import React from 'react';
import {Controller, useForm} from "react-hook-form";
import MyInputEditAddRequest from "../../UI/MyInputEditAddRequest/MyInputEditAddRequest";
import cl from './EditAddRequestInput.module.css'
import RangeSliderContainer from "../../UI/RangeSlider/RangeSliderContainer";
import {useState} from "react";
import MySelectedEditAddRequest from "../../UI/MySelectedEditAddRequest/MySelectedEditAddRequest";

const EditAddRequestInput = ({idItems, editRequestId, setShowPopapChange, showPopapChange, nameRequest,
                                 showButtonFavorite, setModal, inputValue, saveRequest,sortingValue }) => {
    const [sliderValue, setSliderValue] = useState(12);
    const [valueSelect,setValueSelet] = useState("relevance")

    const {
        handleSubmit,
        reset,
        control
    } = useForm();

    const onSubmit = (data) => {
        debugger
        if (showButtonFavorite) {
            saveRequest(data.request, sliderValue, valueSelect) //сохранение
        }
        if (idItems) {
            debugger

            console.log(sortingValue)
            editRequestId(data.request, sliderValue, sortingValue) //редакирование
        }

    }


    const utils = () => {
        if (showButtonFavorite) {
            setModal(false)
        }
        if (showPopapChange) {
            setShowPopapChange(false)
        }
    }


    return (
        <div className={cl.editAddRequestContainer}>
            <div className={cl.changeInpitTitle}>{showButtonFavorite ? <div>Добавить запрос</div> :
                <div>Изменить</div>}</div>
            <form className={cl.editAddRequest} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    render={({field, fieldState}) => {
                        return <MyInputEditAddRequest type={"text"} label={"Запрос"} placeholder={"Введите запрос"}
                                                      disabled={(showButtonFavorite) && true} field={field}/>;}}
                    defaultValue={(showButtonFavorite) ? inputValue : nameRequest}
                    control={control}
                    name="request"

                />
                <Controller
                    render={({field, fieldState}) => {
                        return <MyInputEditAddRequest type={"text"} label={"Название"} placeholder={"Укажите название"} field={field}/>;}}
                    control={control}
                    name="nameRequest"
                />
                <Controller
                    render={({field, fieldState}) => {
                        return <MySelectedEditAddRequest type={"text"} setValueSelet={setValueSelet} label={"Сортировка по"} sortingValue={sortingValue}
                                                         field={field}/>;}}
                    control={control}
                    name="sorting"
                />


                <RangeSliderContainer sliderValue={sliderValue} setSliderValue={setSliderValue}/>
                <div>
                    <button onClick={utils}>{showButtonFavorite ? <div>Не сохранять</div> :
                        <div>Не изменять</div>}</button>
                    <button>{showButtonFavorite ? <div>Сохранить</div> : <div>Изменить</div>}</button>
                </div>
            </form>
        </div>
    );
};

export default EditAddRequestInput;