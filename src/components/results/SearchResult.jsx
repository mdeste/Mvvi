import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import heartIcon from '../../assets/svg/heartIcon.svg'

function SearchResult({results: {original_title, poster_path, release_date, vote_average}}) {

  return (
    <main className="mainResult">
        <div className="searchResultContainer">
            <div className="searchResultTitleLink">
                <Link className="searchResultLink" to={`/movie/${original_title}`}>{original_title}</Link>
            </div>
            <img src={heartIcon} alt="Heart Icon" className="heartIcon" />
            <div className="searchResultPosterContainer">
                <img src={`${process.env.REACT_APP_TMDB_IMGURL}${poster_path}`} alt="Movie Poster" className="searchResultPoster"/>
            </div>
            <div className="searchResultReleaseDate">
                Release year: {release_date.slice(0, -6)}
            </div>
            <div className="searchResultVoteAverage">
                Average rating: {vote_average}/10
            </div>
        </div>
    </main>
  )
}

SearchResult.propTypes = {
    results: PropTypes.object.isRequired,
}

export default SearchResult