import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" required />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" required />
        <div>
          <Link to="/login" className='text-black hover:underline cursor-pointer'>Already have an account? Login</Link>
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
    </>
  )
}

export default Signup