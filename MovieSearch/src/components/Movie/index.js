import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import CurrentMovie from '../CurrentMovie'
import SimilarMovie from "../SimilarMovie";
import './style.css'


class Movie extends Component {

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id)
    }

    render () {
        let { loading, loaded, data } = this.props.movie
        return (
            <div className="Movie">
                {
                    loading === true ? (
                        <h1>LOADING...</h1>
                    ) : (
                        loaded && (
                            <>
                                <CurrentMovie {...data}/>
                                <SimilarMovie id={data.id}/>
                            </>
                        )
                    )
                }
            </div>
        )
    }
}

let mapStateToProps = (state, ownProps) => ({
    movie: state.movie
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Movie)