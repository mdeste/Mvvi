import SearchResults from '../components/SearchResults'
import ResultDropdownSearch from '../components/results/ResultDropdownSearch'
import ResultStats from '../components/results/ResultStats'
import ResultsOrder from '../components/results/ResultsOrder'

function Home() {
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">EXPLORE</p>
      </header>
      
      <ResultDropdownSearch />

      <div className="resultsOrderAndLength">
        <ResultsOrder />
        <ResultStats />
      </div>

      <main className="mainDivExploreContent">
      
        <SearchResults />
      </main>
    </div>
  )
}
export default Home