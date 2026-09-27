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
    <div className="user-profile">
      {currentUser && userProfile ?
      <>        
        <img src={userProfile.image} alt="user" />
        <h3>{currentUser.firstName} {currentUser.lastName}</h3>
        <h3>{currentUser.lastName}</h3>
      </>
      : <p>loading user...</p>

      }
      </div>
  )
}

export default Profile