import React from 'react'

const Login = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
      <h2 className="text-xl font-semibold mb-4 text-white">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded bg-black" required/>
        <input type="password" placeholder="Password" className="w-full border p-2 rounded bg-black" required/>
        <div>
          <a className='text-white hover:underline cursor-pointer'>Forgot Password?</a>
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
    </>
  )
}

export default Login

// Want to add google id login method
// Want to add new page