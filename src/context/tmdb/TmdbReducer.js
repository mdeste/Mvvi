const TmdbReducer = (state, action) => {
    switch(action.type) {
        case "GET_RESULTS": 
            return {
                ...state,
                results: action.payload,
                loading: false,
            }
        default: 
            return state
    }
}

export default TmdbReducer