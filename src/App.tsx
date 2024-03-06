import { createContext, useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"

export const PostContext = createContext();

const App = () => {

  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const count = posts.length;

  useEffect(() => {
    fetch(`http://localhost:3000/posts?title_like=${searchQuery}`).then((res) => res.json()).then((res) => setPosts(res))
  }, [searchQuery])


  return (
    <div className="h-100 d-flex flex-column">
      <PostContext.Provider value={{posts, setPosts}}>
        <header>
          <Header count={count} searchPosts={setSearchQuery} />
        </header>
        <div className="flex-grow-1 overflow-hidden">
          <Home />
        </div>
      </PostContext.Provider>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App