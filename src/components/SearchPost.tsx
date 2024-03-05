
const SearchPost = ({ searchPosts }) => {

  const handleSearch = (value) => {
    searchPosts(value);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" className="form-control" onChange={(e) => handleSearch(e.target.value)} placeholder="Search posts..." />
    </form>
  )
}

export default SearchPost