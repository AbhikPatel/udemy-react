import { useState } from "react";
import { useDispatch } from "react-redux";
import { depositAmount, withdrawAmount } from "../Slices/accountReducer";

const Bank = ({ customer }) => {

  const dispatch = useDispatch();

  const [deposit, setDesopit] = useState('');
  const [withdraw, setWithdraw] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    dispatch(depositAmount(deposit))
    setDesopit('');
  }

  const handleWithdraw = (e) => {
    e.preventDefault();
    dispatch(withdrawAmount(withdraw));
    setWithdraw('');
  }

  return (
    <div>
      <h5> Welcome 🖐, {customer.gender === 'male' ? 'Mr.' : 'Mrs.'} {customer.fullName} </h5>
      <form className="bg-theme p-5">
        <div className="mb-3">
          <label> Deposit: </label>
          <input type="number" className="mx-3" value={deposit} onChange={(e) => setDesopit(e.target.value)} />
          <button onClick={(e) => handleDeposit(e)}> Deposit </button>
        </div>
        <div className="mb-3">
          <label> Withdraw: </label>
          <input type="number" className="mx-3" value={withdraw} onChange={(e) => setWithdraw(e.target.value)} />
          <button onClick={(e) => handleWithdraw(e)}> Withdraw </button>
        </div>
        <div className="mb-3">
          <label> Loan: </label>
          <input type="number" className="mx-3" placeholder="Loan amount" />
          <input type="text" className="mx-3" placeholder="Loan reason" />
          <button> Loan </button>
        </div>
        <div className="mb-3">
          <button> Pay Loan </button>
        </div>
      </form>
    </div>
  )
}

export default Bank