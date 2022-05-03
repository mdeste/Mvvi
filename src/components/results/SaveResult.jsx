import {useState, useEffect, useContext, useRef} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {setDoc, deleteDoc, serverTimestamp, doc, getDoc} from 'firebase/firestore'
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
    addedToWatchlist: false,
  })
  const [docExists, setDocExists] = useState(false)

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
            userRef: user.uid,
            addedToWatchlist: true,
          })
        }
      })
    }

    return () => {
      isMounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  useEffect(() => {
    const checkDocExists = async () => {
      const docRef = doc(db, "movieLists", original_title)
      const docSnap = await getDoc(docRef) 
      
      if (docSnap.exists()) {
        setDocExists(true)
      } else {
       setDocExists(false)
      }
    }

    checkDocExists()
  }, [original_title])

  const firestoreDataCopy = {
    ...firestoreData, 
    timestamp: serverTimestamp()
  }

    const addToWatchlist = async (e) => {
      e.preventDefault()
      if(!loggedIn) {
        toast.error("Please log in to save a film to your list.")
      } else {
        await setDoc(doc(db, 'movieLists', original_title), firestoreDataCopy)
        toast.success("Movie added to your watchlist!")
        setDocExists(true)
      }
    }

    const removeFromWatchlist = async (e) => {
      e.preventDefault()
      if (window.confirm("Are you sure you wish to delete this movie from your watchlist?")) {
        await deleteDoc(doc(db, 'movieLists', original_title))
      }
      setDocExists(false)
      toast.success("Successfully deleted movie from watchlist!")
    }

  if (docExists === true) {
    return (
        <div className="saveRemoveFromListBar">
            <button type="submit" id="saveToList" className="saveRemoveFromListButton" onClick={removeFromWatchlist}>REMOVE FROM WATCHLIST</button>
        </div>
    )
  } else {
    return (
      <div className="saveRemoveFromListBar">
          <button type="submit" id="saveToList" className="saveRemoveFromListButton" onClick={addToWatchlist}>ADD TO WATCHLIST</button>
      </div>
    )
  }
}
export default SaveResult