import React from 'react'
import { useSelector } from 'react-redux'


const UsersSettings = () => {
  const { authData } = useSelector(state => state.auth)
  return (
    <div>
      <div className='flex justify-between mt-3 mx-4'>
        <p></p>
        <button className='bg-blue-500 px-4 py-2 text-white italic uppercase cursor-pointer'> Generate New Api-key</button>

      </div>
      <div className='flex flex-row py-4 px-8  gap-x-4'>
        <div className='rounded-md bg-white shadow-lg w-1/3 h-[100px] p-8'>
          <h1 className='italic text-[20px]'>Business ID</h1>
          <h1 className='italic text-[12px] text-blue-700'>{authData?.data?.business_id}</h1>

        </div>
        <div className='rounded-md bg-white shadow-lg w-2/3 h-[100px] p-8'>
          <h1 className='italic text-[20px]'>API-KEY</h1>
          <h1 className='italic text-[12px] text-blue-700'>{authData?.data?.api_key}</h1>

        </div>
      </div>
    </div>
  )
}

export default UsersSettings