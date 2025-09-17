import React from 'react'

const Signup = () => {
  return (
    <>
    <div>
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <button className="w-full bg-green-600 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
    </>
  )
}

export default Signup