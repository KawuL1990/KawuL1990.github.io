import React from 'react';
import { NavLink }  from 'react-router-dom'
import teamData from '../../teamData';
import './style.css';

const TeamList = (props) => (
    <ul className="TeamList">
        {teamData.map(user => (
            <li className="TeamList__item" key={user.name}>
                <NavLink to={`${props.match.url}/${user.id}`} activeClassName="active" className="TeamList__link">{user.name}</NavLink>
            </li>
        ))}
    </ul>
);
export default TeamList;
