import React from 'react';
import cl from "./Loader.module.css"
import sibdevLogo from '../../../img/sibdev-logo.svg'
const Loader = () => {
    return (
        <div className={cl.loader} >
            <img src={sibdevLogo} alt=""/>
        </div>
    );
};

export default Loader;