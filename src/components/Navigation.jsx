import React from 'react';
import { NavLink } from 'react-router-dom';
import './_settings.scss';


const Navigation = () => {
    return (
       <div className="navigation">
        <ul>
            <NavLink to="/">
            <li>Startseite</li>
            </NavLink>
            <NavLink to="/about">
            <li>über uns</li>
            </NavLink>
            <NavLink to="/contact">
            <li>contact</li>
            </NavLink>
        </ul>
       </div>
    );
};

export default Navigation;