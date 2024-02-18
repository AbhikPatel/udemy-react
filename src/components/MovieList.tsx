import { Movies } from "../models/movies.model"
import Movie from "./Movie"

const MovieList = ({ list, movieId, selectedId }) => {
  
  return (
    <div className="h-100 bg-list rounded-3 overflow-auto">
      {
        list && list.map((res: Movies) => (
          <Movie detials={res} getMovieDetails={movieId} selectedId={selectedId} key={res.imdbID} />
        ))
      }
    </div>
  )
}

export default MovieList