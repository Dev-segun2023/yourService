import React from 'react'

import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
    <nav className='nav'>
        <h3>your<span style={{color:'blue', fontSize:'22px'}}>Service</span></h3>

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
      <button className='log-in'>Log In</button>
      <button className='sign-up'>Sign Up</button>
    </div>

    </div>
  )
}

export default Header