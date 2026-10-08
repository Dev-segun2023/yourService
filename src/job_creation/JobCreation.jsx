import {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import  AuthContext from '../../Context/AuthContext';
import useAxiosFetch from '../hooks/useAxiosFetch';
 import {getAllStates,getCities,getLocalGovernments} from '@eh1z/nigerian-locations'
 import api from '../Api/baseUrl'
import './JobCreation.css';

const JobCreation = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [jobData, setJobData] = useState({
    jobTitle:'',
    jobDescription:'',
    jobCategory:'',
    // jobStatus:'pending',
    jobState:'',
    jobLga:'',
    jobCity:''
  });
  const navigate = useNavigate();
  const {jobStatus, isAuthenticated, currentUser} = useContext(AuthContext)
  const {data:jobs, isLoading} = useAxiosFetch('/jobs');
  
  const states = getAllStates();
  const lgas = jobData.jobState ? getLocalGovernments(jobData.jobState):[]
  const cities = jobData.jobLga? getCities(jobData.jobState,jobData.jobLga):[]



  const handleChange = (e)=>{
    const {name,value} = e.target;
    setJobData((prevData)=>({
      ...prevData,
      [name]:value
  })) 
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
      const id = jobs.length? jobs[jobs.length-1].id +1 : 1;
  const userId = currentUser.id

  const collectedInputs = {
    id,
    ...jobData,
    userId
  }

    try {
      const result = await api.post('/jobs', collectedInputs)
      setSuccess('job created successfully')
      setError('')
      setJobData({
        jobTitle:'',
        jobDescription:'',
        jobCategory:'',
        jobState:'',
        jobLga:'',
        jobCity:''
      })
      navigate('/dashboard')
    } catch (error) {
      setError('job Creation Failed')
    }
   

    

  }
  if(!currentUser && !isAuthenticated){
    return (
      <p style={{marginTop: "250px", textAlign:"center"}}>Please Login to access this page</p>
    )
  }

  return (
    <div className='jobCreation'>
    <h3>
      Kudos to you for wanting to create a Job opportunity <span>😊</span>
      </h3>
    
    <form className='jobForm' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="job-title">Job Title</label>
          <input type="text"
          name='jobTitle'
          id='job-title' 
          placeholder='e.g AC repair'
          value={jobData.jobTitle}
          onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobdescription">Job Description</label>
          <textarea
           name="jobDescription" 
           id="jobdescription"
           placeholder='I am looking for a skilled AC repairer to fix my AC. it suddenly stopped cooling.'
           value={jobData.jobDescription}
           onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobcategory">Category</label>
            <select name="jobCategory" id="jobcategory"
            value={jobData.jobCategory}
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
          <label htmlFor="jobState">Job State</label>
          <select name="jobState"
           id="jobState"
           value={jobData.jobState}
           onChange={handleChange}
          >
            <option value="">Select State</option>
            {states.map((state,index)=>{
              return (
                <option key={index} value={state}>{state}</option>
              )
            })}
          </select>
        </div>
        <div className="form-group">
           <label htmlFor="jobLga">Job Lga</label>
          <select name="jobLga"
           id="jobLga"
           value={jobData.jobLga}
           onChange={handleChange}
           disabled={!jobData.jobState}
          >
            <option value="">SelectLga</option>
            {lgas.map((lga,index)=>{
              return (
                <option key={index} value={lga}>{lga}</option>
              )
            })}
          </select>
        </div>
        <div className="form-group">
           <label htmlFor="jobCity">Job city</label>
          <select name="jobCity"
           id="jobCity"
           value={jobData.jobCity}
           onChange={handleChange}
           disabled={!jobData.jobLga}
          >
            <option value="">Select City</option>
            {cities.map((city,index)=>{
              return (
                <option key={index} value={city}>{city}</option>
              )
            })}
          </select>
        </div>
        {error && <p style={{color:'red'}}>{error}</p> }
        {success && <p style={{color:'green'}}>{success}👍</p>}
         
        
        <div>
          <button type='submit'>Create Job</button>
        </div>
      </form>
    </div>
  )
}

export default JobCreation