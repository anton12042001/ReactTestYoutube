import React, {useEffect, useRef, useState} from 'react';
import cl from './MyInputSearch.module.css'
import {useLocation} from "react-router-dom";


const MyInputSearch = (props) => {
    const {field} = props
    const {fieldState} = props
    const inputRef = useRef()
    const [valueInput,setValueInput] = useState('')
    const location = useLocation()

    useEffect(() => {
        if(props.setInputValue){
            setValueInput(inputRef.current.defaultValue)
            props.setInputValue(valueInput)
        }
    },[valueInput])




    return (
            <input
                className={cl.input}
                placeholder={props.placeholder}
                {...fieldState}
                {...field}
                type={props.type}
                ref={inputRef}
            />
    );
};

export default MyInputSearch;