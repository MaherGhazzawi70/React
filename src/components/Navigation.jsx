import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
       <div>
        <ul>
            <NavLink to="/" className={(nav) => (nav.isActive ? "active" : "")}>
            <li>Startseite</li>
            </NavLink>
            <NavLink to="/about" className={(nav) => (nav.isActive ? "active" : "")}>
            <li>über uns</li>
            </NavLink>
            <NavLink to="/contact" className={(nav) => (nav.isActive ? "active" : "")}>
            <li>contact</li>
            </NavLink>
        </ul>
       </div>
    );
};

export default Navigation;