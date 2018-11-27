import React, { memo } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css'

const SimilarMovieItem = ({id, original_title, poster_path, getMovie}) => {
    return (
        <div className="SimilarMovieItem animated slideInDown">
            <img className="similarPoster" alt={original_title} src={`https://image.tmdb.org/t/p/w200${poster_path}`}/>
            <p className="similarTitle">{original_title}</p>
            <Link to={`/${id}/about`} onClick={() => getMovie(id)} className="SimilarLink">More</Link>
        </div>
    )
}

let mapStateToProps = (state, ownProps) => ({})

let mapDispatchToProps = (dispatch, ownProps) => ({
    'getMovie': (id) => {
        dispatch({
            type: 'CURRENT_MOVIE_REQ',
        })

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ecdb05cd357e8a79791b4473bf498636&language=en-US`)
        .then(response => {
            dispatch({
                type: 'CURRENT_MOVIE_SUCCESS',
                payload: response.data
            })
        })

        .catch(error => {
            dispatch({
                type: 'CURRENT_MOVIE_ERROR',
                payload: error
            })
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(SimilarMovieItem))