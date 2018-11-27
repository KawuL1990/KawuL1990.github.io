import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './style.css'

class SearchForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            inputValue: '',
        }
    }

    getInputValue = (e) => {
        let value = e.target.value

        this.setState({
            inputValue: value
        })
    }

    submit = (e) => {
        e.preventDefault()
        if(this.state.inputValue === ''){
            return false
        }
        this.props.getCurrentFilm(this.state.inputValue)
    }

    render () {
        let { submit, getInputValue } = this
        return (
            <form className="SearchForm" onSubmit={submit}>
                <input className="inputSearch" type="text" placeholder="Search input"onChange={getInputValue}/>
                <button className="button">Search</button>
            </form>
        )
    }
}

let mapStateToProps = (state, ownProps) => ({})

let mapDispatchToProps = (dispatch, ownProps) => ({
    'getCurrentFilm': (query) => {
        dispatch({
            type: 'MOVIE_REQ',
        })

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ecdb05cd357e8a79791b4473bf498636&language=en-US&query=${query}&page=1&include_adult=false`)
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)