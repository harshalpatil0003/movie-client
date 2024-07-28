import React from 'react'
import '../../components/Moviecard/Moviecard.css'
import axios from 'axios'
import toast from 'react-hot-toast'

function Moviecard({ _id, title, director, release_date, rating, description, image_url, trailer_url,loadmovies }) {
    const deletemovie = async (movieid) => {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/movie/${movieid}`)
        toast.success(response.data.message)
    }
    return (
        <>
            <div className='movie-card'>
                <h1 className='movie-title'>{title}</h1>
                <p className='movie-rating'>{rating}</p>
                <img src={image_url} alt='' className='image' />
                <div>
                    <button type='button' className='btn-edit'>Edit</button>
                    <button type='button'
                        className='btn-delete'
                        onClick={() => {
                            deletemovie(_id)
                        }}>Delete
                    </button>

                </div>
            </div>

        </>
    )
}

export default Moviecard
