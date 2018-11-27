let initialState = {
    loading: false,
    loaded: false,
    error: [],
    data: []
}

const moviesList = ( state = initialState, action) => {
    switch( action.type ){
      case 'MOVIE_REQ':
        return {
          ...state,
          loading: true,
        }

      case 'MOVIE_SUCCESS':
        return {
          ...state,
          loading: false,
          loaded: true,
          data: [...action.payload.data.results]
        }

      case 'MOVIE_ERROR':
        return {
            ...state,
            error: [...state.error, action.payload]
          }
  
      default:
        return state;
    }
  }
  
  
  export default moviesList;