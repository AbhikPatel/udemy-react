import { useState } from "react"

const Splitter = ({ selected, amount }) => {

  const [bill, setBill] = useState(0);
  const [expense, setExpense] = useState(0);
  const [payer, setPayer] = useState(0);

  const friendExpense = (bill - expense);

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer:number = payer === 0 ? friendExpense : (friendExpense - bill);
    amount(answer);
  }

  return (
    <div className="bill rounded p-5">
      <h4 className="mb-5"> Split Bill with {selected.name} </h4>
      <form onSubmit={handleSubmit}>
        <div className="row g-4 mb-4">
          <div className="col-6">
            <div className="d-flex align-items-center h-100">
              <span> 💰 Bill Value </span>
            </div>
          </div>
          <div className="col-6">
            <input type="number" value={bill} onChange={(e) => setBill(e.target.value)} className="form-control" />
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center h-100">
              <span> 🧍‍♂️ Your expense </span>
            </div>
          </div>
          <div className="col-6">
            <input type="number" value={expense} onChange={(e) => setExpense(e.target.value)} className="form-control" />
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center h-100">
              <span> 🧍‍♂️🧍‍♂️ {selected.name}'s expense </span>
            </div>
          </div>
          <div className="col-6">
            <input type="number" disabled value={friendExpense} className="form-control" />
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center h-100">
              <span> 🤑 Who is paying? </span>
            </div>
          </div>
          <div className="col-6">
            <select className="form-select" value={payer} onChange={(e) => setPayer(e.target.value)}>
              <option value={0}>You</option>
              <option value={1}>{selected.name}</option>
            </select>
          </div>
        </div>
        <div className="gap-2 d-flex justify-content-end">
          <button className="btn btn-outline-primary" type="submit"> Split Bill </button>
        </div>
      </form>
    </div>
  )
}

export default Splitter