import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="h-16 bg-black shadow flex items-center px-6">
            <span className="font-bold text-lg text-white">Trading Platform</span>
            <div className="ml-auto space-x-2">
              <Link to="/login" className='text-blue-500 hover:underline cursor-pointer'>Login</Link>
              <a className='text-blue-300'>/</a>
              <Link to="/signup" className='text-blue-500 hover:underline cursor-pointer'>Signup</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar