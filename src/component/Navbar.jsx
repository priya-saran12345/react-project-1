import React from 'react'
import logo from '../image/logo.png'

const Navbar = () => {
  return (
    <div className='nav container align-items-center d-flex w-100 justify-content-between px-4'>
        <img src={logo}  alt='this is the logo'className='h-10'  />
        <ul className='d-flex'>
            <li> <a href='' target='# ' className='text-decoration-none'>Home </a></li>
            <li> <a href='' target='#' className='text-decoration-none'>About</a></li>
            <li> <a href='' target='#' className='text-decoration-none ' >Contact us </a></li>        
        </ul>
<button className='btn btn-danger'> Login</button>
    </div>
  )
}

export default Navbar