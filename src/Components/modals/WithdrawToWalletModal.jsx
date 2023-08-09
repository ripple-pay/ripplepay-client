import React, { useEffect, useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppContext } from '../../context/Context'
import { ClipLoader } from 'react-spinners'
import ButtlonLoader from '../buttons/ButtlonLoader'
import { withdrawToWalletAction } from '../../services/actions/userActions'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const WithdrawToWalletModal = () => {
  const { updateModals, modals } = useContext(AppContext)
  const { transactions, balance_customer_count, transactionLoadingState } = useSelector(state => state.user)
  const [formData, setFormData] = useState({ amount: 0, address: "" })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await dispatch(withdrawToWalletAction({ formData, toast, updateModals, modals, navigate }))
    if (res.error == undefined) {
      navigate('/user-dashboard', { replace: true })
    }
  }



  return (
    <div className="fixed grid h-screen z-20 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
      <div className="bg-white w-[350px] md:w-[500px] px-[10px] md:px-[30px] py-[20px] ">

        <div className='flex justify-between items-center'>
          <h1>Withdraw to wallet</h1>
          <div
            onClick={() => {
              updateModals({ showWithdrawToWalletModal: !modals.showWithdrawToWalletModal })
            }}
            className='bg-red-500  px-4 py-2 rounded-2xl text-white cursor-pointer'><p color='text-white text-[40px]'>x</p></div>
        </div>
        <h1 className='text-[15px] italic'>Xrp balance: {(balance_customer_count?.balance / 1000000).toFixed(4)} </h1>

        <form
          className='py-4'
          onSubmit={handleSubmit}
        >
          <div>
            <p className='text-[14px] py-2'>Select currency</p>
            <select name="currency" id="" className='w-full py-3 px-2'>
              <option value="XRP">XRP</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="JPY">JPY</option>
            </select>
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 mt-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="address"
              placeholder="Xrp wallet address"
              className="border mb-2 border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 mt-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
              onChange={(e) => handleChange(e)}
            />
            {transactionLoadingState == true ? (<ButtlonLoader />) :

              (<button type='submit' className='bg-blue-500 px-4 w-full my-3 py-2 text-white italic uppercase cursor-pointer'> Withdraw </button>)
            }
          </div>

        </form>

      </div>
    </div>
  )
}

export default WithdrawToWalletModal