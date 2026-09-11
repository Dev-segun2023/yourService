import { useState, useEffect } from 'react'
import feeds from '../data/feed'
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
    <div className='hero'>
      <div className="hero-left">
          <h3>Bridging the gap, building trust.</h3>
          <h1>The Smater Way to  <br />
            <span style={{color:'blue'}}>Find & Offer</span>  Trusted <br />
            Services</h1>
            <p>yourService connects professionals who offer services to people who need them. communicate, agree, and get things done &mdash; all in one secure place.</p>

            <button>I Need a Service</button>
            <button>I Offer Services</button>
  
      </div>

      <div className="hero-right">
          <h1 className='hero-title'>{feeds[currentFeed].title}</h1>
          <img src={feeds[currentFeed].image} alt=""  className="hero-image"/>
      </div>

    </div>
  )
}

export default Hero;
