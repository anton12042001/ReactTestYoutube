import React from 'react';
import {Controller, useForm} from "react-hook-form";
import MyInputEditAddRequest from "../../UI/MyInputEditAddRequest/MyInputEditAddRequest";
import cl from './EditAddRequestInput.module.css'
import RangeSliderContainer from "../../UI/RangeSlider/RangeSliderContainer";
import {useState} from "react";
import MySelectedEditAddRequest from "../../UI/MySelectedEditAddRequest/MySelectedEditAddRequest";

const EditAddRequestInput = ({
                                 idItems, editRequestId, setShowPopapChange, showPopapChange, nameRequest,
                                 showButtonFavorite, setModal, inputValue, saveRequest, sortingValue
                             }) => {
    const [sliderValue, setSliderValue] = useState(12);
    const [valueSelect, setValueSelet] = useState("relevance")
    console.log(valueSelect)
    const {
        handleSubmit,
        control
    } = useForm({
        mode: "onBlur",
    })

    const onSubmit = (data) => {
        debugger
        if (showButtonFavorite) {
            saveRequest(data.request, sliderValue, valueSelect,data.nameRequest) //сохранение
        }
        if (idItems) {
            debugger
            console.log(valueSelect)
            editRequestId(data.request, sliderValue, valueSelect, data.nameRequest) //редакирование
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
            <div className={cl.changeInpitTitle}>{showButtonFavorite ? <div>Сохранить запрос</div> :
                <div>Изменить</div>}</div>
            <form className={cl.editAddRequest} onSubmit={handleSubmit(onSubmit)}>
                <div className={cl.controllerInput}>
                    <div className={cl.request}>Запрос</div>
                    <Controller
                        render={({field, fieldState}) => {
                            return <MyInputEditAddRequest type={"text"} placeholder={"Введите запрос"}
                                                          disabled={(showButtonFavorite) && true} field={field}/>;
                        }}
                        defaultValue={(showButtonFavorite) ? inputValue : nameRequest}
                        control={control}
                        name="request"

                    />
                </div>
                <div className={cl.controllerInputName}>
                    <div className={cl.nameStar} >*</div>
                    <div className={cl.nameRequest} >Название</div>
                    <Controller
                        render={({field, fieldState}) => {
                            return <MyInputEditAddRequest type={"text"} placeholder={"Укажите название"}
                                                          field={field}/>;
                        }}
                        control={control}
                        name="nameRequest"
                        rules={{required: "Поле обязательно к заполнению!"}}
                    />
                </div>
                <div className={cl.controllerSelect} >
                    <div className={cl.sortingSelect} >Сортировать по</div>
                    <Controller
                        render={({field, fieldState}) => {
                            return <MySelectedEditAddRequest type={"text"} setValueSelet={setValueSelet}
                                                             label={"Сортировка по"} sortingValue={sortingValue}
                                                             field={field}/>;
                        }}
                        control={control}
                        name="sorting"
                    />
                </div>


                <div className={cl.rangeSliderContainer} >
                    <RangeSliderContainer sliderValue={sliderValue} setSliderValue={setSliderValue}/>
                </div>
                <div className={cl.saveButton} >
                    <button className={cl.dontSave} onClick={utils}>{showButtonFavorite ? <div>Не сохранять</div> :
                        <div>Не изменять</div>}</button>
                    <button className={cl.saving} >{showButtonFavorite ? <div>Сохранить</div> : <div>Изменить</div>}</button>
                </div>
            </form>
        </div>
    );
};

export default EditAddRequestInput;