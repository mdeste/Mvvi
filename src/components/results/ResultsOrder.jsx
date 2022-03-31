import {useState} from 'react'

function ResultsOrder() {
  const [order, setOrder] = useState('')

  const changeOrder = (e) => setOrder(
    document.getElementById('orderSelect').value
  )   

  return (
    <div className="orderDropdownContainer">
      <form> 
			<select name="order" id="orderSelect" className="resultsOrderDropdown" onChange={changeOrder}>
        <option value="">SORT RESULTS</option>
        <option value="&sort_by=primary_release_date.desc">Release Date Desc</option>
        <option value="&sort_by=primary_release_date.asc">Release Date Asc</option>
        <option value="&sort_by=original_title.desc">Title Desc</option>
        <option value="&sort_by=original_title.asc">Title Asc</option>
        <option value="&sort_by=vote_average.desc">Rating Desc</option>
        <option value="&sort_by=vote_average.asc">Rating Asc</option>
      </select>
      </form>
    </div>
    
  )
}

export default ResultsOrder