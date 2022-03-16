import {useState} from 'react'
import {toast} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import OAuth from '../components/OAuth'
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

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword
      (
        auth, 
        email, 
        password
      )

      if(userCredential.user) {
        toast.success('Login successful. Redirecting to homepage!', {
          autoClose: 1000,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          })
        navigate('/')
      }
    } catch (error) {
      toast.error('Something went wrong. Please check your credentials and try again.')
    }
  }

  return (
    <>
    <div className="pageContainer">
    <header>
      <p className="pageHeader">LOG IN</p>
    </header>
    <main className="mainDivPageContent">
      <form onSubmit={onSubmit}>
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
      <p className="oAuthCallToAction">OR SIGN IN WITH GOOGLE</p>
        <OAuth />
    </main>
    </div>
    </>
  )
}
export default SignIn