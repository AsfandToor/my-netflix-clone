import React, { useEffect, useState } from 'react'
import './Billboard.css'

const Billboard = ({ fetchMovies }) => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        fetchMovies()
         .then(response => setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]))
         .catch(err => console.log(err))
    }, [])
    return (
        <div className="billboard" style={{background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("https://image.tmdb.org/t/p/original/${movie.poster_path}")`}}>
            <div className="info-wrapper">
                <h1 className="info-title">
                    {movie.title || movie.original_name|| movie.name}
                </h1>
                <p className="info-text">{movie.overview}</p>
                <div className="info-btns">
                    <button className="play-btn"><i className="fa fa-play"></i> Play Episode</button>
                    <button className="episode-btn"><i className="fa fa-clone"></i> Episodes</button>
                </div>
            </div>
        </div>
    )
}

export default Billboard
