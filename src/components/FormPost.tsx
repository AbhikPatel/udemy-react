import { useState } from "react"

const FormPost = () => {

  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let requestBody = {
      title: title,
      body: des
    }
    if (title && des !== '') {
      fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'  // Set the appropriate Content-Type
        }
      })
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="h-100 p-3 d-flex justify-content-between align-items-center container gap-3">
      <div>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post Title" />
      </div>
      <div className="flex-grow-1">
        <input type="text" className="form-control" value={des} onChange={(e) => setDes(e.target.value)} placeholder="Post Body" />
      </div>
      <div>
        <button type="submit" className="btn btn-warning"> Add Post </button>
      </div>
    </form>
  )
}

export default FormPost