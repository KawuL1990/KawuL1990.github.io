import React from 'react';
import Navigation from '../../Components/Navigation';
import Team from '../../Components/Team';
import Stack from '../../Components/Stack';
import Career from '../../Components/Career';
import { Route, Switch } from 'react-router-dom';
import './style.css';

const AboutPage = ( props ) => (
    <div className="AboutPage">
        <Navigation />
        <Switch>
            <Route path="/about/team" component={Team}></Route>
            <Route path="/about/stack" component={Stack}></Route>
            <Route path="/about/career" component={Career}></Route>
        </Switch>
    </div>
);

export default AboutPage;
