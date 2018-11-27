import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { setLocalStorage, getLocalStorage } from '../../localStorage.js'
import './style.css'

class GenresList extends PureComponent {
    componentDidMount(){
        if('activeLinkGenre' in window.localStorage){
            this.props.getfilmsByGenres(getLocalStorage('activeLinkGenre'))
        }

        this.props.getGenres()
    }

    activeLink = (query) => {
        setLocalStorage('activeLinkGenre', query)
        this.props.getfilmsByGenres(query)
    }

    render () {
        let { activeLink } = this
        let { loading, loaded, data } = this.props.genres
        return (
            <div className="GenresList">
                {
                    loading === true ? (
                        <h1>LOADING...</h1>
                    ) : (
                        loaded && ( data.genres.map(
                            (genre, key) => <NavLink 
                                to={`/search_by_genre/${genre.name}`}
                                key={key}
                                onClick={() => activeLink(genre.name)}
                                className="genreLink"
                                activeClassName="selected"
                                >
                                    {genre.name}
                                </NavLink>)
                        ) 
                    )
                }
            </div>
        )
    }
}

let mapStateToProps = (state, ownProps) => ({
    genres: state.genres
})

let mapDispatchToProps = (dispatch, ownProps) => ({
    'getGenres': () => {
        dispatch({
            type: 'GENRES_REQ',
        })

        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ecdb05cd357e8a79791b4473bf498636&language=en-US`)
        .then(response => {
            dispatch({
                type: 'GENRES_SUCCESS',
                payload: response.data
            })
        })

        .catch(error => {
            dispatch({
                type: 'GENRES_ERROR',
                payload: error
            })
        })
    },
    'getfilmsByGenres': (id) => {
        dispatch({
            type: 'FILMS_GENRES_REQ',
        })

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ecdb05cd357e8a79791b4473bf498636&language=en-US&query=${id}&page=1&include_adult=false`)
        .then(response => {
            dispatch({
                type: 'FILMS_GENRES_SUCCESS',
                payload: response.data
            })
        })

        .catch(error => {
            dispatch({
                type: 'FILMS_GENRES_ERROR',
                payload: error
            })
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GenresList)