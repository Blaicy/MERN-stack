import React from 'react'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import CreatePage from './pages/CreatePage'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>  
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details' element={<DetailsPage />} />
        <Route path='/note/:id' element={<CreatePage />} />
      </Routes>
    </>
  )
}

export default App