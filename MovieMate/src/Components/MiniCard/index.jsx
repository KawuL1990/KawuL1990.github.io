import React from 'react';
import './style.css';

const MiniCard = ({ id, img, filmName, rating, release, onClick }) => {
    return (
        <div className="MiniCard animated flipInX">
            <div>
                <img src={img} alt="Afisha" className="MiniCard__img"/>
            </div>
            <div className="MiniCard__content">
                <p className="MiniCard__filmName">{filmName}</p>
                <p className="MiniCard__releas">Released: {release}</p>
                <p className="MiniCard__rating">Rating: {rating}</p>
            </div>
            <button className="btn btn__delete" onClick={() => {onClick(id)}}>-</button>
        </div>
    )
}

export default MiniCard;
