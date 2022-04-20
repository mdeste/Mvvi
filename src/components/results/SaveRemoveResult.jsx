import {useState, useContext} from 'react'
import {useAuthStatus} from '../../hooks/useAuthStatus'
import {toast} from 'react-toastify'
import TmdbContext from '../../context/tmdb/TmdbContext'

function SaveRemoveResult() {
    const {loggedIn} = useAuthStatus()

    const addToWatchlist = () => {
      if(!loggedIn) {
        toast.error("Please log in to save a film to your list.")
      }
    }

    const removeFromWatchlist = () => {}

  return (
    <div className="saveRemoveFromListBar">
        <button className="saveRemoveFromListButton" onClick={addToWatchlist}>ADD TO WATCHLIST</button>
    </div>
  )
}
export default SaveRemoveResult