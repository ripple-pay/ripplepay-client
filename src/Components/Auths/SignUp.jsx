import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import Navbar from '../navbar/Navbar'


const SignUp = () => {
    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.email || !formData.password) return toast.error('All fields are required')

        dispatch(authUserLogin({ formData, toast, navigate }))
    }
    return (
        <div className='w-full h-screen py-4 px-5'>
            <Navbar />
            <div className='my-8'>
                <div className='flex w-full justify-center items-center'>
                    <h1 className='text-[30px] mb-4'>Sign Up</h1>
                </div>
                <form action="" className='mb-8 w-3/4 justify-center h-[400px] rounded-sm shadow-2xl bg-white mx-auto border-black py-10 '>
                    <div className='flex gap-y-5 w-full'>
                        <div className='w-1/2 mx-4'>
                            <p>First Name</p>
                            <input type="text" name="" id="" className='border w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Business Name</p>
                            <input type="text" name="" id="" className='border w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Phone number</p>
                            <input type="text" name="" id="" className='border w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Password</p>
                            <input type="text" name="" id="" className='border w-full  h-[40px] rounded-sm mb-2' placeholder='' />

                        </div>
                        <div className='w-1/2 mx-4'>
                            <p>Last Name</p>
                            <input type="text" name="" id="" className='border w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Business Email</p>
                            <input type="text" name="" id="" className='border w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Address</p>
                            <input type="text" name="" id="" className='border w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Confirm Password</p>
                            <input type="text" name="" id="" className='border w-full  h-[40px] rounded-sm mb-2' placeholder='' />


                        </div>



                    </div>
                    <div className='flex justify-center mt-2'>
                        <button className='bg-blue-500  w-2/4 px-4 py-2 text-white italic uppercase cursor-pointer'> Sign up</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp