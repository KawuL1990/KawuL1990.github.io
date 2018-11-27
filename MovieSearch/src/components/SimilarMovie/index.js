import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import SimilarMovieItem from '../../components/SimilarMovieItem'
import './style.css'

class SimilarMovie extends Component {
    constructor(props){
        super(props)

        this.state = {
            amount: 10
        }
    }

    moreMovie = () => {
        this.setState(prevState => ({
            amount: prevState.amount - 10
        }))
    }

    componentDidMount(){
        this.props.getSimilarMovie(this.props.id)
    }

    render () {
        let { moreMovie } = this
        let { amount } = this.state
        let { loading, loaded, data } = this.props.similarMovie
        return (
            <div className="SimilarMovie">
            <h1 className="similarMovie_title">Similar Movie</h1>
            <div className="similarMovieList">
                {
                    loading === true ? (
                        <h1>LOADING...</h1>
                        ) : (
                            loaded && (
                                data.results.map((movie, key) => {
                                    if(key >= amount){
                                        return <SimilarMovieItem key={key} {...movie} />
                                    } else {
                                        return false
                                    }
                                })
                        )
                    )
                }
            </div>
            <p className="linkMore" onClick={moreMovie}>More Movie</p>
            </div>
        )
    }
}

let mapStateToProps = (state, ownProps) => ({
    similarMovie: state.similarMovie
})

let mapDispatchToProps = (dispatch, ownProps) => ({
    'getSimilarMovie': (id) => {
        dispatch({
            type: 'SIMILAR_MOVIE_REQ',
        })

        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=ecdb05cd357e8a79791b4473bf498636&language=en-US&page=1`)
        .then(response => {
            dispatch({
                type: 'SIMILAR_MOVIE_SUCCESS',
                payload: response.data
            })
        })

        .catch(error => {
            dispatch({
                type: 'SIMILAR_MOVIE_ERROR',
                payload: error
            })
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SimilarMovie)