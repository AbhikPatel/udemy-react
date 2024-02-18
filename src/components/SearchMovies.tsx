
const SearchMovies = ({ search }) => {

  const handleInput = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleInput}>
      <input type="text" className="form-control" onChange={(e) => search(e.target.value)} placeholder="Search movies here...." />
    </form>
  )
}

export default SearchMovies