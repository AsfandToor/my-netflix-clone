import React, { useEffect } from 'react'
import { fetchTrending, fetchActionMovies, fetchOriginals, fetchComedyMovies, fetchDocumentaries, fetchHorroMovies, fetchRomanceMovies, fetchTopRated } from './actions/index'
import './vendor/fontawesome-free/css/all.min.css'
import Navbar from './components/Navbar/Navbar'
import Billboard from './components/Billboard/Billboard'
import Row from './components/Row/Row'
import './App.css'

const App = () => {

  return (
    <React.Fragment>
        <Navbar />
        <Billboard fetchMovies={fetchTrending}/>
        <div className="movie-rows">
          <Row  fetchMovies={fetchActionMovies} title="Action Movies"/>
          <Row  fetchMovies={fetchComedyMovies} title="Comedy Movies"/>
          <Row  fetchMovies={fetchDocumentaries} title="Documentaries"/>
          <Row  fetchMovies={fetchHorroMovies} title="Horror Movies"/>
        </div>
    </React.Fragment>
  )
}

export default App
