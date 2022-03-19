import {Link} from 'react-router-dom'
import tmdbLogoIcon from '../assets/svg/tmdbLogoIcon.svg'

function About() {

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">ABOUT</p>
      </header>
      <main className="mainDivAboutContent">
        <p className="aboutPageContent">
          <em>mvvi</em> is a web project by Michael D'Este that allows you to generate lists of films by filtering via the criteria on the homepage.
          <br /><br />
          By signing up for an account with <em>mvvi</em>, you can save lists of films for future reference.
          <br /><br />
          This project uses the TMDB API but is not endorsed or certified by TMDB.
          <br /><br />
          For more information please visit <a href="https://www.themoviedb.org/about?language=en-GB" target="_blank" rel="noopener noreferrer">The Movie Database</a>, or alternatively view the API documentation <a href="https://developers.themoviedb.org/3" target="_blank" rel="noopener noreferrer">here</a>.
        </p>

        <img src={tmdbLogoIcon} alt="The Movie Database Logo" className="tmdbLogoIcon" />

        <div className="homepageBar">
          <Link to="/" className="homepageLink">
            <button className="homepageButton">HOMEPAGE</button>
          </Link>
        </div>
      </main>
    </div>
  )
}
export default About