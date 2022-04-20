import {useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import TmdbContext from '../context/tmdb/TmdbContext'
import Spinner from '../components/Spinner'
import SaveResult from '../components/results/SaveResult'
import RemoveResult from '../components/results/RemoveResult'

function Movie() {
  const {getMovie, movie, loading} = useContext(TmdbContext)

  const params = useParams()

  useEffect(() => {
    getMovie(params.id)
  }, [])

  const {
    genres,
    id,
    original_title,
    overview,
    poster_path,
    release_date,
    runtime,
  } = movie

  if(loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="moviePageContainer">
        <header>
          <p className="pageHeader">{original_title}</p>
        </header>
        <div className="moviePagePosterOverview">
          <img className="moviePagePoster" src={`${process.env.REACT_APP_TMDB_IMGURL}${poster_path}`} alt="Movie Poster" />
          <p className="movieOverview">{overview}</p>
        </div>
        <div className="movieDetails">
          <div className="releaseDate">
            <p className="releaseDateText">
              RELEASED:
            </p>
            <p className="releaseDateData">
              {release_date}
            </p>
          </div>
          {genres && (
            <div className="genreDetails">
              <p className="genreText">
                GENRES:
              </p>
              <p className="genreData">
                {genres[0].name}, {genres[1].name}
              </p>
            </div>
          )}
          <div className="runTime">
            <p className="runTimeText">
              RUNTIME:
            </p>
            <p className="runTimeData">
              {runtime} MINS
            </p>
          </div>
        </div>
        <div className="linkToTmdb">
            <p className="linkToTmdbText"><a href={`${process.env.REACT_APP_TMDB_TITLEURL}${id}`} target="_blank" rel="noopener noreferrer">MORE INFORMATION ON TMDB</a></p>
          </div>
          {/* add/remove from list component - check if ID present in user's firestore and display correct component */}
          <SaveResult />
          {/* <RemoveResult />  */}
        <div className="homepageBar">
          <Link to="/" className="homepageLink">
            <button className="homepageButton">HOMEPAGE</button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Movie