import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HomePage = () => (
    <div className="HomePage">
        <i className="fas fa-film"></i>
        <h1 className="HomePage__title">Welcome to Movie Mate</h1>
        <p className="HomePage__text">This is a single page application that lets you manage all kinds of movies.</p>
        <p className="HomePage__text">If you wish to learn more about Movie Mate visit <Link to="/about" className="text__link">About Page</Link></p>
        <p className="HomePage__text">Or start browsing right now <Link to="/movies" className="text__link">inMovie Gallery</Link></p>
    </div>
);
export default HomePage;
