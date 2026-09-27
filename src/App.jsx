import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Search from './Search/search';
import Profile from './Profile/profile';
import LogIn from './Header/LogIn';
import SignUp from './Header/SignUp';
import {DataProvider} from '../Context/AuthContext'

import './App.css'

function App() {

     return(
      <DataProvider >
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </div>
      </DataProvider>
     )
  
}

export default App
