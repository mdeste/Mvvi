import {useState, useContext} from 'react'
import { toast } from 'react-toastify'
import TmdbContext from '../../context/tmdb/TmdbContext'

function MoreResults() {
  const [pageNum, setPageNum] = useState()

  const { moreResults } = useContext(TmdbContext)

  const loadMoreResults = (e) => {
    e.preventDefault()

    if(
      document.getElementById('releaseYearSelect').value + 
      document.getElementById('userRatingSelect').value + 
      document.getElementById('genreSelect').value === 
      ''
    ) {
      toast.error('Please select a search parameter from the dropdown list!')
  } else {
    moreResults()
  }
  }
  return (
    <div className="moreResultsBar">
			<button type="button" className="moreResultsButton" onClick={loadMoreResults}>MORE RESULTS</button>
	</div>
  )
}
export default MoreResults