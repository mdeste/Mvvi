import {useContext} from 'react'
import TmdbContext from '../context/tmdb/TmdbContext'
import SearchResults from '../components/SearchResults'
import ResultDropdownSearch from '../components/results/ResultDropdownSearch'
import ResultStats from '../components/results/ResultStats'
import ResultsOrder from '../components/results/ResultsOrder'
import MoreResults from '../components/results/MoreResults'

function Home() {
  const {results} = useContext(TmdbContext)

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">EXPLORE</p>
      </header>
      
      <ResultDropdownSearch />

      {results.length > 0 && (
        <div className="resultsOrderAndLength">
        <ResultsOrder />
        <ResultStats />
      </div>
      )}

      <main className="mainDivExploreContent">
        <SearchResults />
        {results.length >= 20 && (
          <MoreResults />
        )}
      </main>
    </div>
  )
}
export default Home