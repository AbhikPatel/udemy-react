import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmployeeForm from "./EmployeeForm"
import EmployeeList from "./EmployeeList"
import Home from "./Home"
import NotFound from "./NotFound"
import Loader from "./Loader"

const App = () => {

  const [employee, setEmployee] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {

    async function getEmployees() {
      setShowLoader(true);
      const response = await fetch(`http://localhost:3000/employees`);
      const result = await response.json();
      setEmployee(result);
      setShowLoader(false);
    }

    getEmployees();
  }, [])

  const handleDelete = (id: number) => {
    fetch(`http://localhost:3000/employees/${id}`, {
      method: 'DELETE'
    });
    fetch(`http://localhost:3000/employees`).then((res) => res.json()).then((res) => setEmployee(res));
  }

  return (
    <div className="h-100 position-relative">
      {showLoader && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<EmployeeList employee={employee} onDelete={handleDelete} />} />
            <Route path="list" element={<EmployeeList employee={employee} onDelete={handleDelete} />} />
            <Route path="form" element={<EmployeeForm loader={setShowLoader}/>} />
            <Route path="form/:id" element={<EmployeeForm loader={setShowLoader} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App