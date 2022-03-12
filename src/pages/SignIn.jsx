import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
  const [showPassword, setShowpassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <>
    <div className="pageContainer">
    <header>
      <p className="pageHeader">LOG IN</p>
    </header>
    <main className="mainDivPageContent">
      <form>
        <div className="emailInputDiv">
        <p className="pageParagraph">&nbsp;&nbsp;&nbsp;Email:</p>
        <input type="email" 
        className="emailInput" 
        placeholder="Please enter email" 
        id="email" 
        value={email} 
        onChange={onChange}/>
        </div>

        <div className="passwordInputDiv">
        <p className="pageParagraph">Password:</p>
        <input type={showPassword ? 'text' : 'password'} 
        className="passwordInput" 
        placeholder="Please enter password" 
        id="password" 
        value={password} 
        onChange={onChange}/>
        <img src={visibilityIcon} 
        alt="show password" 
        className="showPasswordIcon" 
        onClick={() => setShowpassword((prevState) => !prevState)}/>
        </div>

        <div className="forgotPasswordTextDiv">
        <Link to="/forgot-password" className="forgotPasswordLink">
        FORGOT PASSWORD? CLICK HERE!  
        </Link>
        </div>
        
        <div className="signUpTextDiv">
        <Link to="/sign-up" className="signUpLink">
        DON'T HAVE AN ACCOUNT? SIGN UP HERE! 
        </Link>
        </div>

        <div className="logInBar">
        <button className="logInButton">LOG IN</button>
        </div>
      </form>

      {/* Google OAuth */}
    </main>
    </div>
    </>
  )
}
export default SignIn