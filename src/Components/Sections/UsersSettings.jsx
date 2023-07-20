import React from 'react'

const UsersSettings = () => {
  return (
    <div>
      <div className='flex justify-between mt-3 mx-4'>
        <p></p>
        <button className='bg-blue-500 px-4 py-2 text-white italic uppercase cursor-pointer'> Generate New Api-key</button>

      </div>
      <div className='flex flex-row p-8 gap-x-4'>
        <div className='rounded-md bg-white shadow-lg w-1/3 h-[200px] p-8'>
          <h1 className='italic text-[30px]'>Business ID</h1>
          <h1 className='italic text-[15px] text-blue-700'>XSNXNSCSNCSCNSCNSS</h1>

        </div>
        <div className='rounded-md bg-white shadow-lg w-1/3 h-[200px] p-8'>
          <h1 className='italic text-[30px]'>API-KEY</h1>
          <h1 className='italic text-[20px] text-blue-700'>XSNXNSCSNCSCNSCNSS</h1>

        </div>
      </div>
    </div>
  )
}

export default UsersSettings