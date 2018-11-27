let initialState = {
    loading: false,
    loaded: false,
    error: [],
    data: null
}

const Genre = ( state = initialState, action) => {
    switch( action.type ){
      case 'GENRES_REQ':
        return {
          ...state,
          loading: true,
        }

      case 'GENRES_SUCCESS':
        return {
          ...state,
          loading: false,
          loaded: true,
          data: action.payload
        }

      case 'GENRES_ERROR':
        return {
            ...state,
            error: [...state.error, action.payload]
          }
  
      default:
        return state;
    }
  }
  
  
  export default Genre;