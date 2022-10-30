import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../../../context";
import Error from "../../../Error/Error";


const AppRouter = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)

    return (
        isAuth ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}

                    />
                )}
                <Route path="/*"
                       element={<Error/>}/>
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route path="/*"
                       element={<Error/>}/>
            </Routes>

    );
};
export default AppRouter