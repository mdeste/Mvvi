import {useState, useContext} from 'react'
import { toast } from 'react-toastify'
import TmdbContext from '../../context/tmdb/TmdbContext'

function ResultsOrder() {
  const [order, setOrder] = useState('')

  const { reorderResults, select } = useContext(TmdbContext)

  const changeOrder = (e) => setOrder(
    document.getElementById('orderSelect').value
  )   

  const handleReorder = (e) => {
		e.preventDefault()

		if(
				document.getElementById('releaseYearSelect').value + 
				document.getElementById('userRatingSelect').value + 
				document.getElementById('genreSelect').value === 
				''
			) {
				toast.error('Please select a search parameter from the dropdown list!')
		} else {
			reorderResults(order, select)
		}
	}

  return (
    <div className="orderDropdownContainer">
      <form onSubmit={handleReorder}> 
			<select name="order" id="orderSelect" className="resultsOrderDropdown" onChange={changeOrder}>
        <option value="">SORT RESULTS</option>
        <option value="&sort_by=primary_release_date.desc">Release Date Desc</option>
        <option value="&sort_by=primary_release_date.asc">Release Date Asc</option>
        <option value="&sort_by=original_title.desc">Title Desc</option>
        <option value="&sort_by=original_title.asc">Title Asc</option>
        <option value="&sort_by=vote_average.desc">Rating Desc</option>
        <option value="&sort_by=vote_average.asc">Rating Asc</option>
      </select>
      <div className="filterBar">
			  <button type="submit" className="filterButton">FILTER RESULTS!</button>
		  </div>
      </form>
    </div>
    
  )
}

export default ResultsOrder