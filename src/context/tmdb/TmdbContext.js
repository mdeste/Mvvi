import { createContext, useReducer } from "react";
import TmdbReducer from "./TmdbReducer";

const TmdbContext = createContext()

const TMDB_URL = process.env.REACT_APP_TMDB_URL
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN

export const TmdbProvider = ({children}) => {
    const initialState = {
        results: [],
        loading: false
    }

    const [state, dispatch] = useReducer(TmdbReducer, initialState)

    // Get initial results (testing purposes)
    const fetchResults = async () => {
        setLoading()

        const response = await fetch(`${TMDB_URL}=${TMDB_TOKEN}`)

        const data = await response.json()

        dispatch({
            type: "GET_RESULTS",
            payload: data.results,
        })
    } 

    // Set Loading
    const setLoading = () => dispatch({
        type: "SET_LOADING"
    })

    return <TmdbContext.Provider value={{
        results: state.results, 
        loading: state.loading,
        fetchResults,
    }}>
        {children}
    </TmdbContext.Provider>
}

export default TmdbContext