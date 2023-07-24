import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import { LandingPage, LoginPage, UsersDashBoard, UsersHome, UsersSettings, UsersTransactions } from './Components'
import SignUp from './Components/Auths/SignUp'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<LandingPage />} />


        {/* AUTH */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />

        {/* DashBoard */}
        <Route path="/user-dashboard" element={<UsersDashBoard />} />
        {/* <Route path="/signup" element={<Signup />} /> */}

        <Route path="/user-home" element={<UsersHome />} />
        <Route path="/user-transactions" element={<UsersTransactions />} />
        <Route path="/user-settings" element={<UsersSettings />} />
        {/* <Route path="/signup" element={<Signup />} /> */}

        {/* 404 */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
