import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import cl from './AuthenticationForm.module.css'
import eyeoff from '../../../img/eye/eye-off.svg'
import eyeoffFocus from '../../../img/eye/eye-off-focus.svg'
import eyeOn from '../../../img/eye/eye.svg'


const AuthenticationForm = ({authorization}) => {
    const [focused,setFocused] = useState(false)
    const [showPassword,setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        reset,

    } = useForm();

    const onSubmit = (data) => {
        authorization(data)
        reset()
    }


    return (
        <div className={cl.authFormLogin} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={cl.authLoginEmail} >
                    <span>Логин</span>
                    <input className={cl.authorizationInput} placeholder={"Введите email"} {...register("email")} type="email"/>
                </div>
                <div className={cl.authLoginPassword}>
                    <span>Пароль</span>
                    <input className={cl.authorizationInput}
                           {...register("password")}
                           onFocus={() => setFocused(true)}
                           onBlur={() => setFocused(false)}


                           placeholder={"Введите пароль"}

                           type={(showPassword) ? "text" : "password"}/>
                    <button onClick={() => setShowPassword(!showPassword)} type={"button"}>
                        <img src={(showPassword) ? eyeOn :((focused) ? eyeoffFocus : eyeoff)} alt=""/></button>
                </div>
                <div className={cl.authButton}>
                    <button type={"submit"}>Войти</button>
                </div>
            </form>
        </div>
    );
};

export default AuthenticationForm;