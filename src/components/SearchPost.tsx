import { useEffect, useState } from "react";
import { usePosts } from "../Context/PostContextProvider";

const SearchPost = () => {

  const { setPosts } = usePosts();

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/posts?title_like=${searchQuery}`).then((res) => res.json()).then((res) => setPosts(res))
  }, [searchQuery])

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" className="form-control" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search posts..." />
    </form>
  )
}

export default SearchPost