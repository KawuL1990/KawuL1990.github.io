let initialState = {
    loading: false,
    loaded: false,
    error: [],
    data: null
}

const Movie = ( state = initialState, action) => {
    switch( action.type ){
      case 'CURRENT_MOVIE_REQ':
        return {
          ...state,
          loading: true,
        }

      case 'CURRENT_MOVIE_SUCCESS':
        return {
          ...state,
          loading: false,
          loaded: true,
          data: action.payload
        }

      case 'CURRENT_MOVIE_ERROR':
        return {
            ...state,
            error: [...state.error, action.payload]
          }
  
      default:
        return state;
    }
  }
  
  
  export default Movie;