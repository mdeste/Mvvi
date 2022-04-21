import {useState, useEffect, useContext, useRef} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useAuthStatus} from '../../hooks/useAuthStatus'
import {toast} from 'react-toastify'
import TmdbContext from '../../context/tmdb/TmdbContext'

function SaveResult() {
  const [firestoreData, setFirestoreData] = useState({
    id: 0,
    poster_path: '',
    original_title: '',
    release_date: '',
    vote_average: 0,
  })

  const {movie} = useContext(TmdbContext)

  const {
    id, 
    poster_path,
    original_title,
    release_date,
    vote_average
  } = movie

  const auth = getAuth()

  const isMounted = useRef(true)

  useEffect(() => {
    if(isMounted) {
      onAuthStateChanged(auth, (user) => {
        if(user) {
          setFirestoreData({
            id: id,
            poster_path: poster_path,
            original_title: original_title,
            release_date: release_date,
            vote_average: vote_average, userRef: user.uid
          })
        } else {
          toast.error("Authentication error. Please check your login credentials and try again.")
        }
      })
    }

    return () => {
      isMounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

    const {loggedIn} = useAuthStatus()

    const addToWatchlist = (e) => {
      e.preventDefault()
      if(!loggedIn) {
        toast.error("Please log in to save a film to your list.")
      } else {
        toast.success("Movie added to your watchlist!")
        console.log(firestoreData)
      }
    }

  return (
    <div className="saveRemoveFromListBar">
        <button type="submit" id="saveToList" className="saveRemoveFromListButton" onClick={addToWatchlist}>ADD TO WATCHLIST</button>
    </div>
  )
}
export default SaveResult