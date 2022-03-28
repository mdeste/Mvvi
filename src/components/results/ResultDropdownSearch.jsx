function ResultDropdownSearch() {
  return (
    <>
    <select name="genre" id="genreSelect" className="genreSelectDropdown">
        <option value="defaultGenre">GENRE</option>
		<option value="&with_genres=28">ACTION</option>
		<option value="&with_genres=12">ADVENTURE</option>
		<option value="&with_genres=16">ANIMATION</option>
		<option value="&with_genres=35">COMEDY</option>
		<option value="&with_genres=80">CRIME</option>
		<option value="&with_genres=99">DOCUMENTARY</option>
		<option value="&with_genres=18">DRAMA</option>
		<option value="&with_genres=10751">FAMILY</option>
		<option value="&with_genres=14">FANTASY</option>
	    <option value="&with_genres=36">HISTORY</option>
		<option value="&with_genres=27">HORROR</option>
		<option value="&with_genres=10402">MUSIC</option>
		<option value="&with_genres=9648">MYSTERY</option>
		<option value="&with_genres=10749">ROMANCE</option>
		<option value="&with_genres=878">SCI-FI</option>
		<option value="&with_genres=10770">TV MOVIES</option>
		<option value="&with_genres=53">THRILLER</option>
		<option value="&with_genres=10752">WAR</option>
		<option value="&with_genres=37">WESTERN</option>
    </select>
    <select name="releaseYear" id="releaseYearSelect" className="releaseYearSelectDropdown">
        <option value="default-decade">RELEASE DECADE</option>
		<option value="&primary_release_date.gte=2020-01-01&primary_release_date.lte=2022-12-31&">2020 – 2022</option>
		<option value="&primary_release_date.gte=2010-01-01&primary_release_date.lte=2019-12-31&">2010 – 2019</option>
		<option value="&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31&">2000 – 2009</option>
		<option value="&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&">1990 – 1999</option>
		<option value="&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31&">1980 – 1989</option>
		<option value="&primary_release_date.gte=1970-01-01&primary_release_date.lte=1979-12-31&">1970 – 1979</option>
		<option value="&primary_release_date.gte=1960-01-01&primary_release_date.lte=1969-12-31&">1960 – 1969</option>
		<option value="&primary_release_date.gte=1950-01-01&primary_release_date.lte=1959-12-31&">1950 – 1959</option>
		<option value="&primary_release_date.gte=1940-01-01&primary_release_date.lte=1949-12-31&">1940 – 1949</option>
		<option value="&primary_release_date.gte=1930-01-01&primary_release_date.lte=1939-12-31&">1930 – 1939</option>
		<option value="&primary_release_date.gte=1920-01-01&primary_release_date.lte=1929-12-31&">1920 – 1929</option>
		<option value="&primary_release_date.gte=1910-01-01&primary_release_date.lte=1919-12-31&">1910 – 1919</option>
		<option value="&primary_release_date.gte=1900-01-01&primary_release_date.lte=1909-12-31&">1900 – 1909</option>
    </select>
    <select name="userRating" id="userRatingSelect" className="userRatingSelectDropdown">
        <option value="default-rating">USER RATING</option>
		<option value="&vote_average.gte=9&">90% OR HIGHER</option>
		<option value="&vote_average.gte=8&">80% OR HIGHER</option>
		<option value="&vote_average.gte=7&">70% OR HIGHER</option>
		<option value="&vote_average.gte=6&">60% OR HIGHER</option>
		<option value="&vote_average.gte=5&">50% OR HIGHER</option>
		<option value="&vote_average.gte=4&">40% OR HIGHER</option>
		<option value="&vote_average.gte=3&">30% OR HIGHER</option>
		<option value="&vote_average.gte=2&">20% OR HIGHER</option>
		<option value="&vote_average.gte=1&">10% OR HIGHER</option>
		<option value="&vote_average.gte=0&">00% OR HIGHER</option>
    </select>
    <div className="searchBar">
            <button className="searchButton">SEARCH!</button>
    </div>
    </>
  )
}
export default ResultDropdownSearch