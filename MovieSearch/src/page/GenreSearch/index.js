import React, { Component } from 'react'
import GenresList from '../../components/GenresList'
import GenresFilmList from '../../components/GenresFilmList'
import { Helmet } from "react-helmet";
import { Switch, Route } from 'react-router'

class GenreSearch extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="GenreSearch">
                <Helmet>
                    <title>Search by Genre</title>
                </Helmet>
                <GenresList {...this.props}/>
                <Switch>
                    <Route path="/search_by_genre/:genre" component={GenresFilmList} />
                </Switch>
            </div>
        )
    }
}

export default GenreSearch