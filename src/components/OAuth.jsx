import {useLocation, useNavigate} from 'react-router-dom'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {doc, setDoc, getDoc, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'

function OAuth() {
    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            // Check for user in DB
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            // If user doesn't exist, create new user in DB
            if(!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }

            toast.success('Login successful. Redirected to homepage!', {
                autoClose: 1000,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                })
            navigate('/')
        } catch (error) {
            toast.error('Could not authorise credentials with Google. Please check and try again.')
        }
    }

  return (
    <div className='googleLogin'>
        <button className="googleIconDiv" onClick={onGoogleClick}>
            <img className="googleIconImg" src={googleIcon} alt="Google Login" />
        </button>
    </div>
  )
}
export default OAuth