import {useContext} from 'react'
import TmdbContext from '../context/tmdb/TmdbContext'

function ResultStats() {
    const {results} = useContext(TmdbContext)

  return (
    <div className="resultStats">
        <p className="resultStatsText">
            {results.length} RESULTS
        </p>
    </div>
  )
}
export default ResultStats