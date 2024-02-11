import Header from "./Header"
import Footer from "./Footer"
import './App.css'
import ItemForm from "./ItemForm"
import ItemList from "./ItemList"
import { useState } from "react"

const App = () => {

  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const deleteItem = (id) => {
    setItems((res) => res.filter((data) => data.id !== id))
  }

  const packItem = (id) => {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  const clearList = () => {
    setItems([]);
  }

  return (
    <div className="h-100 d-flex flex-column">
      <div className="header-container">
        <Header />
      </div>
      <div className="flex-grow-1 d-flex flex-column">
        <div className="form-container">
          <ItemForm add={addItem} />
        </div>

        <div className="flex-grow-1">
          <ItemList list={items} deleteItem={deleteItem} packItem={packItem} clearList={clearList}/>
        </div>
      </div>
      <div className="header-container">
        <Footer list={items} />
      </div>
    </div>
  )
}

export default App