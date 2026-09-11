import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
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
      <Link to="/login"><button className='log-in'>Log In</button></Link>
      <Link to="/signup"><button className='sign-up'>Sign Up</button></Link>
    </div>

    </div>
  )
}

export default Header