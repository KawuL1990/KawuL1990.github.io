import React, { Component } from 'react';
import './style.css';

class Search extends Component {

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
        return (
            <form className="Search" onSubmit={this._onSubmit}>
                <input required type="text" className="searchInput" value={this.state.searchInput} onChange={this._onSearch} placeholder="Search for movies by name..."/>
            </form>
        )
    }
}

export default Search;
