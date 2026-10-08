import { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import useAxiosFetch from '../hooks/useAxiosFetch'
import api from '../Api/baseUrl'
import './SignUp.css'


const SignUp = () => {
  const [accountType, setAccountType] = useState('service-needer')
  const [checkBox, setCheckBox ] = useState(false)
  const [error, setError] = useState('')

  const {data:users} = useAxiosFetch('/users')

  
 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: ''
  })
  
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    if(formData.password !== formData.confirmPassword){
      setError('Passwords do not match')
      return;
    }

    const existingUser = users.find(user => user.emailAddress === formData.emailAddress)
    if(existingUser){
      setError('Email address already exists')
      return;
    }
    try {
      const fetchUsers = await api.get('/users')
      const data = fetchUsers.data;
  
      const id = data.length ? data[data.length -1].id +1 : 1;
  
      const collectedInputs = {
          id,
        ...formData,
        accountType,
        checkBox
      }
      const response = await api.post('/users', collectedInputs)
      console.log(response.data)
      navigate('/login')
    } catch (error) {
      console.log(error.message)
    }

  //   console.log(
     
  //     {
  //     ...formData,
  //     accountType,
  //     checkBox
  //   }
  // )

  }

  return (
    <div className="signup-page">

      <div className="signup-card">

        {/* Header */}

        <div className="signup-header">

          <h1>
            your<span>Service</span>
          </h1>

          <h2>Create your account</h2>

          <p>
            Join yourService and connect with trusted people.
          </p>

        </div>


        {/* Account Type */}

        <div className="account-type">

          <p>I want to:</p>

          <div className="account-options">

            <button
              type="button"
              className={
                accountType === 'service-needer'
                  ? 'account-option active'
                  : 'account-option'
              }
              // name='accountType'
              onClick={() => setAccountType('service-needer')}
            >
              <strong>Find a Service</strong>
              <span>I'm looking for a service</span>
            </button>


            <button
              type="button"
              className={
                accountType === 'service-provider'
                  ? 'account-option active'
                  : 'account-option'
              }
              // name='accountType'
              onClick={() => setAccountType('service-provider')}
            >
              <strong>Offer a Service</strong>
              <span>I provide services</span>
            </button>

          </div>

        </div>


        {/* Form */}

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          <div className="name-row">

            <div className="form-group">

              <label htmlFor="firstName">
                First Name
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="lastName">
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="emailAddress"
              placeholder="Enter your email"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {error && <p style={{color:'red'}}>{error}</p>}

          </div>

          <label className="terms">

            <input
              type="checkbox"
              name='terms'
              required
              onChange={()=>setCheckBox(!checkBox)}
            />

            <span>
              I agree to the Terms of Service and Privacy Policy.
            </span>

          </label>

          


          <button
            type="submit"
            className="signup-button"
          >
            Create Account
          </button>

        </form>


        {/* Login */}

        <div className="login-text">

          Already have an account?

          <Link to="/login">
            Log In
          </Link>

        </div>

      </div>

    </div>
  )
}

export default SignUp