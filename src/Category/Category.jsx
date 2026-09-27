import React from 'react'
import { FaHome, FaBusAlt } from 'react-icons/fa'
import { FaComputer, FaGraduationCap, FaHandshakeSimple } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { RiStarSLine } from "react-icons/ri";
import { TbWorldExclamation } from "react-icons/tb";
import { ImUsers } from "react-icons/im";

import './Category.css'
const Category = () => {
  return (
    <div>
      <h1 className='popular'>Popuplar Categories</h1>
      <div className="category-container">
          <div className="category">
            <FaHome  className="category-icon"/>
            <p>Cleaning, Repairs, Maintenance</p>
          </div>
          <div className="category">
            <FaBusAlt className="category-icon"/>
            <p>Transport, Logistics</p>
          </div>
          <div className="category">
            <FaComputer className="category-icon"/>
            <p>IT, Software, Web, design</p>
          </div>
          <div className="category">
            <FaGraduationCap className="category-icon"/>
            <p>Education, Training, Lessons</p>
          </div>
          <div className="category">
            <MdOutlineHealthAndSafety className="category-icon"/>
            <p>Health, Wellness, Fitness, Nutrition</p>
          </div>
          <div className="category">
            <SlCalender className="category-icon"/>
            <p>Events, Entertainment, planning,</p>
          </div>
      </div>
      <div className="counts">
        <div className='count-group'>
          < ImUsers className='count-icon'/>
          <div>
            <h3>10K+</h3>
            <p>Active Users</p>
          </div>
        </div>
        <div className='count-group'>
          < FaHandshakeSimple className='count-icon'/>
          <div>
            <h3>2K+</h3>
            <p>Services required</p>
          </div>
        </div>
        <div className='count-group'>
          < RiStarSLine className='count-icon'/>
          <div>
            <h3>98%</h3>
            <p>positive Reviews</p>
          </div>
        </div>
        <div className='count-group'>
          < TbWorldExclamation className='count-icon'/>
          <div>
            <h3>36+</h3>
            <p>States Connected</p>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Category