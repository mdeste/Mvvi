import {useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import TmdbContext from '../context/tmdb/TmdbContext'
import Spinner from '../components/Spinner'

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
    original_language,
    overview,
    popularity,
    poster_path,
    release_date,
    revenue,
    runtime,
    vote_average
  } = movie

  if(loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">{original_title}</p>
        </header>
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