
import './App.css';
import React from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Header } from './component/Header/Header';
import { Footer } from './component/Footer/Footer';
import { Movies } from './pages/Movies/Movies';
import { TvShow } from './pages/TvShows/TvShow';
import { Celebs } from './pages/Celebs/Celebs';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { TvDetails } from './pages/TvShowDetails/TvDetails';
import { CelebDetails } from './pages/CelebDetails/CelebDetails';


function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/movies" element={<Movies/>}/>
        <Route exact path="/movies/:id" element={<MovieDetails/>}/>
        <Route exact path="/tvshows" element={<TvShow/>}/>
        <Route exact path="/tvshows/:id" element={<TvDetails/>}/>
        <Route exact path="/celebs" element={<Celebs/>}/>
        <Route exact path="/celebs/:id" element={<CelebDetails/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
