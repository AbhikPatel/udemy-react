
const MovieDetails = ({ details, closeDescription }) => {



  return (
    <div className="h-100 bg-list rounded-3 overflow-hidden position-relative">
      <div className="position-absolute" style={{right:'15px', top:'15px'}} onClick={closeDescription}>
        <button className="btn btn-close"></button>
      </div>
      <div className="d-flex" style={{ backgroundColor: '#414141' }}>
        <figure className="m-0 pe-5">
          <img src={details.Poster} alt="no img" className="movie-poster" />
        </figure>
        <div className="d-flex flex-column justify-content-between py-5 text-white">
          <h4> {details.Title} </h4>
          <span> {details.Released} &bull; {details.Runtime}</span>
          <span> {details.Genre} </span>
          <span> ⭐ <span className="text-warning">{details.imdbRating}/10</span> IMDB Ratings</span>
        </div>
      </div>
      <ul className="p-5 text-white list-unstyled">
        <li> 🤵 Director: <em>{details.Director}</em></li>
        <li> 👨🏽‍🤝‍👨🏽 Starring: <em>{details.Actors}</em></li>
        <li> 🏆 Awards: <em>{details.Awards}</em></li>
        <li> 🎞 Plot: <em>{details.Plot}</em></li>
        <li> 💰 Box Offices: <em className="text-warning">{details.BoxOffice}</em></li>
      </ul>
    </div>
  )
}

export default MovieDetails