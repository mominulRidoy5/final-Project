import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <div className='navBar'>
<Link className='navBtn' to='/'>Home</Link>
<Link  className='navBtn' to='/about'>About</Link>
<Link  className='navBtn' to='/contact'>Contact</Link>
<Link  className='navBtn' to='/help'>Help</Link>

    </div>
  </div>
  )
}
