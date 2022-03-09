import {useNavigate, useLocation} from 'react-router-dom'
import {ReactComponent as AboutIcon} from '../assets/svg/aboutMvviIcon.svg'
import {ReactComponent as MyListsIcon} from '../assets/svg/myListsIcon.svg'
import {ReactComponent as MyAccountIcon} from '../assets/svg/myAccountIcon.svg'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if(route === location.pathname) {
      return true
    }
  } 

  return (
    <footer className="navbarContainer">
      <nav className="navbarNav">
        <ul className="navbarListItemsContainer">
          <li className="navbarListItem" onClick={() => navigate('/about')}>
            <AboutIcon fill={pathMatchRoute('/about') ? '#BF3C30' : '#73241D'}
            width='36px' 
            height='36px' />
            <p className={pathMatchRoute('/about') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
              about
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/user-list')}>
            <MyListsIcon fill={pathMatchRoute('/user-list') ? '#BF3C30' : '#73241D'} 
            width='36px' 
            height='36px' />
            <p className={pathMatchRoute('/user-list') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
              watchlist
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/profile')}>
            <MyAccountIcon fill={pathMatchRoute('/profile') ? '#BF3C30' : '#73241D'} 
            width='36px' 
            height='36px' />
            <p className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
              profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
export default Navbar