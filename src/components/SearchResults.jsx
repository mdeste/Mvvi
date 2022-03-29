import {useContext} from 'react'
import Spinner from '../components/Spinner'
import SearchResult from './results/SearchResult'
import TmdbContext from '../context/tmdb/TmdbContext'

function SearchResults() {
    const {results, loading} = useContext(TmdbContext)

    if(!loading) {
        return (
            <div className="searchResultsContainer">
                {results.length ? 
                (results.map((results) => (
                    <SearchResult key={results.id} results={results}/>
                ))) 
                : (
                <div className="noResultsTextContainer">
                    <p classname="noResultsText">No results. Please try different parameters!</p>
                </div>)}
            </div>
          )
    } else {
        return (
            <Spinner />
        )
    }
}
export default SearchResults