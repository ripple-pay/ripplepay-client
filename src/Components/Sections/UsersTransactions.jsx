import React from 'react'

const UsersTransactions = () => {
    return (
        <>


            <div>
                <div class="overflow-x-auto shadow-md sm:rounded-lg mt-4 mx-4">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Customer
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Amount (USD)
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    XRP Token Eq
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Wallet Address
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Mike@gmail.com
                                </th>
                                <td class="px-6 py-4">
                                    2023-05-9
                                </td>
                                <td class="px-6 py-4">
                                    $100
                                </td>
                                <td class="px-6 py-4">
                                    299
                                </td>
                                <td class="px-6 py-4">
                                    rwDJ3sxq3eMZRrGgDKGQcV26JyfhAuky8b
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}

export default UsersTransactions