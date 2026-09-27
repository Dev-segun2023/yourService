import {useState, useEffect, createContext} from 'react'

const AuthContext = createContext({});

export const DataProvider = ({children})=>{
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)  


  return (
    <AuthContext.Provider value={{
      isAuthenticated,setIsAuthenticated
      ,currentUser,setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;