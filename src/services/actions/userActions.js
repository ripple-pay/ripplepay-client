import { createAsyncThunk } from "@reduxjs/toolkit"
import { transactionRoute, userBalanceCustomersRoute } from "../routes/userRoutes"


export const getTransactionsActions = createAsyncThunk(
    'user/getTransactionsActions',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await transactionRoute()
            

            return data.data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)




export const userBalanceCustomersAction = createAsyncThunk(
    'user/userBalanceCustomersAction',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await userBalanceCustomersRoute()
         

            return data.data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)

