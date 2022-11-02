import React from 'react';
import cl from './MyInputEditAddRequest.module.css'
import {useLocation} from "react-router-dom";

const MyInputEditAddRequest = (props) => {
    const location = useLocation()


    const {field} = props
    const {fieldState} = props

    return (
        <div className={cl.inputContainer} >
            <input
                placeholder={props.placeholder}
                {...fieldState}
                {...field}
                type={props.type}
                disabled={props.disabled}
                className={(location.pathname === '/favorites') ? cl.inputFavorites : ((props.disabled) ? cl.inputDisabled : cl.input)}

            />
        </div>
    );
};

export default MyInputEditAddRequest;