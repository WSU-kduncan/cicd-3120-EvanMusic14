import { useEffect, useState } from "react";
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=17f9bc54'

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const serachMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search)
  }

  useEffect(() => {
    serachMovies('Star Wars')
    setSearchTerm('Star Wars')
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt="Search" 
          onClick={() => serachMovies(searchTerm)}
        />
      </div>

      { movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

    </div>
  );
}

export default App;
