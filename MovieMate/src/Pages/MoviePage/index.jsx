import React, { Component } from 'react';
import CardsList from '../../Components/CardsList';
import SearchForm from '../../Components/SearchForm';
import './style.css';

export default class MoviePage extends Component {

    state = {
        fetchObj: [],
        addedFilms: [],
    }

    addLocalFilm = () => {
        localStorage.setItem('localFilm', JSON.stringify(this.state.addedFilms))
    }

    _onDelete = (id) => {
        this.setState(prevState => ({
            addedFilms: prevState.addedFilms.filter(item => item.id !== id)
        }),this.addLocalFilm)
    }

    _onAdd = (id) => {
        const result = this.state.addedFilms.find(film => film.id === id)
        if (result === undefined) {
            this.state.fetchObj.map(item => {
                if(item.id === id){
                    const  movieCard = {
                        id: item.id,
                        filmName: item.filmName,
                        release: item.release,
                        rating: item.rating,
                        img: item.img
                    }

                    this.setState(prevState => ({
                        addedFilms: [...prevState.addedFilms, movieCard]
                    }),this.addLocalFilm)
                }
            })
        }
    }

    _searchFilm = (query) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=ecdb05cd357e8a79791b4473bf498636&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error('Error');
            }
        })
        .then(data => {
            console.log(data)
            const listFilms = data.results.map(item => {
                return{
                    id: item.id,
                    filmName: item.original_title,
                    text: item.overview,
                    rating: item.vote_average,
                    release: item.release_date,
                    img: `https://image.tmdb.org/t/p/w300${item.poster_path}`
                }
            })
            this.setState({
                fetchObj: listFilms
            })
        })
        .catch(err => {
            console.log("Error => ", err)
        })
    }

    _getFilmsFromCategory = (category) => {
        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=ecdb05cd357e8a79791b4473bf498636&language=en-US&page=1`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const listFilms = data.results.map(item => ({
                    id: item.id,
                    filmName: item.original_title,
                    text: item.overview,
                    rating: item.vote_average,
                    release: item.release_date,
                    img: `https://image.tmdb.org/t/p/w300${item.poster_path}`
                }
            ))
                this.setState({
                    fetchObj: listFilms
                })
            })
        .catch(err => {
            console.log("Error => ", err)
        })
    }

    componentWillMount() {
        this._getFilmsFromCategory('popular')

        if(localStorage.hasOwnProperty('localFilm')){
            const local = localStorage.getItem('localFilm');
            this.setState({
                addedFilms: JSON.parse(local)
            })
        }
    }

    render() {

        return (
            <div className="Main">
                <SearchForm arrFilms={this.state.addedFilms} onDelete={this._onDelete} fromCategory={this._getFilmsFromCategory} search={this._searchFilm}/>
                <CardsList films={this.state.fetchObj} add={this._onAdd}/>
            </div>
        )
    }
}
