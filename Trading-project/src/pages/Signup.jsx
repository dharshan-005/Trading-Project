import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
      <h2 className="text-xl font-semibold mb-4 text-white">Sign Up</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded bg-black" required />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded bg-black" required />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded bg-black" required />
        <div>
          <Link to="/login" className='text-white '>Already have an account? <span className='hover:underline cursor-pointer'>Login</span></Link>
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
    </>
  )
}

export default Signup