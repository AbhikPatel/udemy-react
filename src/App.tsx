import { useState } from "react"
import FriendsList from "./FriendsList"
import Splitter from "./Splitter"
import { FriendDetails } from "./friend.model"

const friendsData: FriendDetails[] = [
  {
    id: 101,
    name: 'Mrunal',
    amount: 0
  },
  {
    id: 102,
    name: 'Tanmay',
    amount: 0
  },
  {
    id: 103,
    name: 'Aman',
    amount: 0
  },
]

const App = () => {

  const [friends, setFriends] = useState(friendsData);

  const [selectedFriend, setSelectedFriend] = useState(null);

  const addFriend = (Obj: FriendDetails) => {
    setFriends([...friends, Obj])
  }

  const removeFriend = (id: number) => {
    setFriends((items: FriendDetails[]) => items.filter((item: FriendDetails) => item.id !== id));
  }

  const handleSplit = (friend: FriendDetails) => {
    selectedFriend && selectedFriend.id === friend.id ? setSelectedFriend(null) : setSelectedFriend(friend);
  }

  const handleAmount = (expense: number) => {
    selectedFriend && setFriends((items) => items.map((item) => item.id === selectedFriend.id ? {...item, amount:expense} : item));
    setSelectedFriend(null);
  }

  return (
    <div className="h-100 container d-flex justify-content-center align-items-center">
      <div className="splitter-container">
        <div className="row h-100">
          <div className="col-6">
            <FriendsList list={friends} addFriend={addFriend} removeFriend={removeFriend} current={handleSplit} selected={selectedFriend} />
          </div>
          <div className="col-6">
            {selectedFriend && <Splitter selected={selectedFriend} amount={handleAmount} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App