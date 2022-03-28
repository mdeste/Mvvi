import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import PrivateRouteChangePassword from './components/PrivateRouteChangePassword'
import SiteHeaderLogo from './components/SiteHeaderLogo'
import About from './pages/About'
import ChangePassword from './pages/ChangePassword'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Movie from './pages/Movie'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UserList from './pages/UserList'
import {TmdbProvider} from './context/tmdb/TmdbContext'

function App() {
  return (
    <TmdbProvider>
    <>
      <Router>
      <SiteHeaderLogo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:original_title' element={<Movie />} />
          <Route path='/*' element={<NotFound />}/>
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/change-password' element={<PrivateRouteChangePassword />}>
            <Route path='/change-password' element={<ChangePassword />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/user-list' element={<UserList />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer 
      autoClose={3000} 
      theme="colored"/>
    </>
    </TmdbProvider>
  );
}

export default App;