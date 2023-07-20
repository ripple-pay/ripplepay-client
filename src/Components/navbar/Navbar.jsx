import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between  py-5  px-4 rounded-sm z-[20px] shadow-lg'>
        <div>
          <Link to={"/"}>
            <h1 className='text-indigo-500 italic font-bold text-[25px] font-spacegrotesk'>Ripple<span className='text-pink-500'>Pay</span></h1>
          </Link>
        </div>
        <div className='flex gap-x-4'>
          <Link to={'/login'}>
            <button
              className='px-5 py-2 inline bg-indigo-500 text-white font-semibold rounded-sm'>Login</button>
          </Link>
          <Link to={"/signup"}>
            <button className='px-5 py-2 inline bg-pink-500 text-white font-semibold rounded-sm'>Signup</button></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar