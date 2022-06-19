import React from 'react';
import style from './RegistrationLinks.module.css';
import Login from './Login';
import Registration from './Registration';
import RecoveryPassword from './RecoveryPassword';
import NewPassword from './NewPassword';
import Profile from './Profile';

export const RegistrationLinks = () => {
    return (
        <div className={style.container}>
            <Login/>
            <Registration/>
            <RecoveryPassword/>
            <NewPassword/>
            <Profile/>
        </div>
    );
};
