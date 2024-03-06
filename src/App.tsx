import { PostContextProvider } from "./Context/PostContextProvider";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";


const App = () => {

  return (
    <div className="h-100 d-flex flex-column">
      <PostContextProvider>
        <header>
          <Header />
        </header>
        <div className="flex-grow-1 overflow-hidden">
          <Home />
        </div>
      </PostContextProvider>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App