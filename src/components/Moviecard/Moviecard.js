import React from 'react'
import '../../components/Moviecard/Moviecard.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import youtube from './youtube.png';
import imdb from './imdb.png';
import director_img from './director.png';
import date from './releasedate.png';
import edit_btn from './edit.png'
import delete_img from './bin.png';
function Moviecard({ _id, title, director, release_date, rating, description, image_url, trailer_url, loadmovies }) {
    const deletemovie = async (movieid) => {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/movie/${movieid}`)
        toast.success(response.data.message)
    }
    return (
        <>
            <div className='movie-card card'>
                <img src={image_url} alt='' className=' card-img-top' />
                <div className='card-body'>
                    <h1 className=' card-title'>{title}</h1>
                    <div className='d-flex  align-items-center'>
                        <ul className='d-flex  align-items-center'> <li><img src={imdb} alt='icon' className='icon' /> </li><li><p className='movie'>{rating}</p></li></ul>
                        <ul className='d-flex  align-items-center'><li> <img src={director_img} alt='icon' className='icon' /></li><li><p className='movie'>{director}</p></li></ul>

                    </div>
                    <div className='d-flex  align-items-center'>
                        <ul className='d-flex  align-items-center'> <li><img src={date} alt='icon' className='icon' /> </li><li><p className='movie'>{release_date}</p></li></ul>
                        <ul className='d-flex  align-items-center'><li><Link to={trailer_url} target='blank'> <img src={youtube} alt='trailer' className='icon' /></Link></li><li><p className='movie'>Trailer</p></li></ul>

                    </div>
                    <p className='card-text'>{description}</p>
                    <div className='d-flex gap-3'>
                        <button className='border border-0 rounded py-2'><img src={edit_btn} alt='edit-icon' className='icon' /> </button>
                        <button
                            className='border border-0 rounded py-2'
                            onClick={() => {
                                deletemovie(_id)
                            }}><img src={delete_img} alt='icon' className='icon' />
                        </button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Moviecard
