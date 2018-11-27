let initialState = {
    loading: false,
    loaded: false,
    error: [],
    data: []
}

const SimilarMovie = ( state = initialState, action) => {
    switch( action.type ){
      case 'SIMILAR_MOVIE_REQ':
        return {
          ...state,
          loading: true,
        }

      case 'SIMILAR_MOVIE_SUCCESS':
        return {
          ...state,
          loading: false,
          loaded: true,
          data: action.payload
        }

      case 'SIMILAR_MOVIE_ERROR':
        return {
            ...state,
            error: [...state.error, action.payload]
          }
  
      default:
        return state;
    }
  }
  
  
  export default SimilarMovie;