import {useEffect, useContext} from 'react'
import Spinner from '../components/Spinner'
import SearchResult from './results/SearchResult'
import TmdbContext from '../context/tmdb/TmdbContext'

function SearchResults() {
    const {results, loading, fetchResults} = useContext(TmdbContext)
   
    useEffect(() => {
        fetchResults()
    }, [])

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