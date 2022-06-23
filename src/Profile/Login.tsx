import React from 'react';
import style from './Login.module.css'
import MyInputText from '../common/components/MyInput/MyInputText';
import MyButton from "../common/components/MyButton/MyButton";
import MyCheckBox from "../common/components/CheckBox/MyCheckBox";

export type StyleType = {
    background: string
}

const Login = () => {
    const grey = {
        background: '#434343'
    }

    return (
        <div className={style.container}>
            <MyInputText style={grey} placeholder={'Введите логин'}/>
            <MyButton>Login</MyButton>
            <MyCheckBox/>
        </div>
    );
}

export default Login;
