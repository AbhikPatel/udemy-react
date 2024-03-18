import Balance from "./Components/Balance"

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
        <h1> The React Redux Bank </h1>
        <Balance />
    </div>
  )
}

export default Header