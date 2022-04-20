import {useState, useContext} from 'react'
import {useAuthStatus} from '../../hooks/useAuthStatus'
import {toast} from 'react-toastify'
import TmdbContext from '../../context/tmdb/TmdbContext'

function RemoveResult() {
    const {loggedIn} = useAuthStatus()

    const removeFromWatchlist = () => {
      if(!loggedIn) {
        toast.error("Please log in to remove a film from your list.")
      }
    }

  return (
    <div className="saveRemoveFromListBar">
        <button className="saveRemoveFromListButton" onClick={removeFromWatchlist}>REMOVE FROM WATCHLIST</button>
    </div>
  )
}
export default RemoveResult