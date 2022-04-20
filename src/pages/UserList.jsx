import {Link} from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
import Spinner from '../components/Spinner'

function UserList() {
  const {loggedIn, checkingStatus} = useAuthStatus()

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