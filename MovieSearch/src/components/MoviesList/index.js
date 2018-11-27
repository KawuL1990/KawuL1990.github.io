import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet";
import Category from "../Category";
import axios from 'axios'
import { getLocalStorage } from '../../localStorage.js'
import './style.css'

import MoviesListItem from '../MoviesListItem'

class MoviesList extends Component {
    
    componentDidMount(){
        if('activeBtn' in window.localStorage){
            this.props.getFilmsData(getLocalStorage('activeBtn'))
        } else {
            this.props.getFilmsData('popular')
        }
    }

    render () {
        let { data, loading, loaded } = this.props.moviesList;
        return (
            <div className="MoviesList">
                <Helmet>
                    <title>Film Catalog</title>
                </Helmet>
                <Category />
                {
                    loading === true ? (
                        <h1>LOADING...</h1>
                    ) : (
                        loaded && data.map((film, key) => <MoviesListItem key={key} {...film}/>)
                    )
                }
            </div>
        )
    }
}

let mapStateToProps = (state, ownProps) => ({
    moviesList: state.moviesList
})

let mapDispatchToProps = (dispatch, ownProps) => ({
    'getFilmsData': (rate) => {
        dispatch({
            type: 'MOVIE_REQ',
        })

        axios.get(`https://api.themoviedb.org/3/movie/${rate}?api_key=ecdb05cd357e8a79791b4473bf498636&language=en-US&page=1`)
        .then(response => {
            dispatch({
                type: 'MOVIE_SUCCESS',
                payload: response
            })
        })

        .catch(error => {
            dispatch({
                type: 'MOVIE_ERROR',
                payload: error
            })
        })
    }
})

MoviesList.propstypes = {
    moviesList: PropTypes.shape({
        data: PropTypes.array.isReguired,
        loading: PropTypes.bool.isReguired,
        loaded: PropTypes.bool.isReguired
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)