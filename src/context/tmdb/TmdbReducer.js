const TmdbReducer = (state, action) => {
    switch(action.type) {
        case "GET_RESULTS": 
            return {
                ...state,
                results: action.payload,
                loading: false,
            }
        case "SET_LOADING": 
            return {
                ...state,
                loading: true
            }
        default: 
            return state
    }
}

export default TmdbReducer