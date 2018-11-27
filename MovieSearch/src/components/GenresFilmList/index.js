import React, { Component } from 'react'
import { connect } from 'react-redux'
import GenresFilmListItem from '../GenresFilmListItem'
import './style.css'

const GenresFilmList = ({filmsByGenres}) => {
    return (
        <div className="GenresFilmList">
            {
                filmsByGenres.loading === true ? (
                    <h1>LOADING...</h1>
                ) : (
                    filmsByGenres.loaded && filmsByGenres.data.results.map(
                        (film, key) => <GenresFilmListItem key={key} {...film}/>
                    )
                )
            }
        </div>
    )
}

let mapStateToProps = (state, ownProps) => ({
    filmsByGenres: state.filmsByGenres
})

export default connect(mapStateToProps, null)(GenresFilmList)