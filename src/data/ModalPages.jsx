import React, { Fragment, useContext } from 'react'
import WithdrawToBankModal from '../Components/modals/WithdrawToBankModal'
import WithdrawToWalletModal from '../Components/modals/WithdrawToWalletModal'
import { AppContext } from '../context/Context'
import CurrencySwapModal from '../Components/modals/CurrencySwapModal'

const ModalPages = () => {
  const { modals } = useContext(AppContext)
  return (
    <Fragment>
      {modals.showWithdrawToBankModal && (
        <WithdrawToBankModal />
      )}

      {modals.showWithdrawToWalletModal && (<WithdrawToWalletModal />)}


      {modals.showCurrencySwapModal && (<CurrencySwapModal />)}


    </Fragment>
  )
}

export default ModalPages