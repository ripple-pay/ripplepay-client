import { createAsyncThunk } from "@reduxjs/toolkit"

import { loginInRoute, signUpRoute } from '../routes/authRoutes'


export const SignUpAction = createAsyncThunk(
    'auth/SignUpAction',
    async ({ formData }, { rejectWithValue }) => {
        try {
            const { data } = await signUpRoute(formData)

            console.log(data)

            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)

export const loginAction = createAsyncThunk(
    'auth/loginAction',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await loginInRoute(formData)
            console.log(data, "Datatattatatt");
            const payload = {
                success: true,
                access: data.access,
                refresh: data.refresh,
                credentials: data.data
            }

            if (data) {
                toast.success('Login successful.')

                localStorage.setItem('user', JSON.stringify(payload))

                navigate('/user-dashboard', { replace: true })

                console.log(data)
            }

            return data
        } catch (error) {
            toast.warn('Login not successful')
            return rejectWithValue(null)
        }
    }
)