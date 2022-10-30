import React, {useState} from 'react';
import cl from './Authorization.module.css'
import AuthenticationForm from "./AuthenticationForm/AuthenticationForm";

const Authorization = ({authorization}) => {


    return (
        <div className={cl.authorizationContainer} >
            <AuthenticationForm authorization={authorization} />
        </div>
    );
};

export default Authorization;