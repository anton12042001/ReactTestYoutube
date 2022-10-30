import React from 'react';
import Authorization from "./Authorization";
import {singInAPI} from "../API/AuthorizationAPI";
import {useDispatch} from "react-redux";
import {setUser} from "../../reduxToolkit/slices/userSlice";
import {useNavigate} from "react-router-dom";


const AuthorizationContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const authorization = (data) => {
        singInAPI(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUser({email: user.email, id: user.uid, token: user.accessToken,}))
                navigate('/search')
            })
    }


    return (
        <div>
            <Authorization authorization={authorization}/>
        </div>
    );
};

export default AuthorizationContainer;