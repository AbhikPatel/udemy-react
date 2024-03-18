
const Bank = () => {
  return (
    <div>
      <h5> Welcome 🖐, Mr. Abhishek Patel </h5>
      <form className="bg-theme p-5">
        <div className="mb-3">
          <label> Deposit: </label>
          <input type="number" className="mx-3"/>
          <button> Deposit </button>
        </div>
        <div className="mb-3">
          <label> Withdraw: </label>
          <input type="number" className="mx-3"/>
          <button> Withdraw </button>
        </div>
        <div className="mb-3">
          <label> Loan: </label>
          <input type="number" className="mx-3" placeholder="Loan amount"/>
          <input type="text" className="mx-3" placeholder="Loan reason"/>
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