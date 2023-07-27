import React, { useContext } from 'react'

import WithdrawToWalletModal from '../Components/modals/WithdrawToWalletModal'
import WithdrawToBankModal from '../Components/modals/WithdrawToBankModal'



const modal_config = (type) => {
    console.log("typwwwwww", type);
  

    return (
        <>
            {type == "bank" && (<WithdrawToBankModal />)}
            {type == "wallet" && (<WithdrawToWalletModal />)}

        </>
    )
}

export default modal_config