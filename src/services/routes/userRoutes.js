import { API } from '../axios_config'

export const transactionRoute = () => API.get('/transactions/transactions')
export const userBalanceCustomersRoute = () => API.get('/users/balance-customers-count')


