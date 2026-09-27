import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

  const handleLogout = ()=>{
    setIsAuthenticated(false)
    navigate('/')
  }

  return (
    <div className='Header'>
      <nav className='nav'>
          <Link to="/" className='logo'><h3>your<span style={{color:'blue', fontSize:'22px'}}>Service</span></h3></Link>

        <ul>
          {/* <li>Home</li> */}
          <li>How It Works</li>
          <li>Services</li>
          <li>Service Providers</li>
          <li>Service Needers</li>
          <li>About Us</li>
        </ul>
        </nav>
      <div className="access-account">
        { isAuthenticated ?
            <>
            <Link to="/profile"><button className='profile'>Moi</button></Link>
            <button className='log-out' onClick={handleLogout}>Log Out</button>
            </>
          :
        <>
        <Link to="/login"><button className='log-in'>Log In</button></Link>
        <Link to="/signup"><button className='sign-up'>Sign Up</button></Link>
        </>
        }
        </div>

    </div>
  )
}

export default Header