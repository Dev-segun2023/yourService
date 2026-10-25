import { useContext } from 'react'
import useAxiosFetch from '../hooks/useAxiosFetch'
import AuthContext from '../../Context/AuthContext'

import './Dashboard.css'

const Dashboard = () => {
  const {isAuthenticated, currentUser} = useContext(AuthContext)
  const {data:jobs} = useAxiosFetch('/jobs')
  const {data:bids} = useAxiosFetch('/bids')
  const {data:users} = useAxiosFetch('/users')

   

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard