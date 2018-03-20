import React from 'react';
import './style.css';


const Card = ({ id, filmName, text, rating, img , release, onClick}) => {

    const createMiniCard = () => {
        const  movieCard = {
            id: id,
            filmName: filmName,
            release: release,
            rating: rating,
            img: img
        }
        return onClick(movieCard)
    }

    return (
        <div className="Card">
            <div className="Card__rating">{rating}</div>
            <img src={img} alt="lol" className="Card__img"/>
            <span className="filmName">{filmName}</span>
            <div className="Card__descriptio">
                <p className="descriptio__text">{text}</p>
            </div>
            <p className="Card__release">Release: {release}</p>
            <button className="btn" onClick={() => {createMiniCard()}}>+</button>
        </div>
    )
}

export default Card;
