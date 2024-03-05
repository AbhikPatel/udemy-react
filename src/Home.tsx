import FormPost from "./components/FormPost"
import Posts from "./components/Posts"

const Home = ({ posts }) => {
  return (
    <div className="h-100 d-flex flex-column overflow-hidden">
      <div className="form-container shadow">
        <FormPost />
      </div>
      <div className="flex-grow-1 overflow-auto">
        <div className="container">
          <Posts posts={posts} />
        </div>
      </div>
    </div>
  )
}

export default Home