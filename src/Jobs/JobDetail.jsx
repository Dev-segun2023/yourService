import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useAxiosFetch from '../hooks/useAxiosFetch'
import './JobDetail.css'
const JobDetail = () => {
  const {id} = useParams()

  const {data:job, isLoading} = useAxiosFetch(`/jobs/${id}`)
  const findId = job?.id === Number(id)
  if(!findId){
    return <h3 style={{marginTop:"250px",textAlign:"center"}}>Job not availabe</h3>
  } 
  return (
    <div className='job-detail-page'>
      
      <h3>JobDetail</h3>

      <div className="job-details">
        <div>
          <h3>Job Title</h3>
          <p>{job.jobTitle}</p>
      </div>
      <div>
        <h3>Job Description</h3>
       <h>{job.jobDescription}</h>
      </div>
      <div>
        <h3>Job Category</h3>
       <p>{job.jobCategory}</p>
      </div>
      <div>
        <h3>Job Location</h3>
        <p>{job.jobCity}, {job.jobLga}, {job.jobState}</p>
      </div>
      <div>
        <h3>Job Status</h3>
        <p>{job.jobStatus}</p>
      </div>
      <button><Link to={`/bid/${id}`}>Bid</Link></button>

      <Link to="/jobs">Back to jobs</Link>
    </div>
    </div>
  )
}

export default JobDetail