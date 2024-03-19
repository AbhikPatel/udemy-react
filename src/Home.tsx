import { useSelector } from "react-redux";
import Bank from "./Components/Bank"
import CreateCustomer from "./Components/CreateCustomer"

const Home = () => {

  const customer = useSelector((store) => store.customer);

  return (
    <>
      {customer.fullName === '' ? <CreateCustomer /> : <Bank customer={customer} />}
    </>
  )
}

export default Home