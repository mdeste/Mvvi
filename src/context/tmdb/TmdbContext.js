import { createContext, useReducer } from "react";
import TmdbReducer from "./TmdbReducer";

const TmdbContext = createContext()

const TMDB_URL = process.env.REACT_APP_TMDB_URL
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN

export const TmdbProvider = ({children}) => {
    const initialState = {
        results: [],
        loading: true
    }

    const [state, dispatch] = useReducer(TmdbReducer, initialState)

    const fetchResults = async () => {
        const response = await fetch(`${TMDB_URL}=${TMDB_TOKEN}`)

        const data = await response.json()

        dispatch({
            type: "GET_RESULTS",
            payload: data.results,
        })
    } 

    return <TmdbContext.Provider value={{
        results: state.results, 
        loading: state.loading,
        fetchResults,
    }}>
        {children}
    </TmdbContext.Provider>
}

export default TmdbContext