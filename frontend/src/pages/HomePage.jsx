import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/navbar'
import Limit from '../components/Limit'
import NoteCard from '../components/NoteCard'
import NotFound from '../components/NotFound'
import api from '../lib/axios'

const HomePage = () => {
  const [rateLimit,setRateLimit] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes")
        setNotes(res.data)
        setLoading(false)
      } catch (error) {
        console.log("Error fetching notes😓")
        if(error.response?.status === 429 ){
          setRateLimit(true)
        }else{
          toast.error('Failed to load notes😕')
        }
      }finally{
          setLoading(false)
        }
    }
    fetchNotes()
  },[])

  return (
   <>
   <div className='min-h-screen'>
      <Navbar />
      {rateLimit && <Limit />}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className='text-center text-primary py-10'> Loading notes ...</div>}

        {notes.length === 0 && !rateLimit && <NotFound />}
        {notes.length > 0 && !rateLimit && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> 
          {notes.map(note => (
            <NoteCard key={note._id} note={note} setNotes={setNotes}/>
          ))}
          </div>
        )}
      </div>

         </div>
    </>
  )
} 

export default HomePage 