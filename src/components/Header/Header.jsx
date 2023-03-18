import React from 'react';
import { NavLink } from "react-router-dom";
import './header.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as User } from '../../images/user.svg';

/* import { User } from '../User/User'; */

export const Header = () => {
    return (
        <div className="header-container">
            <Logo width="60" height="60" className="logo"/>
            <nav className="nav">
                <NavLink to='/' className="nav-item"><b>About</b> Chekhov</NavLink>
                <NavLink to='/books' className="nav-item"><b>Read</b> Chekhov</NavLink>
                <NavLink to='/my_books' className="nav-item"><b>Become</b> a Chekhov</NavLink>
                <NavLink to='/my_book' className="nav-item"><b>Book</b></NavLink>
                <User />
            </nav>
{/*             <User userData={{}}/> */}
        </div>
    )
}