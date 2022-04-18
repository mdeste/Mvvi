import {useState, useContext} from 'react'
import { toast } from 'react-toastify'
import TmdbContext from '../../context/tmdb/TmdbContext'

function MoreResults() {
  let [pageNum, setPageNum] = useState(1)

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
    setPageNum(prevState => prevState + 1)

    moreResults(pageNum)
  }
  }
  return (
    <div className="moreResultsBar">
			<button type="button" className="moreResultsButton" onClick={loadMoreResults}>MORE RESULTS</button>
	  </div>
  )
}
export default MoreResults