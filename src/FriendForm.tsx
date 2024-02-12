import { useState } from "react"
import { FriendDetails } from "./friend.model";

const FriendForm = ({ status, addFriend }) => {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFriend: FriendDetails = {
      id: Math.floor(1000000 + Math.random() * 90000),
      name: name,
      amount: 0,
    }
    addFriend(newFriend);
    setName('');
    status(false);
  }

  return (
    <form className="p-4 rounded-2" onSubmit={handleSubmit}>
      <div className="mb-3 d-flex justify-content-center align-items-center">
        <input type="text" className="form-control" placeholder="Enter Friend Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="text-center">
        <button className="btn btn-outline-dark me-3" onClick={() => status(false)} type="button"> Close </button>
        <button className="btn btn-outline-primary" type="submit"> Submit </button>
      </div>
    </form>
  )
}

export default FriendForm