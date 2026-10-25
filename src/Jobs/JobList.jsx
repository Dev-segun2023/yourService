import {useContext} from 'react'
import { Link } from 'react-router-dom'
import useAxiosFetch from '../hooks/useAxiosFetch'
import './JobList.css'

const JobList = () => {
  const {data:jobs, isLoading} = useAxiosFetch('/jobs')
  const {data:users} = useAxiosFetch('/users')




  if(isLoading){
    return <p style={{marginTop:"250px", textAlign:"center"}}>please wait, Loading Jobs</p>
  }
  return (
    <div className='job-list-page'>
      {jobs.map((job)=>{
        const provider = users.find((user)=> user.id === job.userId)
        return (
      <div key={job.id} className='job'>

          <Link to={`/jobs/${job.id}`} className='job-link'>
          <div>
            <h3>Job provided By:</h3>
            <p>{provider.firstName} {provider.lastName}</p>
            </div>
            <div>
              <h3>Job Title</h3>
             <p>{job.jobTitle}</p>
             </div>
             <div>
             <h4>Description</h4>
            <p>{(job.jobDescription).length > 25 ? (job.jobDescription).slice(0,25)+"..." : job.jobDescription}</p>
            </div>
            
            <div>            
              <h3>Job Status</h3>
            <p>{job.jobStatus}</p>
            </div>

          </Link>
         
        </div>)
      })}

    </div>
  )
}

export default JobList