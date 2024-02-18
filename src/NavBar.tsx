import SearchMovies from "./components/SearchMovies"

const NavBar = ({ search, count }) => {
  return (
    <div className="h-100 d-flex justify-content-between align-items-center px-5">
      <h3> 🍿 Rating Movies </h3>
      <SearchMovies search={search} />
      <span className="fw-bold fs-5"> Showing results: {count} </span>
    </div>
  )
}

export default NavBar