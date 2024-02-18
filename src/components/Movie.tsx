
const Movie = ({ detials, getMovieDetails, selectedId } : any) => {

  return (
    <div className={selectedId === detials.imdbID ? `movie-card px-5 py-3 d-flex selected` : `movie-card px-5 py-3 d-flex`} role="button" onClick={() => getMovieDetails(detials.imdbID)}>
      <figure className="m-0 pe-4">
        <img src={detials.Poster} alt="no img" className="movie-img" />
      </figure>
      <div className="d-flex flex-column justify-content-between py-2">
        <h5 className="text-white"> {detials.Title} </h5>
        <span className="text-white"> 🎬 {detials.Year} </span>
      </div>
    </div>
  )
}

export default Movie