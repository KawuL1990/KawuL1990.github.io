import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Logo from '../Logo';
import Menu from '../Menu';
import HomePage from '../../Pages/HomePage';
import AboutPage from '../../Pages/AboutPage';
import MoviePage from '../../Pages/MoviePage';
import './style.css';

// ecdb05cd357e8a79791b4473bf498636

const App = () => (
    <div className="App">
        <Header >
            <Logo />
            <Menu />
        </Header>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage}/>
            <Route path="/movies" component={MoviePage} />
        </Switch>
    </div>
)

export default App;
