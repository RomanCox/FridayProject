import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './MyNavlink.module.css';

type MyNavLinkPropsType = {
    to: string,
    title: string,
}

const MyNavLink: React.FC<MyNavLinkPropsType> = (
    {
        to, title,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    return (
        <div className={style.itemContainer}>
            <div className={style.item}>
                <NavLink to={to} className={style.a}>
                    <svg width='170px' height='40px' viewBox='0 0 170 40' className={style.svg}>
                        <polyline points='1,1 169,1 169,39 1,39 1,1'/>
                    </svg>
                    {title}
                </NavLink>
            </div>
        </div>
    );
}

export default MyNavLink;
