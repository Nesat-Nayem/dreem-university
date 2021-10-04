import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header-area">
            
            <NavLink className="nav" to="/Home">Home</NavLink>

            <NavLink className="nav" to="/Courses">Courses</NavLink>

            <NavLink className="nav" to="/Research">Research</NavLink>

            <NavLink className="nav" to="/Campus">Campus</NavLink>

            <NavLink className="nav" to="/About">About</NavLink>
      
        </div>
    );
};

export default Header;