import React, { useContext } from 'react'

import WithdrawToWalletModal from '../Components/modals/WithdrawToWalletModal'
import WithdrawToBankModal from '../Components/modals/WithdrawToBankModal'
import CurrencySwapModal from '../Components/modals/CurrencySwapModal'



const modal_config = (type) => {



    return (
        <>
            {type == "bank" && (<WithdrawToBankModal />)}
            {type == "wallet" && (<WithdrawToWalletModal />)}
            {/* {type == "swap" && (<CurrencySwapModal />)} */}

        </>
    )
}

export default modal_config