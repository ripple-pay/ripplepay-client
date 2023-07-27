import React, { useContext } from 'react'
import { AppContext } from '../../context/Context'

import modal_config from '../../data/modal_config'
const UsersActions = () => {
  const { updateModals, modals } = useContext(AppContext)
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
      </div>
    </div>
  )
}

export default UsersActions