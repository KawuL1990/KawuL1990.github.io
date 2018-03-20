import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Logo = () => {
    return (
        <Link to="/" className="Logo">Movie Mate</Link>
    )
}

export default Logo;
