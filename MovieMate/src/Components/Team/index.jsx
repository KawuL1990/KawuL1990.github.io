import React from 'react';
import TeamList from '../../Components/TeamList';
import MemberCard from '../../Components/MemberCard';
import { Route } from 'react-router-dom';
import './style.css';


const Team = (props) => (
    <div className="Team">
        <TeamList {...props}/>
        <Route exact path={`${props.match.path}/:userId`} component={MemberCard}></Route>
    </div>
);
export default Team;
