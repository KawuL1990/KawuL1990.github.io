import React from 'react';
import './style.css';


const Card = ({ id, filmName, text, rating, img , release, onClick}) => {

    return (
        <div className="Card animated fadeIn">
            <div className="Card__rating">{rating}</div>
            <img src={img} alt="lol" className="Card__img"/>
            <span className="filmName">{filmName}</span>
            <div className="Card__descriptio">
                <p className="descriptio__text">{text}</p>
            </div>
            <p className="Card__release">Release: {release}</p>
            <button className="btn" onClick={() => onClick(id)}>+</button>
        </div>
    )
}

export default Card;
