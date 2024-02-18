import { useEffect, useState } from "react";
import Home from "./Home"
import NavBar from "./NavBar"

const KEY: string = `5af4a6f2`;

const App = () => {

  /** Movies */
  const [movies, setMovies] = useState([]);
  /** Movies */
  const [moviesCount, setMoviesCount] = useState(0);
  /** Query */
  const [query, setQuery] = useState('');
  /** Show Loader */
  const [showLoader, setShowLoader] = useState(false);
  /** Selected Movie Id */
  const [selectedId, setSelectedId] = useState(null);
  /** Description */
  const [description, setDescription] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      if(query.length === 0) setMovies([]);
      if(query.length <= 3) return
      setShowLoader(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
      const result = await res.json();
      setMovies(result.Search);
      setShowLoader(false);
      setMoviesCount(result.totalResults ? result.totalResults : 0)
    }

    fetchMovies();
  }, [query])

  const getMovieDetails = async (id: string) => {
    setSelectedId(id);
    const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${id}`);
    const result = await res.json();
    setDescription(result);
  }

  const deselectMovie = () => {
    setDescription(null);
    setSelectedId(null);
  }

  return (
    <div className="h-100 d-flex flex-column">
      <header>
        <NavBar search={setQuery} count={moviesCount}/>
      </header>
      <div className="flex-grow-1 bg-dark overflow-hidden">
        <Home movieList={movies} description={description} selectedId={selectedId} showLoader={showLoader} movieId={getMovieDetails} deselectMovie={deselectMovie}/>
      </div>
    </div>
  )
}

export default App