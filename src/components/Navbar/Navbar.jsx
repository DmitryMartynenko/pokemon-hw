import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom"; // s = class


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/pokedeks' activeClassName={s.activeLink}>Pokedeks</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;