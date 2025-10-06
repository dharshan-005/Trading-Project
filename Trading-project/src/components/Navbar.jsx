import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="h-16 bg-black shadow flex items-center pr-8 text-white">
            <h1 className=''><span className="font-bold text-lg text-white">ADDA</span></h1>
            <input type='text' placeholder='Search' className='rounded-full bg-black border ml-auto border-grey-100 placeholder:italic placeholder:text-[12px] pl-2 text-[12px]'/>
            <div className="flex flex-row space-x-8 ml-auto">
              <NavLink 
                to="/dashboard" 
                className={ ({ isActive }) => 
                isActive ? "text-blue-500" : "text-white"}>Dashboard
              </NavLink>
              <NavLink 
                to="/market" 
                className={ ({ isActive }) => 
                isActive ? "text-blue-500" : "text-white"}>Market
              </NavLink>
              <NavLink to="/portfolio" className={ ({ isActive }) => isActive ? "text-blue-500" : "text-white"}>Portfolio</NavLink>
              <NavLink to="/trade" className={ ({ isActive }) => isActive ? "text-blue-500" : "text-white"}>Trade</NavLink>
              <NavLink to="/reports" className={ ({ isActive }) => isActive ? "text-blue-500" : "text-white"}>Reports</NavLink>
              {/* <NavLink to="/montecarlo" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-white'}>Monte Carlo</NavLink>
              <NavLink to="/sentiment" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-white'}>Sentiment</NavLink> */}
              <NavLink to="/orderbook" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-white'}>Orderbook</NavLink>
              {/* <NavLink to="/backtestpanel" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-white'}>Backtest Panel</NavLink> */}
            </div>  
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