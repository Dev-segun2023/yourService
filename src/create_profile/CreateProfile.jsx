import React from 'react'
import { useState } from 'react'
import {getAllStates, getLocalGovernments,getCities} from '@eh1z/nigerian-locations'
import './CreateProfile.css'
const CreateProfile = () => {
  const [image, setImage] = useState(null)
  const [portfolio, setPortfolio] = useState([])
  const [formData, setFormData] = useState({
    bio:'',
    category:'category',
    profession:'',
    services:[],
    state:'',
    lga:'',
    city:'',
    experience:'',
    

  })

  const states = getAllStates()
  console.log(states)

  const lga = formData.state ? getLocalGovernments(formData.state):[]
  console.log(lga)

  const cities = formData.lga ? getCities(formData.state,formData.lga):[]
  
  const handleSubmit = (e)=>{

  }

  const handleChange = (e)=>{
    const {name, value} = e.target
    setFormData((prevData)=>({
      ...prevData,
      [name]: value
    }))

  }

  const handlePortfolioChange = (e)=>{
    const files = Array.from(e.target.files)
    setPortfolio(files)
  }

  const handleImageChange = (e)=> {
    const file = e.target.files[0]
    setImage(file)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='create-profile-form'>
        <div className="form-group">
          <label htmlFor="">Profile-Photo</label>
          <input type="file" 
          id='Profile-photo'
          name='image'
          accept='image/*'
          onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
        <label htmlFor="bio">Bio</label>
        <textarea
        name='bio'
        id='Bio'
        placeholder='Tell service neders about yourself'
        value={formData.bio}
        onChange={handleChange}
        />
        </div>
        <div className="form-group">
          <label htmlFor="category"></label>
          <select name="category" id="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="category">category</option>
            <option value="IT">IT</option>
            <option value="cleaning">Cleaning</option>
            <option value="catering">catering</option>
            <option value="logistics">logistics</option>
            <option value="electrical">electrical</option>
            <option value="mechanical">mechanical</option>
            <option value="carpentary">carpentory</option>
            <option value="electonics">electronics</option>
            <option value="painting">painting</option>
            <option value="tutoring">tutoring</option>
            <option value="others">others</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="profession">profession</label>
          <input type="text"
          name='profession' 
          placeholder='house Painter'
          value={formData.profession}
          onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="services">Services</label>
          <input type="textarea" 
          name='services'
          placeholder='cleaning, funmigation, etc'
          value={formData.services}
          onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">state</label>
          <select name="state" id="state"
            placeHolder='Lagos'
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            {states.map((state, index)=>
              <option value={state} key={index}>{state}</option>
            )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="LGA">LGA</label>
          <select name="lga" id="lga"
            value={formData.lga}
            onChange={handleChange}
            disabled={!formData.state}
          >
            <option value="">Select LGA</option>
           {lga.map((lga,index)=>
            <option value={lga} key={index}>{lga}</option>
           )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">city</label>
          <select name="city" id="city"
            value={formData.city}
            onChange={handleChange}
            disabled={!formData.lga}
          >
            <option value="">select city</option>
           {cities.map((city,index)=>
            <option value={city}key={index}>{city}</option>
           )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="experience">experience</label>
          <input type="text"
          name='experience' 
          placeholder='3 years'
          value={formData.experience}
          onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="portfolio">portfolio</label>
          <input type="file" 
          multiple
          name='portfolio'
          accept= "image/*"
          placeholder='Upload your portfolio'
          />
        </div>
        
      </form>
    </div>
  )
}

export default CreateProfile