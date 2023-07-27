import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactionsActions, userBalanceCustomersAction } from '../../services/actions/userActions'
const UsersHome = () => {
    const { transactions, balance_customer_count } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getTransactionsActions())
        dispatch(userBalanceCustomersAction())
    }, [])

    return (
        <div className='w-full'>
            <div className='flex flex-row gap-x-4 mt-10 mx-5'>
                <div className='rounded-md bg-white shadow-lg w-1/3 h-[200px] p-8'>
                    <h1 className='italic text-[30px]'>Balance(USD)</h1>
                    <h1 className='italic text-[20px]'>{(balance_customer_count?.balance / 1000000).toFixed(4)}</h1>

                </div>
                <div className='rounded-md bg-white shadow-lg w-1/3 h-[200px] p-8'>
                    <h1 className='italic text-[30px]'>Transactions Count</h1>
                    <h1 className='italic text-[30px] text-blue-700'>{transactions?.length}</h1>

                </div>
                <div className='rounded-md bg-white shadow-lg w-1/3 h-[200px] p-8'>
                    <h1 className='italic text-[30px]'>Customers Count</h1>
                    <h1 className='italic text-[30px] text-red-700'>700</h1>

                </div>




            </div>

        </div>
    )
}

export default UsersHome