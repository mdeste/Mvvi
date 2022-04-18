import {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import TmdbContext from '../context/tmdb/TmdbContext'

function Movie() {
  const {getMovie, movie} = useContext(TmdbContext)

  const params = useParams()

  useEffect(() => {
    getMovie(params.id)
  }, [])

  return (
    <div>{movie.original_title}</div>
  )
}
export default Movie