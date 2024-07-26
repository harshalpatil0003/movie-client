import React from 'react'
import '../../components/Moviecard/Moviecard.css'

function Moviecard({ _id, title, director, release_date, rating, description, image_url, trailer_url }) {
    return (
        <div className='movie-card'>
            <h1 className='movie-title'>{title}</h1>
            <p className='movie-rating'>{rating}</p>
        </div>
    )
}

export default Moviecard
