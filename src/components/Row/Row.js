import React, { useState, useEffect } from 'react'
import './Row.css'

const Row = ({ title, fetchMovies }) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetchMovies()
         .then(response => setMovies(response.data.results))
         .catch(err => console.log(err))
    }, [])
    console.log(movies)
    return (
        <div className="row">
            <div className="row-title">{ title }</div>
            <div className="row-poster">
                {
                    movies.map(movie => {
                        return (
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Row
