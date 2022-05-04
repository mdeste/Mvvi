import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {ReactComponent as HeartIcon} from '../../assets/svg/heartIcon.svg'
import {collection, doc, getDoc, getDocs, where, query} from 'firebase/firestore'
import {useAuthStatus} from '../../hooks/useAuthStatus'
import {db} from '../../firebase.config'
import PropTypes from 'prop-types'


function SearchResult({results: {original_title, poster_path, release_date, vote_average, id}}) {
    const [docExists, setDocExists] = useState(false)
    const [firestoreId, setFirestoreId] = useState(null)

    const {loggedIn, uid} = useAuthStatus()

    useEffect(() => {
        const getDocData = async () => {
            if (loggedIn) {
                const q = query(collection(db, "movieLists"),  where("id", "==", id), where("userRef", "==", uid))
    
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                setFirestoreId(doc.id)
                console.log(uid)
              });
            }
        }
    
        getDocData()
      }, [firestoreId, id, loggedIn, uid])
    
      useEffect(() => {
        const checkDocExists = async () => {
          const docRef = doc(db, "movieLists", firestoreId)
          const docSnap = await getDoc(docRef) 
          
          if (docSnap.exists()) {
            setDocExists(true)
          } else {
           setDocExists(false)
          }
        }
    
        checkDocExists()
      }, [firestoreId])

  return (
    <main className="mainResult">
        <div className="searchResultContainer">
            <div className="searchResultTitleLink">
                <Link className="searchResultLink" to={`/movie/${id}`}>{original_title}</Link>
            </div>
            <HeartIcon className="heartIcon" style={{fill: docExists ? "#231F20" : "#F0F0F2"}}/>
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