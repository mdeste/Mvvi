import {Link} from 'react-router-dom'

function UserList() {
  return (
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