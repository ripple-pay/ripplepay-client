import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineTransaction } from 'react-icons/ai'
import { CiSettings } from 'react-icons/ci'
import { MdWebhook } from 'react-icons/md'
import { VscGithubAction } from 'react-icons/vsc'

import { AppContext } from '../../context/Context'
import UsersHome from '../Sections/UsersHome'
import UsersTransactions from '../Sections/UsersTransactions'
import UsersSettings from '../Sections/UsersSettings'
import UsersWebHook from '../Sections/UsersWebHook'
import UsersActions from '../Sections/UsersActions'


const UsersDashBoard = () => {
    const { dashBoardConfig, setdashBoardConfig } = useContext(AppContext)

    return (
        <div className='w-full h-screen'>


            <div className='flex flex-1 -z-50'>
                {/* Sidebar */}
                <div className='flex-[0.2] bg-indigo-300 h-screen shadow-lg'>
                    <h1 className='flex text-indigo-500 italic font-bold text-[25px] font-spacegrotesk ml-3 mt-20'>Ripple<span className='text-pink-500'>Pay</span></h1>
                    <ul className='flex flex-col justify-center mx-auto w-full ml-2 gap-y-4 mt-[50px]'>
                        <li
                            onClick={() => {
                                setdashBoardConfig("users-home")
                            }}
                            className={`${dashBoardConfig === "users-home" ? "bg-pink-500 " : ""} flex gap-x-2 items-center tracking-widest hover:bg-pink-500 w-3/4 px-2 py-2 hover:pl-4 duration-500 ease-in-out cursor-pointer`}><AiOutlineHome size={20} /> Home</li>
                        <li
                            onClick={
                                () => {
                                    setdashBoardConfig("users-transactions")
                                }
                            }

                            className={`${dashBoardConfig === "users-transactions" ? "bg-pink-500 " : ""} flex gap-x-2 items-center tracking-widest hover:bg-pink-500 w-3/4 px-2 py-2 hover:pl-4 duration-500 ease-in-out cursor-pointer`}>< AiOutlineTransaction size={20} /> Transactions</li>
                        <li
                            onClick={

                                () => {
                                    setdashBoardConfig("users-settings")
                                }
                            }
                            className={`${dashBoardConfig === "users-settings" ? "bg-pink-500 " : ""} flex gap-x-2 items-center tracking-widest hover:bg-pink-500 w-3/4 px-2 py-2 hover:pl-4 duration-500 ease-in-out cursor-pointer`}><CiSettings size={20} />Settings</li>

                        <li

                            onClick={
                                () => {

                                    setdashBoardConfig("users-actions")
                                }

                            }
                            className={`${dashBoardConfig === "users-actions" ? "bg-pink-500 " : ""} flex gap-x-2 items-center tracking-widest hover:bg-pink-500 w-3/4 px-2 py-2 hover:pl-4 duration-500 ease-in-out cursor-pointer`}> <VscGithubAction size={20} />Actions</li>
                        <li

                            onClick={
                                () => {

                                    setdashBoardConfig("users-webhook")
                                }

                            }
                            className={`${dashBoardConfig === "users-webhook" ? "bg-pink-500 " : ""} flex gap-x-2 items-center tracking-widest hover:bg-pink-500 w-3/4 px-2 py-2 hover:pl-4 duration-500 ease-in-out cursor-pointer`}> <MdWebhook size={20} />Webhook</li>
                        <li>
                           <Link to={"/"}>
                           <button
                                onClick={console.log("Logg")}
                                className='inline-block bg-blue-500 px-4 py-2 w-1/2 duration-500 ease-in-out cursor-pointer'>Log out</button>
                           </Link>
                        </li>
                    </ul>

                </div>
                {/* {MainBar} */}
                <div className='flex-[0.9]'>
                    <nav className='flex justify-between  py-5  rounded-sm z-50 shadow-lg'>
                        <div className='px-5'>
                            <h1 className='text-indigo-500 italic font-bold text-[25px] font-spacegrotesk'>Buisness Name</h1>

                        </div>
                        <div className='flex gap-x-4 px-4'>

                            <h4 className='px-5 py-2 inline  text-black rounded-sm italic'>Businessemail@gmail.com</h4>
                        </div>
                    </nav>
                    {dashBoardConfig === "users-home" && (<UsersHome />)}
                    {dashBoardConfig === "users-transactions" && (<UsersTransactions />)}
                    {dashBoardConfig === "users-settings" && (<UsersSettings />)}
                    {dashBoardConfig === "users-webhook" && (<UsersWebHook />)}
                    {dashBoardConfig === "users-actions" && (<UsersActions />)}


                </div>

            </div>
        </div>
    )
}

export default UsersDashBoard