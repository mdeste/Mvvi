import {Link} from 'react-router-dom'
import heartIcon from '../../assets/svg/heartIcon.svg'

function WatchlistItem({listArray}) {
  return (
    <main className="mainResult">
        <div className="searchResultContainer">
            <div className="searchResultTitleLink">
                <Link className="searchResultLink" to={`/movie/${listArray?.data?.id}`}>{listArray?.data?.original_title}</Link>
            </div>
            <img src={heartIcon} alt="Heart Icon" className="heartIcon" />
            <div className="searchResultPosterContainer">
                <img src={`${process.env.REACT_APP_TMDB_IMGURL}${listArray?.data?.poster_path}`} alt="Movie Poster" className="searchResultPoster"/>
            </div>
            <div className="searchResultReleaseDate">
                Release year: {listArray?.data?.release_date.slice(0, -6)}
            </div>
            <div className="searchResultVoteAverage">
                Average rating: {listArray?.data?.vote_average}/10
            </div>
        </div>
    </main>
  )
}
export default WatchlistItem