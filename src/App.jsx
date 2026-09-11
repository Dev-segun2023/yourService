import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import LogIn from './Header/LogIn';
import SignUp from './Header/SignUp';
import './App.css'

function App() {

     return(
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </div>
     )
  
}

export default App
