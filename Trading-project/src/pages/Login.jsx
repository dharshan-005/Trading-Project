import React from 'react'

const Login = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <div>
          <a className='text-black hover:underline cursor-pointer'>Forgot Password?</a>
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
    </>
  )
}

export default Login