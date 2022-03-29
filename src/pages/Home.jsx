import SearchResults from '../components/SearchResults'
import ResultDropdownSearch from '../components/results/ResultDropdownSearch'

function Home() {
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">EXPLORE</p>
      </header>

      <ResultDropdownSearch />

      <main className="mainDivExploreContent">
        <SearchResults />
      </main>
    </div>
  )
}
export default Home