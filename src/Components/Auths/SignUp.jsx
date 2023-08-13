import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar'
import { toast } from 'react-toastify'
import { SignUpAction, loginAction } from '../../services/actions/authActions'
import ButtlonLoader from '../buttons/ButtlonLoader'



const SignUp = () => {
    const [formData, setFormData] = useState({ first_name: "", last_name: "", email: "", password: "", business_name: "", address: "", phone_number: "" })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const { authData, signUpLoading } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

        if (!formData.email || !formData.password) return toast.error('All fields are required')

        dispatch(SignUpAction({ formData, toast, navigate }))
    }
    return (
        <div className='w-full h-screen py-4 px-5'>
            <Navbar />
            <div className='my-4'>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='text-[30px] mb-1'>Sign Up</h1>
                    <p className='w-1/2 text-[14px] italic'>By signing up you have agreed that trustlines will be added to your account so as to enable your business receive and transfer diffirent currencies across the globe.</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    action="" className='mb-8 w-3/4 justify-center h-[400px] rounded-sm shadow-2xl bg-white mx-auto border-black py-10 '>
                    <div className='flex gap-y-5 w-full'>
                        <div className='w-1/2 mx-4'>
                            <p>First Name</p>
                            <input
                                onChange={handleChange}
                                type="text" name="first_name" id="" className='border pl-3 w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Business Name</p>
                            <input
                                onChange={handleChange}
                                type="text" name="business_name" id="" className='border pl-3 w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Phone number</p>
                            <input
                                onChange={handleChange}
                                type="text" name="phone_number" id="" className='border pl-3 w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Password</p>
                            <input
                                onChange={handleChange}
                                type="text" name="password" id="" className='border pl-3 w-full  h-[40px] rounded-sm mb-2' placeholder='' />

                        </div>
                        <div className='w-1/2 mx-4'>
                            <p>Last Name</p>
                            <input
                                onChange={handleChange}
                                type="text" name="last_name" id="" className='border pl-3 w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Business Email</p>
                            <input
                                onChange={handleChange}
                                type="text" name="email" id="" className='border pl-3 w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Address</p>
                            <input
                                onChange={handleChange}
                                type="text" name="address" id="" className='border pl-3 w-full  h-[40px] rounded-sm mb-2' placeholder='' />
                            <p>Confirm Password</p>
                            <input
                                onChange={handleChange}
                                type="text" name="confirm_password" id="" className='border pl-3 w-full  h-[40px] rounded-sm mb-2' placeholder='' />


                        </div>



                    </div>
                    <div className='flex justify-center mt-2'>
                        {signUpLoading == true ? (<ButtlonLoader height={40} />) : (
                            <button className='bg-indigo-500  px-4 py-2 text-white italic uppercase cursor-pointer'> Sign up</button>

                        )}



                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp