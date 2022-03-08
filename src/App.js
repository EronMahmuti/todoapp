import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import SearchIcon from "./search.svg";
import MovieCard from './Movieard';

//bb2f855

const API_URL = "http://www.omdbapi.com?apikey=bb2f855";
const movie1 = {
  Title: 'Italian Spiderman',
  Year: '2007',
  imdbID: 'tt2705436',
  Type: 'movie',
  Poster: 'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZT…TkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg'
}
function App() {
  const [movies, setMovies] = useState();
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  }
  useEffect(() => {
    searchMovies()
  }, [])

  return(
    <div>
      <h1>MovieLand</h1>
      <div className='search' >
        <input 
          placeholder='search for movies' 
          value="Spiderman"
          onChange={() => {}}
        />
        <img src={SearchIcon}
            alt="search"
            onClick={() => {}}
        />
      </div>
      <div className='container'>
        <MovieCard movie1={movie1} />
      </div>
    </div>

  )
}
export default App;
