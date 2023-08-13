import React, { useEffect, useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppContext } from '../../context/Context'
import { ClipLoader } from 'react-spinners'
import ButtlonLoader from '../buttons/ButtlonLoader'
import { withdrawToWalletAction } from '../../services/actions/userActions'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CurrencySwapModal = () => {
    const { updateModals, modals } = useContext(AppContext)
    const { transactions, balance_customer_count, transactionLoadingState } = useSelector(state => state.user)
    const [formData, setFormData] = useState({ amount: 0, from: "", to: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData, "FORMDATA");
        // const res = await dispatch(withdrawToWalletAction({ formData, toast, updateModals, modals, navigate }))
        // if (res.error == undefined) {
        //     navigate('/user-dashboard', { replace: true })
        // }
    }



    return (
        <div className="fixed grid h-screen z-20 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[350px] md:w-[500px] px-[10px] md:px-[30px] py-[20px] ">

                <div className='flex justify-between items-center'>
                    <h1 className='italic'>SWap Currency</h1>
                    <div
                        onClick={() => {
                            updateModals({ showCurrencySwapModal: !modals.showCurrencySwapModal })
                        }}
                        className='bg-red-500  px-4 py-2 rounded-2xl text-white cursor-pointer'><p color='text-white text-[40px]'>x</p></div>
                </div>
                <div className='grid grid-cols-2 justify-between'>
                    <p className='text-[12px] font-semibold'>XRP: {(balance_customer_count?.balance / 1000000).toFixed(4)} </p>
                    <p className='text-[12px] font-semibold'>EUR: {balance_customer_count?.eur}</p>
                    <p className='text-[12px] font-semibold'>USD: {balance_customer_count?.usd}</p>
                    <p className='text-[12px] font-semibold'>JPY: {balance_customer_count?.jpy}</p>
                    <p className='text-[12px] font-semibold'>NGN: {balance_customer_count?.ngn}</p>
                </div>

                <form
                    className='py-4'
                    onSubmit={handleSubmit}
                >
                    <div>
                        {/* <p className='text-[14px] py-2'>Select currency</p> */}
                        <select
                            // onClick={(e) => {
                            //   console.log(e.target.value);
                            // }}
                            onChange={(e) => handleChange(e)}

                            name="from" id="" className='w-full py-3 px-2'>
                            <option value="">From currency</option>
                            <option value="XRP">XRP</option>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="JPY">JPY</option>
                            <option value="NGN">NGN</option>
                        </select>
                        <select
                        clas
                            // onClick={(e) => {
                            //   console.log(e.target.value);
                            // }}
                            onChange={(e) => handleChange(e)}

                            name="to" id="" className='w-full py-3 px-2 my-2'>
                            <option value="">To currency</option>
                            <option value="XRP">XRP</option>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="JPY">JPY</option>
                            <option value="NGN">NGN</option>
                        </select>
                        <input
                            type="text"
                            name="amount"
                            placeholder="Amount"
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 mt-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                            onChange={(e) => handleChange(e)}
                        />
                       
                        {transactionLoadingState == true ? (<ButtlonLoader />) :

                            (<button type='submit' className='bg-blue-500 px-4 w-full my-3 py-2 text-white italic uppercase cursor-pointer'> SWAP CURRENCY </button>)
                        }
                    </div>

                </form>

            </div>
        </div>
    )
}

export default CurrencySwapModal