import {useState, useEffect, useContext, useRef} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {useAuthStatus} from '../../hooks/useAuthStatus'
import {db} from '../../firebase.config'
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

  const {loggedIn} = useAuthStatus()

  const auth = getAuth()

  const {
    id, 
    poster_path,
    original_title,
    release_date,
    vote_average
  } = movie

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
            vote_average: vote_average, 
            userRef: user.uid
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

  const firestoreDataCopy = {
    ...firestoreData, 
    timestamp: serverTimestamp()
  }

    const addToWatchlist = async (e) => {
      e.preventDefault()
      if(!loggedIn) {
        toast.error("Please log in to save a film to your list.")
      } else {
        await addDoc(collection(db, 'movieLists'), firestoreDataCopy)
        toast.success("Movie added to your watchlist!")
      }
    }

  return (
    <div className="saveRemoveFromListBar">
        <button type="submit" id="saveToList" className="saveRemoveFromListButton" onClick={addToWatchlist}>ADD TO WATCHLIST</button>
    </div>
  )
}
export default SaveResult