import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <>
    <div className="pageContainer">
    <header>
      <p className="pageHeader">404 - NOT FOUND</p>
    </header>
    <main className="mainDivPageContent">
        <p>The page you have navigated to does not exist. Please return to the homepage!</p>
        <div className="homepageBar">
        <button className="homepageButton">
            <Link to="/" className="homepageLink">HOMEPAGE</Link>
        </button>
        </div>
    </main>
    </div>
    </>
  )
}
export default NotFound