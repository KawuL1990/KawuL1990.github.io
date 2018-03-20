import React from 'react';
import Card from '../Card';
import './style.css';

const CardsList = ({ films, add }) => {
    return (
        <div className="CardsList">
            {films.map(film => <Card key={film.id} onClick={add} {...film}/> )}
        </div>
    )
}

export default CardsList;
