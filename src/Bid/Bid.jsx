import {useState, useContext} from 'react'
import {format} from 'date-fns'
import { useParams, useNavigate } from 'react-router-dom'
import useAxiosFetch from '../hooks/useAxiosFetch'
import AuthContext from '../../Context/AuthContext'
import api from '../Api/baseUrl'
import './Bid.css'
const Bid = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {data:job, isLoading} = useAxiosFetch(`jobs/${id}`)
  const {data:bids} = useAxiosFetch('/bids')
  const allBids = Array.isArray(bids) ? bids : []
 
  const [formData, setFormData ] = useState({
    persuasion:'',
    phoneNumber:'',
    shareContact:false,
    bidStatus:'pending'
  })
  const [resume, setResume] = useState(null)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {isAuthenticated,currentUser } = useContext(AuthContext)
  // if(!isAuthenticated || !currentUser){
  // return (<p style={{marginTop:'250px', color:'orange', padding:'10px', textAlign:'center'}}>Please Login to Bid</p>)


const jobId = id;

if (!isAuthenticated || !currentUser) {
  return (
    <p style={{ marginTop: '250px', textAlign: 'center' }}>
      Please Login to Bid
    </p>
  )
}

if (isLoading) {
  return <p>Loading job details...</p>
}

if (!job || !job.id) {
  return <p style={{marginTop: "250px", textAlign:"center", color:"red"}}>
    This job could not be found.
    </p>
}


const handleChange =(e)=>{
const {name,value,type, checked} = e.target;
setFormData((prev)=>(
  {
  ...prev,
    [name]:type === 'checkbox' ? checked : value
  }
))
}
const handleFile = (e)=>{
  const file = e.target.files[0]
  setResume(file)
}


const handleSubmit = async(e)=>{
  e.preventDefault();

if (String(job.userId) === String(currentUser.id)) {
  setError('You cannot bid on your own job.')
  return
}
  const existingBid = allBids.find(bid =>
    String(bid.jobId) === String(jobId) &&
    String(bid.userId) === String(currentUser.id));
  if (existingBid) {
    setError('You have already placed a bid for this job. Wait for the job provider to respond.');
    return;
  }
  const id = allBids.length
  ? Math.max(...allBids.map(bid => Number(bid.id))) + 1
  : 1
  const userId = currentUser.id;

if (!job || !job.id) {
  setError('This job could not be found.')
  return
}
if (!formData.persuasion.trim()) {
  setError('Please explain why you are suitable for this job.')
  return
}
  
  const collectedInputs = {
    id,
    jobId,
    userId,
    ...formData,
    bidDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    resume
  }
  try {
      setIsSubmitting(true)
    const result = await api.post('/bids', collectedInputs)
    setFormData({
      persuasion:'',
      phoneNumber:'',
      shareContact:false,
      bidStatus:'pending'
    })
    setResume(null)
    // navigate('/dashboard')
    
  } catch (error) {
    setError('Failed to submit bid. Please try again.')
  }finally {
  setTimeout(()=>{setIsSubmitting(false)},3000)
}
}

return (
  
    <div className='bid-page'>

      <h3>JobDetail</h3>

      <div className="job-details">
        <div>
          <h3>Job Title</h3>
          <p>{job?.jobTitle}</p>
      </div>
      <div>
        <h3>Job Description</h3>
       <p>{job?.jobDescription}</p>
      </div>
      <div>
        <h3>Job Category</h3>
       <p>Category: {job?.jobCategory}</p>
      </div>
      <div>
        <h3>Job Location</h3>
        <p>{job?.jobCity}, {job?.jobLga}, {job?.jobState}</p>
      </div>
      <div>
        <h3>Job Status</h3>
        <p>{job?.jobStatus}</p>
      </div>
      </div>

      <form  onSubmit={handleSubmit}>
        <div className="persuasion">
       <label htmlFor="persuasion">Why i should get the job:</label>
       <textarea
       id="persuasion"
       name='persuasion'
       placeholder='i will deliver'
       value={formData.persuasion}
       onChange={handleChange}
       />
       </div>

      <div className="file-upload">
        <label>Optional:Upload a file(photo of your previous jobs or Resume)</label>
       <input type="file" 
       className='file'
       accept="image/*,.pdf,.doc,.docx"
       onChange={handleFile}
       />
       </div>

       <div className="contact">
        <label htmlFor="contact">Contact Information</label>
        <input type="text" 
        id="contact"
        name='phoneNumber' 
        placeholder='Enter your phone number or email address' 
        value={formData.phoneNumber}
        onChange={handleChange}
         />
       </div>
       <div className="share-contact">
        <label htmlFor="shareContact">Share Contact Information</label>
        <input type="checkbox" 
        id="shareContact"
        name='shareContact'
        checked={formData.shareContact}
        onChange={handleChange}
         />
       </div>

        {/* <button type='submit'>Submit Bid</button> */}
        <button type="submit" disabled={isSubmitting}>
  {isSubmitting ? 'Submitting...' : 'Submit Bid'}
</button>
      </form>

      {error && <p className='error'>{error}</p>}
      <p className='notice'>If this Job Provider Accepts your Bid and consents to sharing their contact, you will have the priviledge to speak via Telephone call. </p>
      </div>
      
    
  )
}


export default Bid