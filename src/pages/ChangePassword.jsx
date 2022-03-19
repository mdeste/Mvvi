import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function ChangePassword() {
  const [showPassword, setShowpassword] = useState(false)
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
  })

  const {currentPassword, newPassword} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const changePassword = (e) => {
    e.preventDefault()
  const auth = getAuth()
  const user = auth.currentUser
  const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword)

  reauthenticateWithCredential(user, credential).then(() => {
    console.log("user reauthenticated")
  }).catch((error) => {
    console.log("user not reauthenticated")
  })

    const newUserPassword = newPassword

    reauthenticateWithCredential(user, credential).then(() => {
      updatePassword(user, newUserPassword).then(() => {
        toast.success("Successfully changed password!")
        navigate('/profile')
      })
    }).catch((error) => {
      toast.error("Failed to change password. Please check credentials and try again.")
    })

   
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">CHANGE PASSWORD</p>
        </header>
        
        <main className="mainDivPageContent">
        <form onSubmit={changePassword}>
          <div className="passwordInputDiv">
              <p className="pageParagraph">Current Password:</p>
              <input type={showPassword ? 'text' : 'password'} 
              className="passwordInput" 
              placeholder="Please enter password" 
              id="currentPassword" 
              value={currentPassword} 
              onChange={onChange}/>
              <img src={visibilityIcon} 
              alt="show password" 
              className="showPasswordIcon" 
              onClick={() => setShowpassword((prevState) => !prevState)}/>
          </div>
          <br /><br />
          <div className="passwordInputDiv">
              <p className="pageParagraph">&nbsp;&nbsp;&nbsp;&nbsp;New Password:</p>
              <input type={showPassword ? 'text' : 'password'} 
              className="passwordInput" 
              placeholder="Please enter password" 
              id="newPassword" 
              value={newPassword} 
              onChange={onChange}/>
              <img src={visibilityIcon} 
              alt="show password" 
              className="showPasswordIcon" 
              onClick={() => setShowpassword((prevState) => !prevState)}/>
          </div>
          <div className="changePasswordBar">
              <button className="changePasswordButton">CHANGE PASSWORD</button>
          </div>
          </form>

          <div className="profileBar">
            <Link to="/profile" className="profileLink">
              <button className="profileButton">PROFILE</button>
            </Link>
            </div>
        </main>
      </div>
    </>
  )
}
export default ChangePassword