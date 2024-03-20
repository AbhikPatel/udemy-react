import { useState } from "react";
import Home from "./Home";
import Loader from "./Loader";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const App = () => {

  const [loader, setLoader] = useState(false);

  return (
    <div className="h-100 position-relative overflow-auto">
      {loader && <Loader />}
      <Home loader={setLoader} />
      <ToastContainer autoClose={1000}/>
    </div>
  )
}

export default App