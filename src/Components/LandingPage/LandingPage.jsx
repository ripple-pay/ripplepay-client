import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import home from '../../assets/home.png'
import withdraw from '../../assets/withdraw.png'
import withdraw2 from '../../assets/withdraw2.png'

const LandingPage = () => {
    return (
        <div className='w-full h-screen px-5 py-10'>
            <Navbar />
            <div className='bg-purple-800  p-12 my-5 rounded-2xl'>
                <div className='flex flex-1 space-x-4 px-10 py-10 rounded-2xl'>
                    <div className='flex-[0.5]'>
                        <h1 className='text-[30px] text-white font-poppins font-semibold'>Cross-border Payment Business to Business Solution</h1>

                        <Link to={"/signup"}>

                            <button className='px-5 py-2 inline bg-pink-500 text-white font-semibold rounded-lg mt-4'>Create free account</button>
                        </Link>
                    </div>
                    <div className='flex-[0.5] mt-20'>
                        <h1 className='text-[14px] italic font-spacegrotesk text-white leading-6'> At Ripplepay, we understand the challenges of traditional payment systems, and that's why we've developed a secure and user-friendly platform to seamlessly integrate crypto payments into your business operations. Say goodbye to lengthy processing times and exorbitant fees, and say hello to instant, borderless, and cost-effective transactions. </h1>

                    </div>
                </div>
                <img src={home} alt="" className='rounded-lg mx-auto' />
            </div>
            <div className='bg-purple-800 py-4 my-5 mb-11 rounded-2xl'>
                <div className='flex flex-col justify-center px-20'>
                    <h1 className='mx-auto text-[30px] text-white font-poppins font-semibold'>Seamless and cost friendly withdrawal to your wallets</h1>
                    <h1 className='mx-auto text-[14px] italic font-spacegrotesk text-white leading-6'>Receive your money into your preferred wallets and local banks</h1>
                </div>
                <div className='flex flex-1 space-x-4 px-10 py-10 rounded-2xl'>
                    <div className='flex-[0.5]'>
                        <img src={withdraw} alt="" className='rounded-lg' />
                    </div>
                    <div className='flex-[0.5]'>
                        <img src={withdraw2} alt="" className='rounded-lg' />

                    </div>
                </div>
            </div>
            <div className='mb-10 h-[20px]'>

            </div>
        </div>
    )
}

export default LandingPage