import { combineReducers } from 'redux';
import moviesList from './moviesList';
import movie from './movie';
import similarMovie from './similarMovie';
import genres from './genres';
import filmsByGenres from './filmsByGenres';

const reducer = combineReducers({
    moviesList,
    movie,
    similarMovie,
    genres,
    filmsByGenres
});

export default reducer;