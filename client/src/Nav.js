import React from 'react'
import {Link} from 'react-router-dom'
import './Nav1.css'

const Nav = () => {
  return (
    <div>
        <ul className='Nav-container'>
            <Link to='/register'><li className='items'>Regiser</li></Link>
            <Link to='/login'><li className='items'>Login</li></Link>
        </ul>
    </div>
  )
}

export default Nav


