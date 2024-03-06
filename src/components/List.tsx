import { useEffect } from "react";
import { usePosts } from "../Context/PostContextProvider";
const List = () => {

  const { posts, setPosts } = usePosts();

  useEffect(() => {
    fetch(`http://localhost:3000/posts`).then((res) => res.json()).then((res) => setPosts(res))
  }, [])

  return (
    <div className="row g-4">
      {
        posts.map((post) =>
          <div className="col-4" key={post.id}>
            <div className="card-container border p-4 rounded-4 overflow-hidden" role="button">
              <h3>{post.title}</h3>
              <p> {post.body} </p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default List