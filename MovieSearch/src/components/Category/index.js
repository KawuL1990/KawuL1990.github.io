import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { setLocalStorage, getLocalStorage } from '../../localStorage.js'

import './style.css'

class Category extends Component{
    constructor(props){
        super(props)

        this.state = {
            activeBtn: ''
        }
    }

    componentDidMount(){
        if('activeBtn' in window.localStorage){
            this.setState({
                activeBtn: getLocalStorage('activeBtn')
            })
            this.props.getFilmsData(getLocalStorage('activeBtn'))
        } else {
            this.setState({
                activeBtn: 'popular'
            })
            this.props.getFilmsData('popular')
        }
    }

    activeSearch = (query) => {
        this.setState({
            activeBtn: query
        },this.setActiveBtn)

        this.props.getFilmsData(query)
    }

    setActiveBtn = () => {
        setLocalStorage('activeBtn', this.state.activeBtn)
    }

    render(){
        let { activeBtn } = this.state
        let { activeSearch } = this
        return (
            <div className="Category">
                <button 
                    className={activeBtn === 'popular' ? 'activeBtn' : "buttonQuery"} 
                    onClick={() => activeSearch('popular')}
                >
                Popular
                </button>
                <button 
                    className={activeBtn === 'top_rated' ? 'activeBtn' : "buttonQuery"}
                    onClick={() => activeSearch('top_rated')}
                >
                Top Rate
                </button>
                <button
                    className={activeBtn === 'upcoming' ? 'activeBtn' : "buttonQuery"}
                    onClick={() => activeSearch('upcoming')}
                >
                Upcoming
                </button>
            </div>
        )
    }
}

let mapStateToProps = (state, ownProps) => ({})

let mapDispatchToProps = (dispatch, ownProps) => ({
    'getFilmsData': (query) => {
        dispatch({
            type: 'MOVIE_REQ',
        })

        axios.get(`https://api.themoviedb.org/3/movie/${query}?api_key=ecdb05cd357e8a79791b4473bf498636&language=en-US&page=1`)
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);