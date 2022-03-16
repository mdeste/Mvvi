import {useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent!')
    } catch (error) {
      toast.error('Could not send password reset email.')
    }
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">FORGOT PASSWORD</p>
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
          <div className="passwordResetLink">
            <button className="resetLinkButton">SEND PASSWORD RESET LINK!</button>
          </div>
        </form>
        <div className="logInBar">
          <Link to="/sign-in" className="backToSignUpLink">
            <button className="logInButton">LOGIN PAGE</button>
          </Link>
        </div>
      </main>
    </div>
  )
}
export default ForgotPassword