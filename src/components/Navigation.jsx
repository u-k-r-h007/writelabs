import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    

        <nav className='nav'>

            <div>Logo</div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/user">Create User</Link>
                <Link to="/show">Show User</Link>
            </div>

        </nav>
    
  )
}

export default Navigation