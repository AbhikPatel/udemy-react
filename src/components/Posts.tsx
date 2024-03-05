import List from "./List"

const Posts = ({ posts }) => {
  return (
    <section className="p-4">
      <List posts={posts}/>
    </section>
  )
}

export default Posts