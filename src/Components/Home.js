import React from 'react'
import HeaderComponent from './Header'
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='bodyhome'>
    <Link to="/login"><button  className="login-btnh" type="submit">
    Order Now
  </button></Link>
    </div>
  )
}

export default Home