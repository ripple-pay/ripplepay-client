import { createSlice } from '@reduxjs/toolkit'
import { getTransactionsActions, userBalanceCustomersAction } from '../actions/userActions'



const userSlice = createSlice({
    name: 'user',
    initialState: {
        transactions: null,
        balance_customer_count: null

    },
    extraReducers: (builder) => {
        builder.addCase(getTransactionsActions.pending, (state, action) => {
            // state.signUpLoading = true
        })
        builder.addCase(getTransactionsActions.fulfilled, (state, action) => {
            // state.signUpLoading = false
            state.transactions = action.payload
        })
        builder.addCase(getTransactionsActions.rejected, (state, action) => {
            // state.signUpLoading = false
        })
        //
        builder.addCase(userBalanceCustomersAction.pending, (state, action) => {
            // state.signUpLoading = true
        })
        builder.addCase(userBalanceCustomersAction.fulfilled, (state, action) => {
            // state.signUpLoading = false
            state.balance_customer_count = action.payload
        })
        builder.addCase(userBalanceCustomersAction.rejected, (state, action) => {
            // state.signUpLoading = false
        })
        //


    }
})

export default userSlice.reducer