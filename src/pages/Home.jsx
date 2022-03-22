import Spinner from '../components/Spinner'
import SearchResults from '../components/SearchResults'

function Home() {
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">EXPLORE</p>
      </header>

      <main className="mainDivExploreContent">
        <SearchResults />
      </main>
    </div>
  )
}
export default Home