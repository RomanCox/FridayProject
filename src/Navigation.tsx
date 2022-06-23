import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Error404 from './Pages/Error404';
import Login from './Profile/Login';
import Registration from './Profile/Registration';
import RecoveryPassword from './Profile/RecoveryPassword';
import NewPassword from './Profile/NewPassword';
import Profile from './Profile/Profile';
import Navbar from './Profile/Navbar';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    RECOVERY_PASSWORD: '/recoverypassword',
    NEW_PASSWORD: '/newpassword',
    PROFILE: '/profile',
}

const Navigation = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navbar/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Navigation;
