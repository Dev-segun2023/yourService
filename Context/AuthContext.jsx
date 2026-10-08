import {useState, useEffect, createContext} from 'react'

const AuthContext = createContext({});

export const DataProvider = ({children})=>{
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)  
  const [jobStatus, setJobStatus] = useState('pending')


  return (
    <AuthContext.Provider value={{
      isAuthenticated,setIsAuthenticated
      ,currentUser,setCurrentUser,
      jobStatus, setJobStatus}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext; 