import React from 'react'

import { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAxiosFetch from '../hooks/useAxiosFetch'
import AuthContext from '../../Context/AuthContext'
import './Login.css'

const Login = () => {
  const {data} = useAxiosFetch('http://localhost:3500/users')
  const navigate = useNavigate()
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(null)
   const {isAuthenticated, setIsAuthenticated,setCurrentUser} = useContext(AuthContext)


    const handleSubmit = (e) => {
    e.preventDefault()
    const user = data.find(user => user.emailAddress === emailAddress && user.password === password)
    if(!user){
      setLoginError('invalid account login details')
      return;
    }
   if(user){
    setIsAuthenticated(true)
    setCurrentUser(user)
    navigate('/')
   }


    console.log({
      user
      // emailAddress,
      // password
    })
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h1>
            your<span>Service</span>
          </h1>

          <h2>Welcome Back 👋</h2>

          <p>
            Log in to connect with trusted service providers.
          </p>
        </div>

        <form  className="login-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <div className="password-label">
              <label htmlFor="password">Password</label>

              <Link to="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
              <p style={{color:'red'}}>{loginError}</p>
          <button type="submit" className="login-button">
            Log In
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="signup-text">
          Don't have an account?

          <Link to="/signup">
            Sign Up
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Login