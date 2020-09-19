import React from 'react';
import './Header.css';

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
                <MenuItem>HOME</MenuItem>
                <MenuItem>ABOUT</MenuItem>
                <MenuItem>REVIEW</MenuItem>
            </div>
        </div>
    );
};

export default Header;