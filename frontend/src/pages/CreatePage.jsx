import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import toast from "react-hot-toast"
import api from '../lib/axios'

const CreatePage = () => {
  const [title,setTitle]= useState("")
  const [content,setContent] = useState("")
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!title.trim() || !content.trim()){
      toast.error("All fields are required😒!")
      return;
    }
    setLoading(true)
    try {
      await api.post("/notes", {
        title,
        content
      })
      toast.success("Note created successfully😁!")
      navigate("/")
    } catch (error) {
      if(error.response.status === 429){
        toast.error("Slow down😑!", {
          duration:4000,
          icon:"💀"
        })
      }else{
        toast.error("Failed to create note😓!")
      }
    } finally{
      setLoading(false)
    }
  }

  return (
    <>
      <div className='min-h-screen bg-base-200 p-10'>
        <div className='container mx-auto px-4 py-8'>
          <div className='max-w-2xl mx-auto'>
            <Link to='/' className='btn btn-ghost mb-6'>
              <ArrowLeft className='size-5'/>
              Back to notes</Link>
            <div className='card bg-base-100'>
              <div className='card-body'>
                <h1 className='card-title text-2xl mb-4'>Create New Note</h1>
                <form onSubmit={handleSubmit}>
                  <div className='form-control mb-4'>
                    <label className='label'>
                      <span className='label-text'>Title</span>
                    </label>
                    <input type='text' placeholder='Note Title' className='input input-bordered' value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                    <label className='label'>
                      <span className='label-text'>Content</span>
                    </label>
                    <textarea placeholder='Write your note here...' className='input input-bordered h-28' value={content}
                    onChange={(e) => setContent(e.target.value)} />
                    <div className='card-actions justify-end'>
                      <button type='submit' className='btn btn-outline mt-5 rounded-full bg-base-100' disabled={loading}>
                        {loading ?"Creating..." : "Create note"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default CreatePage