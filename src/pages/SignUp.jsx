import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {
  const [showPassword, setShowpassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const {name, email, password} = formData

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
      <div className="nameInputDiv">
        <p className="pageParagraph">&nbsp;&nbsp;&nbsp;Email:</p>
        <input type="text" 
        className="nameInput" 
        placeholder="name" 
        id="name" 
        value={name} 
        onChange={onChange}/>
        </div>

        <div className="emailInputDiv">
        <p className="pageParagraph">&nbsp;&nbsp;&nbsp;Email:</p>
        <input type="email" 
        className="emailInput" 
        placeholder="example@example.com" 
        id="email" 
        value={email} 
        onChange={onChange}/>
        </div>

        <div className="passwordInputDiv">
        <p className="pageParagraph">Password:</p>
        <input type={showPassword ? 'text' : 'password'} 
        className="passwordInput" 
        placeholder="Password" 
        id="password" 
        value={password} 
        onChange={onChange}/>
        <img src={visibilityIcon} 
        alt="show password" 
        className="showPassword" 
        onClick={() => setShowpassword((prevState) => !prevState)}/>
        </div>

        <div className="forgotPasswordTextDiv">
        <Link to="/forgot-password" className="forgotPasswordLink">
        FORGOT PASSWORD? CLICK HERE!  
        </Link>
        </div>
        
        <div className="signInTextDiv">
        <Link to="/sign-in" className="signInLink">
        ALREADY HAVE AN ACCOUNT? SIGN IN HERE! 
        </Link>
        </div>

        <div className="signUpBar">
        <button className="signUpButton">SIGN UP</button>
        </div>
      </form>

      {/* Google OAuth */}
    </main>
    </div>
    </>
  )
}
export default SignUp