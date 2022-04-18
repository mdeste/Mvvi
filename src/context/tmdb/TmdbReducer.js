const TmdbReducer = (state, action) => {
    switch(action.type) {
        case "GET_RESULTS": 
            return {
                ...state,
                results: action.payload,
                loading: false,
            }
        case "REORDER_RESULTS": 
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
        case "MORE_RESULTS": 
            return {
                results: [...(state.results), ...action.payload],
                loading: false
            }
        default: 
            return state
    }
}

export default TmdbReducer