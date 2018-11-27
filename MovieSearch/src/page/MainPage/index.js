import React, { Component } from 'react'
import MoviesList from '../../components/MoviesList';

class MainPage extends Component {
    render () {
        return (
            <div className="MainPage">
                <MoviesList />
            </div>
        )
    }
}

export default MainPage