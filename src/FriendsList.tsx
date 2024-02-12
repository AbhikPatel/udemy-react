import { useState } from "react"
import Friend from "./Friend"
import FriendForm from "./FriendForm"
import { FriendDetails } from "./friend.model"

const FriendsList = ({ list, addFriend, removeFriend, current, selected }) => {

  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="h-100 overflow-auto">
      {list.map((friend: FriendDetails) => (
        <Friend details={friend} removeFriend={removeFriend} current={current} selected={selected} key={friend.id} />
      ))}
      {openForm ? <FriendForm status={setOpenForm} addFriend={addFriend} /> :
        <div className="text-center p-4">
          <button className="btn btn-outline-success" onClick={() => setOpenForm(true)}> Add </button>
        </div>
      }
    </div>
  )
}

export default FriendsList