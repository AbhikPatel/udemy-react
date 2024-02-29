import { useReducer } from "react";

const initialState = {
  bal: 0,
  loan: 0,
  isActive: false
}

function reducer(state, action) {

  switch(action) {
    case 'open' : return {...state, bal:500, isActive:true}
    case 'deposit' : return {...state, bal: state.bal + 100}
    case 'withdraw' : return {...state, bal: state.bal - 50}
    case 'loan' : return {...state, bal: state.bal + 5000, loan:5000}
    case 'payLoan' : return {...state, bal: state.bal - 5000, loan:0}
    case 'close' : return {bal: 0, loan:0, isActive:false}
    default : return state
  }
}

const App = () => {

  const [bank, dispatch] = useReducer(reducer, initialState)

  return (

    <div className="d-flex flex-column justify-content-center align-items-center container p-5">
      <h1 className="mb-5"> useReducer Bank Account </h1>
      <h4 className="mb-3"> Balance: {bank.bal} </h4>
      <h4 className="mb-5"> Loan: {bank.loan} </h4>

      <div className="mt-5 d-flex flex-column">
        <button className="btn btn-success mb-5" disabled={bank.isActive} onClick={() => dispatch('open')}> Open Account </button>
        <button className="btn btn-primary mb-5" disabled={!bank.isActive} onClick={() => dispatch('deposit')}> Deposit 100 </button>
        <button className="btn btn-primary mb-5" disabled={!bank.isActive || bank.bal === 0} onClick={() => dispatch('withdraw')}> Withdraw 50 </button>
        <button className="btn btn-warning mb-5" disabled={!bank.isActive || bank.loan !== 0} onClick={() => dispatch('loan')}> Request a loan 5000 </button>
        <button className="btn btn-success mb-5" disabled={!bank.isActive || bank.loan === 0} onClick={() => dispatch('payLoan')}> Pay loan </button>
        <button className="btn btn-danger mb-5" disabled={!bank.isActive} onClick={() => dispatch('close')}> Close Account </button>
      </div>
    </div>
  )
}

export default App