import React from 'react';
import Header from "./Header";
import cl from './Header.module.css'

const HeaderContainer = () => {
    return (
        <div className={cl.headerContainer} >
            <Header/>
        </div>
    );
};

export default HeaderContainer;