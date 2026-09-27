import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import feeds from '../data/feed'
import passport1 from '../assets/passports/passport1.jpg'
import passport2 from '../assets/passports/passport2.jpg'
import passport3 from '../assets/passports/passport3.jpg'
import passport4 from '../assets/passports/passport4.jpg'
import passport5 from '../assets/passports/passport5.jpg'
import Category from '../Category/Category'
import './Hero.css'

const Hero = () => {
  const [ currentFeed, setCurrentFeed ] = useState(0)

  useEffect(()=>{
    const interval = 
      setInterval(()=>{
        setCurrentFeed((prev)=>{
          return prev === feeds.length - 1 ? 0 : prev + 1;
        })
      },10000)
    

    return (()=>clearInterval(interval))
  }, [])

  return (
    <div className="">
    <div className='hero'>
      <div className="hero-left">
          <h3 className='bridging'>Bridging the gap, building trust.</h3>
          <h1>The Smater Way to  <br />
            <span style={{color:'blue'}}>Find & Offer</span>  Trusted <br />
            Services.</h1>
            <p className='your-service'>yourService connects professionals who offer services to people who need them. communicate, agree, and get things done &mdash; all in one secure place.</p>

            <div className=" users-album">
            <img src={passport1} alt="" className='passport' />
            <img src={passport2} alt="" className='passport' />
            <img src={passport3} alt="" className='passport' />
            <img src={passport4} alt="" className='passport' />
            <img src={passport5} alt="" className='passport' />
            <p className='users-count'>120k+ Users</p>
            </div>
            <button> <Link to="/search" className='service-link'>I Need a Service</Link></button>
            <button>I Offer Services</button>
  
      </div>

      <div className="hero-right">
          <img src={feeds[currentFeed].image} alt=""  className="hero-image"/>
          <h1 className='hero-title'>{feeds[currentFeed].title}</h1>
      </div>
</div>
    {<Category/>}
</div>
  )
}

export default Hero;
