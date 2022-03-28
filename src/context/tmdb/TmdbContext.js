import { createContext, useState } from "react";

const TmdbContext = createContext()

const TMDB_URL = process.env.REACT_APP_TMDB_URL
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN

export const TmdbProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchResults = async () => {
        const response = await fetch(`${TMDB_URL}=${TMDB_TOKEN}`)

        const data = await response.json()

        setResults(data.results)
        setLoading(false)
    } 

    return <TmdbContext.Provider value={{
        results, 
        loading,
        fetchResults
    }}>
        {children}
    </TmdbContext.Provider>
}

export default TmdbContext