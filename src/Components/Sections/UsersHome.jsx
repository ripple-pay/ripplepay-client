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
            <div className='grid grid-cols-3 mt-10 mx-5'>
                <div className='rounded-md bg-white shadow-lg mx-2 my-1 h-[130px] p-8'>
                    <h1 className='italic text-[25px]'>XRP Balance</h1>
                    <h1 className='italic text-[20px]'>{balance_customer_count?.balance == NaN ? "" :(balance_customer_count?.balance / 1000000).toFixed(4)} </h1>

                </div>
                <div className='rounded-md bg-white shadow-lg mx-2 my-1 h-[130px] p-8'>
                    <h1 className='italic text-[25px]'>EUR Balance</h1>
                    <h1 className='italic text-[20px]'>{balance_customer_count?.eur}</h1>

                </div>
                <div className='rounded-md bg-white shadow-lg mx-2 my-1 h-[130px] p-8'>
                    <h1 className='italic text-[25px]'>USD Balance</h1>
                    <h1 className='italic text-[20px]'>{balance_customer_count?.usd}</h1>

                </div>
                <div className='rounded-md bg-white shadow-lg mx-2 my-1 h-[130px] p-8'>
                    <h1 className='italic text-[25px]'>JPY Balance</h1>
                    <h1 className='italic text-[20px]'>{balance_customer_count?.jpy}</h1>

                </div>
                <div className='rounded-md bg-white shadow-lg mx-2 my-1 h-[130px] p-8'>
                    <h1 className='italic text-[25px]'>NGN Balance</h1>
                    <h1 className='italic text-[20px]'>{balance_customer_count?.ngn}</h1>

                </div>
                <div className='rounded-md bg-white shadow-lg mx-2 my-1 h-[130px] p-8'>
                    <h1 className='italic text-[25px]'>Transactions Count</h1>
                    <h1 className='italic text-[25px] text-blue-700'>{transactions?.length}</h1>

                </div>
                <div className='rounded-md bg-white shadow-lg mx-2 my-1 h-[130px] p-8'>
                    <h1 className='italic text-[25px]'>Customers Count</h1>
                    <h1 className='italic text-[25px] text-red-700'>700</h1>

                </div>




            </div>

        </div>
    )
}

export default UsersHome