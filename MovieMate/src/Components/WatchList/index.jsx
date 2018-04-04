import React, { Component } from 'react';
import MiniCard from "../MiniCard";
import './style.css';

class WatchList extends Component {

    render() {
        const { arrFilms, onDelete } = this.props;
        return(
            <div className="watchList">
                <h1 className="watchList__title">WATCHLIST</h1>
                {arrFilms.map(film =>
                    <MiniCard key={film.id} onClick={onDelete} {...film} />
                )}
            </div>
        );
    }
}

export default WatchList;
