import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            
            <NavLink className="nav" to="/Home">Home</NavLink>
            <NavLink className="nav" to="/Courses">Courses</NavLink>
            <NavLink className="nav" to="/About">About</NavLink>
      
      
        </div>
    );
};

export default Header;