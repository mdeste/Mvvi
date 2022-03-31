import SearchResults from '../components/SearchResults'
import ResultDropdownSearch from '../components/results/ResultDropdownSearch'
import ResultStats from '../components/ResultStats'

function Home() {
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">EXPLORE</p>
      </header>

      <ResultDropdownSearch />

      

      <main className="mainDivExploreContent">
      <ResultStats />
        <SearchResults />
      </main>
    </div>
  )
}
export default Home