import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/Context'
import { useDispatch, useSelector } from 'react-redux'

import modal_config from '../../data/modal_config'
import { activateAccountAction } from '../../services/actions/userActions'
const UsersActions = () => {
  const { updateModals, modals } = useContext(AppContext)
  const [formData, setFormData] = useState({})

  const { activateAccountLoadingState } = useSelector(state => state.user)

  const dispatch = useDispatch()

  const activateAccount = () => {
    dispatch(activateAccountAction({ formData }))

  }
  return (
    <div>
      <div className='flex gap-x-2 p-8'>

        <button
          onClick={() => {
            updateModals({ showWithdrawToWalletModal: !modals.showWithdrawToWalletModal })

            console.log(modals.showWithdrawToWalletModal);
          }}


          className='bg-blue-500 px-4 py-2 text-white italic uppercase cursor-pointer'>
          Withdraw to Xrp Wallet
        </button>
        <button
          onClick={() => {


          }}
          className='bg-green-500 px-4 py-2 text-white italic uppercase cursor-pointer'>
          Withdraw to bank
        </button>
        <button
          onClick={() => activateAccount()}
          className='bg-pink-500 px-4 py-2 text-white italic uppercase cursor-pointer'>
          Activate account
        </button>
      </div>
    </div>
  )
}

export default UsersActions