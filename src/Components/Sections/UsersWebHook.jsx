import React from 'react'

const UsersWebHook = () => {
    return (
        <div>
            <div className='mt-5 mx-5'>
                <p className='italic'>Webhook url</p>
                <div className='flex flex-row gap-x-3'>
                    <input type="text" className="h-[50px] w-1/2  border items-center pl-3 italic" placeholder='https:wwww.webhook-url.com' />
                    <button className='bg-blue-500 px-4  text-white italic h-[50px] w-[100px] cursor-pointer'> Save </button>
                </div>

            </div>
        </div>
    )
}

export default UsersWebHook