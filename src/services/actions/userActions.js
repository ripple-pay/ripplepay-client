import { createAsyncThunk } from "@reduxjs/toolkit"
import { transactionRoute, userBalanceCustomersRoute, withdrawToWalletRoute } from "../routes/userRoutes"


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


export const withdrawToWalletAction = createAsyncThunk(
    'user/withdrawToWalletAction',
    async ({ formData, toast, updateModals, modals, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await withdrawToWalletRoute(formData)
            toast.success("Withdrawal successful")
            updateModals({ showWithdrawToWalletModal: !modals.showWithdrawToWalletModal })
            

            return data
        } catch (error) {
            toast.console.warn(); ("Withdrawal not successful")
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)

