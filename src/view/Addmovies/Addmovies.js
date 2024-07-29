import React, { useState } from 'react'
import './Addmovies.css'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Addmovies() {
  const [title, setTitle] = useState("")
  const [director, setDirector] = useState("")
  const [release_date, setRelease_date] = useState("")
  const [rating, setrating] = useState("")
  const [description, setDescription] = useState("")
  const [image_url, setImage_url] = useState("")
  const [trailer_url, setTrailer_url] = useState("")

  const addmovie = async () => {
    if (!title || !director || !release_date || !rating || !trailer_url || !image_url || !description) {
      toast.error("Please Enter All Details..")

      return
    }
    toast.loading("Adding Movie ")

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/movie`,
      {
        title: title,
        director: director,
        release_date: release_date,
        rating: rating,
        trailer_url: trailer_url,
        image_url: image_url,
        description: description
      }

    )
    toast.dismiss()
    toast.success(response.data.message)
    setTitle("")
    setDirector("")
    setRelease_date("")
    setrating("")
    setDescription("")
    setImage_url("")
    setTrailer_url("")

  }
  return (
    <div className='form-page py-5'>
      <form className='border mx-auto p-4 rounded-2'>
        <h1>Add Movies</h1>

        <input type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='form-control' />

        <input type='text'
          placeholder='Director'
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          className='form-control' />

        <input type='text'
          placeholder='Release Date'
          value={release_date}
          onChange={(e) => setRelease_date(e.target.value)}
          className='form-control' />

        <input type='Number'
          placeholder='Rating'
          value={rating}
          onChange={(e) => setrating(e.target.value)}
          className='form-control' />

        <textarea type='text'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='form-control' />

        <div className='preview-area border border-success rounded-3 mt-3 mx-auto px-4 py-4'><img src={image_url} alt='poster' className='preview' /></div>
        <input type='text'
          placeholder='Poster url'
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
          className='form-control' />

        <input type='text'
          placeholder='Trailer url'
          value={trailer_url}
          onChange={(e) => setTrailer_url(e.target.value)}
          className='form-control' />

        <button type='button' onClick={addmovie} className='btn btn-success mt-3 me-3'>Add Movie</button>
        <Link to="/">
          <button type='button' className='btn btn-warning mt-3'>All Movies</button>
        </Link>
      </form>

      <Toaster />
    </div>
  )
}

export default Addmovies

