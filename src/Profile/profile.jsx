import React from 'react'
import {useState,useEffect, useContext} from 'react'
import useAxiosFetch from '../hooks/useAxiosFetch'
import AuthContext from '../../Context/AuthContext'

import './Profile.css'

const Profile = () => {
  const {isAuthenticated,currentUser} = useContext(AuthContext)
// const {data:users} = useAxiosFetch('http://localhost:3500/users')
const {data:profiles} = useAxiosFetch('http://localhost:3500/profiles')

if(!currentUser){
  return <p>loading user...</p>
}

const userProfile = profiles.find((profile) => profile.userId === currentUser.id)

console.log(userProfile)

  return (
    currentUser && userProfile ?
            
      <div className="user-profile">
        <div className="profile-photo">
          <img src={userProfile.image} alt="user" />
        </div>
        <div className="details">
          <h3>{currentUser.firstName} {currentUser.lastName}</h3>
          <div className='profession'>
            <h3>Profession:</h3>
            <p>{userProfile.profession}</p>
          </div>
          <div className='about'>
          <h3>About:</h3>
          <p>{userProfile.bio}</p>
          </div>
          <div className='services'>
            <h3>Services:</h3>
            <ul>
            {userProfile.services.map((service,index)=>
              <li key={index} className='ser'>{service}</li>
            )}
          </ul>
          </div>
        </div>

       
        </div>
      : <p>loading user...</p>

      
  )
}

export default Profile