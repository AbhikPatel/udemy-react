import { useState } from "react"

const ItemForm = ({ add }) => {

  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description === '')
      return
    const data = {
      id: Math.floor(10000 + Math.random() * 90000),
      description: description,
      packed: false
    }
    add(data);
    setDescription('');
  }

  return (
    <div className="h-100 container d-flex justify-content-center align-items-center flex-column">
      <form className="d-flex align-items-center" onSubmit={handleSubmit}>
        <label className="form-label px-3"> Add your items </label>
        <div className="px-3">
          <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className="btn btn-outline-success" type="submit"> Add </button>
      </form>
    </div>
  )
}

export default ItemForm