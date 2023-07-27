import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar'
import { toast } from 'react-toastify'
import { loginAction } from '../../services/actions/authActions'
import ButtlonLoader from '../buttons/ButtlonLoader'



const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({ email: '', password: '' })
    const { authData, authLoading } = useSelector(state => state.auth)

    const handleChange = (e) => {
        console.log(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        console.log("called");
        console.log(formData);
        e.preventDefault()

        if (!formData.email || !formData.password) return toast.error('All fields are required')

        dispatch(loginAction({ formData, toast, navigate }))
    }
    return (
        <div className='w-full h-screen py-4 px-5'>
            <Navbar />
            <div className='my-20'>
                <div className='flex w-full justify-center items-center'>
                    <h1 className='text-[30px] mb-4'>Login Page</h1>
                </div>
                <form onSubmit={handleSubmit}

                    className='flex flex-col gap-y-5 w-[800px] h-[350px] rounded-sm shadow-2xl bg-white mx-auto border-black py-20'>
                    <input
                        onChange={handleChange}
                        type="text" name='email' className="flex  border w-3/4 mx-auto h-[50px] rounded-lg text-black pl-4" placeholder='Email' />
                    <input
                        onChange={handleChange}
                        type="password" name='password' className="flex  border w-3/4 mx-auto h-[50px] rounded-lg text-black pl-4" placeholder='Password' />
                    <div className='flex justify-center w-full'>
                        {
                            authLoading == true ? (
                                <ButtlonLoader height={40} />
                            ) : (
                                <button
                                    type='submit'
                                    className='px-5 py-2 inline h-[50px] mx-auto bg-indigo-500 text-white  rounded-sm'>Login</button>
                            )
                        }

                    </div>


                </form>
            </div>
        </div>
    )
}

export default LoginPage