import {getAuth} from 'firebase/auth'
import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {toast} from 'react-toastify'

function Profile() {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name, email} = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    toast.success('Logout successful. Redirected to homepage!', {
      autoClose: 1000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      })
    navigate('/')
  }

  return (
    <div className="profileContainer">
      <header>       
          <p className="pageHeader">MY PROFILE</p>        
      </header>
      <div className="logOutBar">
        <button type="button" className="logOutButton" onClick={onLogout}>LOG OUT</button>
      </div>
      <main className="mainDivPageContent">
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">
            Profile Details
          </p>
        </div>
        <div className="profileCard">
            <p className="profileParagraph">Username: {name}</p>
            <p className="profileParagraph">Email:&nbsp; {email}</p>
            <div className="changePasswordTextDiv">
              <Link to="/change-password" className="changePasswordLink">
              CHANGE PASSWORD
              </Link>
            </div>
            <div className="homepageBar">
            <Link to="/" className="homepageLink">
              <button className="homepageButton">HOMEPAGE</button>
            </Link>
            </div>
        </div>
      </main>
    </div>
  )
}
export default Profile