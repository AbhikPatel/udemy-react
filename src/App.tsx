import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"

const App = () => {

  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const count = posts.length;

  useEffect(() => {
    fetch(`http://localhost:3000/posts`).then((res) => res.json()).then((res) => setPosts(res))
  },[])

  useEffect(() => {
    fetch(`http://localhost:3000/posts?title_like=${searchQuery}`).then((res) => res.json()).then((res) => setPosts(res))
  },[searchQuery])

  return (
    <div className="h-100 d-flex flex-column">
      <header>
        <Header count={count} searchPosts={setSearchQuery}/>
      </header>
      <div className="flex-grow-1 overflow-hidden">
        <Home posts={posts}/>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App