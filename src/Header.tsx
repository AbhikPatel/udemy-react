import Result from "./components/Result"
import SearchPost from "./components/SearchPost"

const Header = () => {
  return (
    <div className="h-100 d-flex justify-content-between align-items-center container">
      <h3> 📝 The Atomic Blog </h3>
      <div className="d-flex gap-3 align-items-center">
        <Result />
        <SearchPost />
        <button className="btn btn-outline-warning"> Clear </button>
      </div>
    </div>
  )
}

export default Header