import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const MoviesListItem = ({id,poster_path, original_title, overview, release_date, vote_average}) => {
    return (
        <div className="MoviesListItem animated fadeIn">
            <div className="rating">
                {vote_average}
            </div>
            <img className="poster" alt={original_title} src={`https://image.tmdb.org/t/p/w200${poster_path}`}/>
            <div className="discriptions">
                <p className="title">{original_title}</p>
                <div className="overview">
                    {overview}
                </div>
                <p className="release">{release_date}</p>
                <Link to={`/${id}/about`} className="link">More Info</Link>
            </div>
        </div>
    )
}

MoviesListItem.defaultProps = {
    vote_average: '0.0',
  };

export default MoviesListItem