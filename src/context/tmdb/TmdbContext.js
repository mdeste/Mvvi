import {createContext, useReducer} from "react";
import TmdbReducer from "./TmdbReducer";

const TmdbContext = createContext()

const TMDB_URL = process.env.REACT_APP_TMDB_URL
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN
const TMDB_EXCLUDE = process.env.REACT_APP_TMDB_EXCLUDE
const TMDB_PAGENUM = process.env.REACT_APP_TMDB_PAGENUM
const TMDB_SINGLEMOVIEURL = process.env.REACT_APP_TMDB_SINGLEMOVIEURL
const TMDB_SINGLEMOVIEKEY = process.env.REACT_APP_TMDB_SINGLEMOVIEKEY

export const TmdbProvider = ({children}) => {
    const initialState = {
        results: [],
        movie: {},
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
    
    // Reorder search results    
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

    // Get more results
    const moreResults = async (pageNum) => {
        setLoading()

        const paramString1 = document.cookie
        let paramString2 = pageNum+1

        const response = await fetch(`${TMDB_URL}=${TMDB_TOKEN}${TMDB_EXCLUDE}${paramString1}${TMDB_PAGENUM}${paramString2}`)

        const data = await response.json()

        dispatch({
            type: "MORE_RESULTS",
            payload: data.results,
        })
    }

    // Get single movie
    const getMovie = async (id) => {
        setLoading()

        const response = await fetch(`${TMDB_SINGLEMOVIEURL}${id}${TMDB_SINGLEMOVIEKEY}=${TMDB_TOKEN}`)

        if(response.status === 404) {
            window.location = '/*'
        } else {
            const data = await response.json()

             dispatch({
            type: "GET_MOVIE",
            payload: data,
        })
        }
    }

    // Set Loading
    const setLoading = () => dispatch({
        type: "SET_LOADING"
    })

    return <TmdbContext.Provider value={{
        id: state.id,
        results: state.results, 
        loading: state.loading,
        movie: state.movie,
        fetchResults,
        reorderResults,
        moreResults,
        getMovie,
    }}>
        {children}
    </TmdbContext.Provider>
}

export default TmdbContext