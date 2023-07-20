import React from 'react'

const UsersHome = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-row gap-x-4 mt-10 mx-5'>
                <div className='rounded-md bg-white shadow-lg w-1/3 h-[200px] p-8'>
                    <h1 className='italic text-[30px]'>Balance(USD)</h1>
                    <h1 className='italic text-[20px]'>$10000000</h1>

                </div>
                <div className='rounded-md bg-white shadow-lg w-1/3 h-[200px] p-8'>
                    <h1 className='italic text-[30px]'>Transactions Count</h1>
                    <h1 className='italic text-[30px] text-blue-700'>50</h1>

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