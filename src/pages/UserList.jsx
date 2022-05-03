import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {useAuthStatus} from '../hooks/useAuthStatus'
import {doc, collection, getDocs, query, where, orderBy} from 'firebase/firestore'
import {db} from '../firebase.config'
import Spinner from '../components/Spinner'
import WatchlistItem from '../components/watchlist/WatchlistItem'

function UserList() {
  const [loading, setLoading] = useState(true)
  const [listArray, setListArray] = useState(null)
  
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

      {!loading && listArray?.length > 0 && (
        <>
          <ul className="movieList">
            {listArray.map((data) => {
              return <WatchlistItem 
              key={data.id}
              listArray={data}
              id={data.id}
              />
            })}
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