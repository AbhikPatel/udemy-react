import { useSelector } from "react-redux"

const Balance = () => {

  const balance = useSelector((store) => store.account.bal)

  return (
    <div className="bg-theme">
        <h2 className="m-0"> ₹ {balance} </h2>
    </div>
  )
}

export default Balance