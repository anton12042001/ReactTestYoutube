import React from 'react';
import cl from './Header.module.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeUserInfo} from "../../reduxToolkit/slices/userSlice";
import {removeVideoInfo} from "../../reduxToolkit/slices/videosSlice";
import {removeFavoriteQueriesID} from "../../reduxToolkit/slices/favoriteQueriesIDSlices";
import {removeFavoriteQueries} from "../../reduxToolkit/slices/favoriteQueriesSlices";
import sibLogo from '../../img/sibdev-logo.svg'


const Header = () => {
    const navigate = useNavigate()
    const {token} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const location = useLocation()


    const removeUser = () => {
        dispatch(removeUserInfo())
        dispatch(removeVideoInfo())
        dispatch(removeFavoriteQueriesID())
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
                <div className={cl.userNavigate} >
                    <div className={cl.headerSibLogo} ><img src={sibLogo} alt=""/></div>
                    <div className={cl.userFunctional}>
                        <button className={(location.pathname === '/search') || (location.pathname === '/search/videos')
                            ? cl.buttonSearchActive
                            : cl.buttonSearch } onClick={navigateSearch}>Поиск</button>
                        <button className={(location.pathname === '/favorites')
                            ? cl.buttonFavoritesActive
                            : cl.buttonFavorites } onClick={() => navigate('/favorites')}>Избранное</button>

                    </div>
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