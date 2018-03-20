import React, { Component } from 'react';
import MiniCard from "../MiniCard";
import './style.css';

export default class SearchForm extends Component {

    state = {
        searchInput: ''
    }

    _onSearch = (event) => {
        const value = event.target.value
        this.setState({
            searchInput: value
        })
    }

    _onSubmit = (event) => {
        event.preventDefault();

        this.props.search(this.state.searchInput)
    }

    render() {
        const { arrFilms, onDelete, fromCategory } = this.props;
        return(
            <div className="SearchForm">
                <form className="Search" onSubmit={this._onSubmit}>
                    <input type="text" className="searchInput" value={this.state.searchInput} onChange={this._onSearch}placeholder="Search for movies by name..."/>
                </form>
                <div className="btnGroup">
                    <button className="btn__category" onClick={() => {fromCategory('popular')}}>POPULAR</button>
                    <button className="btn__category" onClick={() => {fromCategory('top_rated')}}>TOP_RATED</button>
                    <button className="btn__category" onClick={() => {fromCategory('upcoming')}}>UPCOMING</button>
                </div>
                <div className="watchList">
                    <h1 className="watchList__title">WATCHLIST</h1>
                    {arrFilms.map(film =>
                        <MiniCard key={film.id} onClick={onDelete} {...film} />
                    )}
                </div>
            </div>
        )
    }
}
