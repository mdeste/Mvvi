import { createContext, useReducer } from "react";
import TmdbReducer from "./TmdbReducer";

const TmdbContext = createContext()

const TMDB_URL = process.env.REACT_APP_TMDB_URL
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN
const TMDB_EXCLUDE = process.env.REACT_APP_TMDB_EXCLUDE
const TMDB_PAGENUM = process.env.REACT_APP_TMDB_PAGENUM

export const TmdbProvider = ({children}) => {
    const initialState = {
        results: [],
        loading: false
    }

    const [state, dispatch] = useReducer(TmdbReducer, initialState)

    // Get search results
    const fetchResults = async (select) => {
        setLoading()

        const pageNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        const paramString = select

        // const response = await fetch(`${TMDB_URL}=${TMDB_TOKEN}${TMDB_EXCLUDE}${paramString}`)

        const responses = await Promise.all(
            pageNums.map(async pageNum => {
                const res = await fetch(`${TMDB_URL}=${TMDB_TOKEN}${TMDB_EXCLUDE}${paramString}${TMDB_PAGENUM}${pageNum}`).then(res => res.json()).then(data => (dispatch({
                    type: "GET_RESULTS",
                    payload: data.results,
                })))
            })
        )

        // const data = await responses.json()

        // dispatch({
        //     type: "GET_RESULTS",
        //     payload: data.results,
        // })
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