import { Link, useNavigate } from "react-router-dom";

const EmployeeList = ({ employee, onDelete }) => {

  const navigate = useNavigate();

  const handleUpdate = (id:number) => {
    navigate(`/form/${id}`)
  }

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-end mb-5">
        <Link to='/form'>
          <button className="btn btn-primary"> Add Employee </button>
        </Link>
      </div>
      <div className="overflow-hidden rounded-2 border">
        <table>
          <colgroup>
            <col style={{ width: '150px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '150px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '100px' }} />
            <col style={{ width: '100px' }} />
          </colgroup>
          <thead>
            <tr>
              <th> Name </th>
              <th> Domain </th>
              <th> Age </th>
              <th> Mobile Number </th>
              <th> Gender </th>
              <th> Date of Birth </th>
              <th> City </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>

            {employee.length === 0 ? <tr>
              <td colSpan="8" className="text-center"> No Record Found </td>
            </tr>
              : employee.map((emp: any) =>
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.domain}</td>
                  <td>{emp.age}</td>
                  <td>{emp.mobile}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.dob}</td>
                  <td>{emp.city}</td>
                  <td>
                    <button type="button" onClick={() => handleUpdate(emp.id)} className="btn btn-primary btn-sm me-2"> Edit </button>
                    <button type="button" onClick={() => onDelete(emp.id)} className="btn btn-danger btn-sm"> Delete </button>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeList