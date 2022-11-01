import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Error = () => {

    const navigate = useNavigate()
    const {token} = useSelector(state => state.user)

    useEffect(() => {
        if(!token){
            navigate('/authorization')
        }
    },[token])



    return (
        <div>
            Вы перешли на несуществующую страницу...
        </div>
    );
};

export default Error;