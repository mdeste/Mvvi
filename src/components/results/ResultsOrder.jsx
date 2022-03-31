function ResultsOrder() {
  return (
    <div className="orderDropdownContainer">
			<select name="order" id="orderSelect" className="resultsOrderDropdown">
        <option value="">SORT RESULTS</option>
        <option value="&sort_by=primary_release_date.desc&">Release Date Desc</option>
        <option value="&sort_by=primary_release_date.asc&">Release Date Asc</option>
        <option value="&sort_by=original_title.desc&">Title Desc</option>
        <option value="&sort_by=original_title.asc&">Title Asc</option>
        <option value="&sort_by=vote_average.desc&">Rating Desc</option>
        <option value="&sort_by=vote_average.asc&">Rating Asc</option>
      </select>
    </div>
  )
}

export default ResultsOrder