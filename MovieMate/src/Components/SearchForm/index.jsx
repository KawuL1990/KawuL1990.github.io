import React, { Component } from 'react';
import Search from "../Search";
import WatchList from "../WatchList";

import './style.css';

export default class SearchForm extends Component {

    render() {
        const { arrFilms, onDelete, fromCategory, search } = this.props;
        return(
            <div className="SearchForm">
                <Search search={search}/>
                <div className="btnGroup">
                    <button className="btn__category" onClick={() => {fromCategory('popular')}}>POPULAR</button>
                    <button className="btn__category" onClick={() => {fromCategory('top_rated')}}>TOP_RATED</button>
                    <button className="btn__category" onClick={() => {fromCategory('upcoming')}}>UPCOMING</button>
                </div>
                <WatchList arrFilms={arrFilms} onDelete={onDelete}/>
            </div>
        )
    }
}
