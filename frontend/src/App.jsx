import React from 'react'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import CreatePage from './pages/CreatePage'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <div className='h-full w-full'>
        <div
        className="absolute inset-0 -z-10 h-full w-full items-center
        [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#FFA50040_100%)]">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/note/:id' element={<DetailsPage />} />
            <Route path='/create' element={<CreatePage />} /> 
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App