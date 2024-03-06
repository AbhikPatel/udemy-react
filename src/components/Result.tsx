import { usePosts } from "../Context/PostContextProvider";

const Result = () => {

  const { posts } = usePosts();

  return (
    <h5 className="m-0"> 🚀 {posts.length} Posts found. </h5>
  )
}

export default Result