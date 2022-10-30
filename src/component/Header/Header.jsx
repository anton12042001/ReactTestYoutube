import React from 'react';
import cl from './Header.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeUserInfo} from "../../reduxToolkit/slices/userSlice";
import {removeVideoInfo} from "../../reduxToolkit/slices/videosSlice";
import {removeFavoriteQueries} from "../../reduxToolkit/slices/favoriteQueriesIDSlices";


const Header = () => {
    const navigate = useNavigate()
    const {token} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const removeUser = () => {
        dispatch(removeUserInfo())
        dispatch(removeVideoInfo())
        dispatch(removeFavoriteQueries())
        navigate('/authorization')
    }

    const navigateSearch = () => {
        dispatch(removeVideoInfo())
        navigate('/search')
    }


    if (token) {
        return (
            <div className={cl.header}>
                <div className={cl.userFunctional}>
                    <button onClick={navigateSearch}>Поиск</button>
                    <button onClick={() => navigate('/favorites')}>Избранное</button>
                </div>
                <div className={cl.transitionAuthorization}>
                    {(token)
                        ? <button onClick={removeUser} className={cl.buttonAuthorization}>Выйти</button>
                        : <button onClick={() => navigate('/authorization')}
                                  className={cl.buttonAuthorization}>Войти</button>}
                </div>
            </div>
        )
    }
};

export default Header;