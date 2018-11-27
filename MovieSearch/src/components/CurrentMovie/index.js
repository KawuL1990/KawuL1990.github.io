import React from 'react'
import { Helmet } from "react-helmet";
import './style.css'

const CurrentMovie = ({poster_path, original_title, budget, release_date, overview, genres, vote_average}) => {
    return (
        <div className="CurrentMovie animated fadeIn">
            <Helmet>
                <title>{original_title}</title>
            </Helmet>
            <img className="posterBlock" alt={original_title} src={`https://image.tmdb.org/t/p/w400${poster_path}`}/>
            <div className="information">
                <h1 className="titleFilm">{original_title}</h1>
                <p className="paragraph">Budget</p>
                <span className="aboutFilm">{budget}</span>
                <p className="paragraph">Overview</p>
                <span className="aboutFilm">{overview}</span>
                <p className="paragraph">Genres</p>
                <ul className="genre">
                {
                    genres.map((genre, key) => <li key={key} className="genreItem">{genre.name}</li>)
                }
                </ul>
                <p className="paragraph">Release Date</p>
                <span className="aboutFilm">{release_date}</span>
                <p className="paragraph">Rating</p>
                <span className="aboutFilm">{vote_average}</span>
            </div>
        </div>
    )
}

export default CurrentMovie