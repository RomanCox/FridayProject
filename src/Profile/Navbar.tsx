import React from 'react';
import style from './Navbar.module.css';
import MyNavlink from '../common/components/MyNavlink/MyNavlink';

const Navbar = () => {
    return (
        <nav className={style.container}>
            <MyNavlink to={'/login'} title={'Login'}/>
            <MyNavlink to={'/registration'} title={'Sign Up'}/>
            <MyNavlink to={'/recoverypassword'} title={'My Profile'}/>
            <MyNavlink to={'/newpassword'} title={'New Password'}/>
            <MyNavlink to={'/profile'} title={'My Profile'}/>
        </nav>
    );
}

export default Navbar;
