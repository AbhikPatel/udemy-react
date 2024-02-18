import Loader from "./components/Loader";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import YourMovies from "./components/YourMovies";

const Home = ({ movieList, description, selectedId, showLoader, movieId, deselectMovie }: any) => {

  

  return (
    <div className="container p-5 h-100 overflow-hidden">
      <div className="row g-5 h-100 overflow-hidden">
        <div className="col-6 overflow-hidden">
          {
            showLoader ? <Loader/> : <MovieList list={movieList} movieId={movieId} selectedId={selectedId} />
          }
        </div>
        <div className="col-6 overflow-hidden">
          {
            description ? <MovieDetails details={description} closeDescription={deselectMovie} /> : <YourMovies />
          }
        </div>
      </div>
    </div>
  )
}

export default Home