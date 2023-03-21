import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import UserPage from './pages/UserPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/UserPage' replace />} />
      <Route path='/UserPage' element={<UserPage />} />
    </Routes>
  )
}

export default App
