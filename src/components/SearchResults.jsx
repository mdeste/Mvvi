import {useEffect, useState} from 'react'
import Spinner from '../components/Spinner'
import SearchResult from './results/SearchResult'

function SearchResults() {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetchResults()
    }, [])

    const fetchResults = async () => {
        const response = await fetch(`${process.env.REACT_APP_TMDB_URL}=${process.env.REACT_APP_TMDB_TOKEN}`)

        const data = await response.json()

        setResults(data.results)
        setLoading(false)
    }

    if(!loading) {
        return (
            <div className="searchResultsContainer">
                {results.map((results) => (
                    <SearchResult key={results.id} results={results}/>
                ))}
            </div>
          )
    } else {
        return (
            <Spinner />
        )
    }
}
export default SearchResults