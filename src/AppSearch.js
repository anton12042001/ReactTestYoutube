import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./component/context";
import AppRouter from "./component/utils/router/AppRouter/AppRoutes";
import HeaderContainer from "./component/Header/HeaderContainer";
import {useSelector} from "react-redux";
import cl from './App.module.css'

const AppSearch = () => {
    const {token} = useSelector(state => state.user)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        (token) ? setIsAuth(true) : setIsAuth(false)
    }, [token])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>
            <BrowserRouter>
                <HeaderContainer/>
                <div className={cl.appContainer} >
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default AppSearch;