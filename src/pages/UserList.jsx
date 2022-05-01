import {Link, useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {useAuthStatus} from '../hooks/useAuthStatus'
import {updateDoc, doc, collection, getDoc, getDocs, query, where, orderBy} from 'firebase/firestore'
import { db } from '../firebase.config'
import Spinner from '../components/Spinner'
import heartIcon from '../assets/svg/heartIcon.svg'


function UserList() {
  const [loading, setLoading] = useState(true)
  const [listArray, setListArray] = useState(null)
  const [listItem, setListItem] = useState(null)
  
  const {loggedIn, checkingStatus, uid} = useAuthStatus()

  useEffect(() => {
    const fetchUserWatchlist = async () => {
      const movieWatchlist = collection(db, 'movieLists')

      const q = query(movieWatchlist, 
        where('userRef', '==', uid), 
        orderBy('timestamp', 'desc'))

        const querySnap = await getDocs(q)

        let listArray = []

        querySnap.forEach((doc) => {
          return listArray.push({
            id: doc.id,
            data: doc.data()
          })
        })
        
        setListItem(listArray.original_title)
        setListArray(listArray)
        setLoading(false)
    }

    fetchUserWatchlist()
  }, [uid])

  if(checkingStatus) {
    return <Spinner />
  }

  if(!loggedIn) {
    return (
      <div className="pageContainer">
        <header>
          <p className="pageHeader">WATCHLIST</p>
        </header>
        <main className="mainDivAboutContent">
          <p className="aboutPageContent">
            You are not logged in. To view and add to your watchlist, please log in or create an account.
          </p>
        </main>
      </div>
    )
  } else return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">WATCHLIST</p>
      </header>

      {/* <p>{listArray[0].data.id}</p> */}

      {!loading && listArray?.length > 0 && (
        <>
          <ul className="movieList">
          <main className="mainResult">
        <div className="searchResultContainer">
            <div className="searchResultTitleLink">
                <Link className="searchResultLink" to={`/movie/${listArray[0].data.id}`}>{listArray[0].data.original_title}</Link>
            </div>
            <img src={heartIcon} alt="Heart Icon" className="heartIcon" />
            <div className="searchResultPosterContainer">
                <img src={`${process.env.REACT_APP_TMDB_IMGURL}${listArray[0].data.poster_path}`} alt="Movie Poster" className="searchResultPoster"/>
            </div>
            <div className="searchResultReleaseDate">
                Release year: {listArray[0].data.release_date.slice(0, -6)}
            </div>
            <div className="searchResultVoteAverage">
                Average rating: {listArray[0].data.vote_average}/10
            </div>
        </div>
    </main>
          </ul>
        </>
      )}

      <main className="mainDivAboutContent">
        <div className="homepageBar">
          <Link to="/" className="homepageLink">
            <button className="homepageButton">HOMEPAGE</button>
          </Link>
        </div>
      </main>
    </div>
  )
}
export default UserList