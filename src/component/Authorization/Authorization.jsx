import React, {useState} from 'react';
import cl from './Authorization.module.css'
import AuthenticationForm from "./AuthenticationForm/AuthenticationForm";
import sibLogo from '../../img/sibdev-logo.svg'

const Authorization = ({authorization}) => {


    return (
        <div className={cl.authorizationContainer} >
            <div className={cl.sibLogo} ><img src={sibLogo} alt=""/></div>
            <div className={cl.authorizationTitle} >Вход</div>
            <AuthenticationForm authorization={authorization} />
        </div>
    );
};

export default Authorization;