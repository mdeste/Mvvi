import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import About from './pages/About'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UserList from './pages/UserList'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Private Route to Profile Page when Authenticated */}
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/user-list' element={<UserList />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
