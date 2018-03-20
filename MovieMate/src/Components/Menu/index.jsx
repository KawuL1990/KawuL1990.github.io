import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

const Menu = () => (
    <div className="Menu">
        <ul>
            <li className="Menu__item">
                <NavLink exact activeClassName="active" className="Menu__link" to="/">Home</NavLink>
            </li>
            <li className="Menu__item">
                <NavLink activeClassName="active" className="Menu__link" to="/movies">Movies</NavLink>
            </li>
            <li className="Menu__item">
                <NavLink activeClassName="active" className="Menu__link" to="/about">About</NavLink>
            </li>
        </ul>
    </div>
);

export default Menu;
