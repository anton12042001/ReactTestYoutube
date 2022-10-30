import React from 'react';
import { useForm } from "react-hook-form";
import cl from './AuthenticationForm.module.css'


const AuthenticationForm = ({authorization}) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        authorization(data)
        reset()
    }


    return (
        <div className={cl.authFormLogin} >
            <div>Авторизация</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={"Введите email"} {...register("email")} type="email"/>
                </div>
                <div>
                    <input  placeholder={"Введите пароль"} {...register("password")} type="password"/>
                </div>
                <button type={"submit"}>Войти</button>
            </form>
        </div>
    );
};

export default AuthenticationForm;