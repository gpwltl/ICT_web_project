import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const MenuItem = ({ active, children, to }) => (
    <div className="menu-item">
        {children}

    </div>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
                Game Cloud =3
            </div>

            <div className="menu">
                <NavLink exact to="/"><MenuItem>HOME</MenuItem></NavLink>
                <NavLink exact to="/about"><MenuItem>ABOUT</MenuItem></NavLink>
                <NavLink exact to="/review"><MenuItem>REVIEW</MenuItem></NavLink>
            </div >
            <div>
                <Link exact to="/login">Login</Link>
            </div>
        </div >
    );
};

export default Header;