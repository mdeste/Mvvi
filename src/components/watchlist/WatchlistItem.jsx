import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../../firebase.config'
import {ReactComponent as HeartIcon} from '../../assets/svg/heartIcon.svg'

function WatchlistItem({listArray}) {
    const [docExists, setDocExists] = useState(false)

    useEffect(() => {
        const checkDocExists = async () => {
          const docRef = doc(db, "movieLists", listArray?.data?.original_title)
          const docSnap = await getDoc(docRef) 
          
          if (docSnap.exists()) {
            setDocExists(true)
          } else {
           setDocExists(false)
          }
        }
    
        checkDocExists()
      }, [listArray?.data?.original_title])

  return (
    <div className="mainDivExploreContent">
    <main className="mainResult">
        <div className="searchResultContainer">
            <div className="searchResultTitleLink">
                <Link className="searchResultLink" to={`/movie/${listArray?.data?.id}`}>{listArray?.data?.original_title}</Link>
            </div>
            <HeartIcon className="heartIcon" style={{fill: docExists ? "#231F20" : "#F0F0F2"}}/>
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
    </div>
  )
}
export default WatchlistItem