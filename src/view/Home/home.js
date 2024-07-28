import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Moviecard from '../../components/Moviecard/Moviecard'
import toast, { Toaster } from 'react-hot-toast'

function Home() {
    const [movies, setmovies] = useState([])

    const loadmovies = async () => {

        toast.loading("Loading Movies..")

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/movies`)
        toast.dismiss()
        toast.success("Movies Loaded Successfully")
        setmovies(response.data.data);
    }
    useEffect(() => {
        loadmovies()
    }, [])
    return (
        <div>
            <h1>Movies</h1>
            {
                movies.map((movie, i) => {
                    const {
                        _id,
                        title,
                        director,
                        release_date,
                        rating,
                        description,
                        image_url,
                        trailer_url
                    } = movie;
                    return (<Moviecard
                        key={i}
                        _id={_id}
                        title={title}
                        director={director}
                        release_date={release_date}
                        rating={rating}
                        description={description}
                        image_url={image_url}
                        trailer_url={trailer_url}
                    />)
                })
            }
             <Toaster/>
        </div>
    )
}

export default Home
