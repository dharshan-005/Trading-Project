import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <aside className="w-56 bg-black text-white min-h-screen p-4">
        <nav className="flex flex-col gap-4">
            <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
            <Link to="/market" className="hover:text-yellow-300">Market</Link>
            <Link to="/portfolio" className="hover:text-yellow-300">Portfolio</Link>
            <Link to="/trade" className="hover:text-yellow-300">Trade</Link>
            <Link to="/reports" className="hover:text-yellow-300">Reports</Link>
        </nav>
    </aside>
    </>
  )
}

export default Sidebar