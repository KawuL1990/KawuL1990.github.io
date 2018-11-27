import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import Header from './components/Header'
import MainPage from './page/MainPage';
import GenreSearch from './page/GenreSearch';
import Movie from './components/Movie';
import Logo from './components/Logo';
import Menu from './components/Menu';
import SearchForm from './components/SearchForm';
import { NavLink } from 'react-router-dom'


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header>
					<Logo text='Film Online'/>
					<Menu>
						<NavLink exact to="/" activeClassName="btnActive" className="btn">Movie List</NavLink>
						<NavLink to="/search_by_genre" activeClassName="btnActive" className="btn">search by genre</NavLink>
						<SearchForm />
					</Menu>
				</Header>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route path="/:id/about" component={Movie} />
					<Route path="/search_by_genre" component={GenreSearch} />
				</Switch>
			</div>
		);
	}
}

export default App;
