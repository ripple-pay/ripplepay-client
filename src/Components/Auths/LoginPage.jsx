import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Navbar from '../navbar/Navbar'

const LoginPage = () => {
 
    return (
        <div className='w-full h-screen py-4 px-5'>
            <Navbar />
            <div className='my-20'>
                <div className='flex w-full justify-center items-center'>
                    <h1 className='text-[30px] mb-4'>Login Page</h1>
                </div>
                <form className='flex flex-col gap-y-5 w-[800px] h-[350px] rounded-sm shadow-2xl bg-white mx-auto border-black py-20'>
                    <input type="text" className="flex  border w-3/4 mx-auto h-[50px] rounded-lg text-black pl-4" placeholder='Email' />
                    <input type="password" className="flex  border w-3/4 mx-auto h-[50px] rounded-lg text-black pl-4" placeholder='Password' />

                    <Link to={'/user-dashboard'} className='w-1/2 mx-auto'>
                        <button
                          
                            className='px-5 py-2 inline h-[50px] w-full mx-auto bg-indigo-500 text-white  rounded-sm'>Login</button>

                    </Link>

                </form>
            </div>
        </div>
    )
}

export default LoginPage