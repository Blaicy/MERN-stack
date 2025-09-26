import React from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

const Navbar = () => {
  return (
    <>
    <header className='bg-base-300 border-b border-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-3xl tracking-tighter'>ThinkBoard</h1>
          <Link to='/create' 
          className='btn btn-outline'>
          <Plus />New Note
          </Link>
         </div>
      </div>
    </header>
    </>
  )
}

export default Navbar

