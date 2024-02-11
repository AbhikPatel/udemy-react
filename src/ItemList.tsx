
const ItemList = ({ list, deleteItem, packItem, clearList }) => {

  const handlePacked = (id) => {
    packItem(id);
  }

  const handleDelete = (id) => {
    deleteItem(id);
  }

  return (
    <div className="container border h-100 p-5">
      <div className="row">
        {list.map((item) => {
          return (
            <div className="col-3 py-3" key={item.id}>
              <input type="checkbox" value={item.packed} onChange={() => handlePacked(item.id)} />
              <span className={item.packed ? 'text-decoration-line-through px-1' : 'px-1'}>{item.description}</span>
              <span role="button" onClick={() => handleDelete(item.id)}>❌</span>
            </div>
          )
        })}
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-danger" onClick={clearList}> Clear </button>
      </div>
    </div>
  )
}

export default ItemList