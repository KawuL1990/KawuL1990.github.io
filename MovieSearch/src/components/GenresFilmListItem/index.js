import React from 'react'
import './style.css'
import poster from './error.png'

const GenresFilmListItem = ({original_title, vote_average, poster_path}) => {
    
    return (
        <div className="GenresFilmListItem">
            <img 
                className="genreItemPoster"
                alt={original_title}
                src={poster_path !== null ? `https://image.tmdb.org/t/p/w200${poster_path}` : poster}
            />
            <p className="genresFilmtitle">{original_title}</p>
        </div>
    )
}

export default GenresFilmListItem