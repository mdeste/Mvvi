import { createContext, useReducer } from "react";
import TmdbReducer from "./TmdbReducer";

const TmdbContext = createContext()

const TMDB_URL = process.env.REACT_APP_TMDB_URL
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN
const TMDB_EXCLUDE = process.env.REACT_APP_TMDB_EXCLUDE

export const TmdbProvider = ({children}) => {
    const initialState = {
        results: [],
        loading: false
    }

    const [state, dispatch] = useReducer(TmdbReducer, initialState)

    // Get search results
    const fetchResults = async (select) => {
        setLoading()

        const paramString = select

        const response = await fetch(`${TMDB_URL}=${TMDB_TOKEN}${TMDB_EXCLUDE}${paramString}`)

        const data = await response.json()

        dispatch({
            type: "GET_RESULTS",
            payload: data.results,
        })
    }    
    
    const reorderResults = async (order) => {
        setLoading()

        const paramString1 = document.cookie
        const paramString2 = order

        const response = await fetch(`${TMDB_URL}=${TMDB_TOKEN}${TMDB_EXCLUDE}${paramString1}${paramString2}`)

        const data = await response.json()

        dispatch({
            type: "REORDER_RESULTS",
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
        reorderResults,
    }}>
        {children}
    </TmdbContext.Provider>
}

export default TmdbContext