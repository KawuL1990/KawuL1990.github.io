import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navigation = () => (
    <ul className="AboutPage__list">
        <li className="AboutPage__list__item">
            <NavLink activeClassName="active" className="AboutPage__list__link" to="/about/team">The Team</NavLink>
        </li>
        <li className="AboutPage__list__item">
            <NavLink activeClassName="active" className="AboutPage__list__link" to="/about/stack">Our Stack</NavLink>
        </li>
        <li className="AboutPage__list__item">
            <NavLink activeClassName="active" className="AboutPage__list__link" to="/about/career">Career</NavLink>
        </li>
    </ul>
);
export default Navigation;
