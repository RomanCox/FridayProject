import React from 'react';
import style from './App.module.css';
import Navigation from './Navigation';
import {HashRouter} from 'react-router-dom';

const App = () => {
    return (
        <div className={style.app}>
            <HashRouter>
                <Navigation/>
            </HashRouter>
        </div>
    );
}

export default App;
