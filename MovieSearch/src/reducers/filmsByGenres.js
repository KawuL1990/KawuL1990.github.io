let initialState = {
    loading: false,
    loaded: false,
    error: [],
    data: null
}

const FilmsByGenres = ( state = initialState, action) => {
    switch( action.type ){
      case 'FILMS_GENRES_REQ':
        return {
          ...state,
          loading: true,
        }

      case 'FILMS_GENRES_SUCCESS':
        return {
          ...state,
          loading: false,
          loaded: true,
          data: action.payload
        }

      case 'FILMS_GENRES_ERROR':
        return {
            ...state,
            error: [...state.error, action.payload]
          }
  
      default:
        return state;
    }
  }
  
  
  export default FilmsByGenres;