import {useState} from 'react'
import './Search.css'

const Search = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  return (
    <form className='search-form'>
      <div className='form-group'>
        <label htmlFor="search">What service do you need?</label>
        <input 
            type="text" 
            id='search'
            placeholder='e.g. Home Cleaning. Airport Pickup...'
            disabled
        />
      </div>
      <div className='form-group'>
          <label htmlFor="category">Category :</label>
          <select 
             name="category" 
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="painting">painting</option>
            <option value="plumbing">plumbing</option>
            <option value="tutoring">tutoring</option>
            <option value="electrical">electrical</option>
            <option value="transportation">transportation</option>
          </select>
          </div>
      <div className='form-group'>
          <label htmlFor="location">Location</label>
          <select
             type="text"
              id='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder='e.g. Mushin,Lagos, Nigeria'
              >
            <option value="Mushin,Lagos, Nigeria">Mushin,Lagos, Nigeria</option>
            <option value="Oshodi,Lagos, Nigeria">Oshodi,Lagos, Nigeria</option>
            <option value="Ipaja,Lagos, Nigeria">Ipaja,Lagos, Nigeria</option>
            <option value="Ikeja,Lagos, Nigeria">Ikeja,Lagos, Nigeria</option>
            <option value="Yaba,Lagos, Nigeria">Yaba,Lagos, Nigeria</option>

            </select>
      </div>
        <button>Search Services</button>

    </form>
  )
}

export default Search