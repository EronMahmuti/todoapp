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
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
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
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon}
            alt="search"
            onClick={() => {searchMovies(searchTerm)}}
        />
      </div>      
        {
          movies?.length > 0 ? (
              <div className='container'>
                  {movies.map((movie) => (<MovieCard movie={movie} />) )}
              </div>
          ) : (
            <div className='empty' >
              <h2>no movies found</h2>
            </div>
          )
        }
    </div>

  )
}
export default App;