import {useEffect, useState, useRef} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const [uid, setUid] = useState('')
    const isMounted = useRef(true)

    useEffect(() => {
        if(isMounted) {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    setLoggedIn(true)
                    setUid(auth.currentUser.uid)
                }
                setCheckingStatus(false)
            })
        }
        
        return () => {
            isMounted.current = false
        }
    }, [isMounted])

  return {loggedIn, checkingStatus, uid}
}