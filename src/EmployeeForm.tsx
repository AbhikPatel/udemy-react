import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const EmployeeForm = ({ loader }) => {

  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [city, setCity] = useState('');

  const [cities, setCities] = useState([]);
  const [domains, setDomains] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {

    async function getAllDatas() {
      loader(true);
      const responseCities = await fetch(`http://localhost:3000/cities`);
      const citiesList = await responseCities.json();
      setCities(citiesList);
      const responseDomains = await fetch(`http://localhost:3000/domain`);
      const domainsList = await responseDomains.json();
      setDomains(domainsList);

    }
    getAllDatas();
    
    if (params.id) {
      fetch(`http://localhost:3000/employees/${params.id}`).then((res) => res.json()).then((res) => {
        const { name, domain, age, mobile, gender, dob, city } = res;
        setName(name);
        setDomain(domain);
        setAge(age);
        setMobile(mobile);
        setGender(gender);
        setDob(dob);
        setCity(city);
      });
      loader(false);
    }

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      name: name,
      domain: domain,
      age: age,
      mobile: mobile,
      gender: gender,
      dob: dob,
      city: city,
    }
    loader(true);
    if (params.id) {
      fetch(`http://localhost:3000/employees/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
    } else {

      fetch(`http://localhost:3000/employees`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
    }
    loader(false);
    navigate('/list');
  }

  return (
    <div className="h-100 container py-5">
      <div className="text-center mb-5">
        <h1> Employee Form </h1>
      </div>
      <form className="border p-5 rounded-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="row g-5">
          <div className="col-6">
            <label className="form-label"> Name </label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="col-6">
            <label className="form-label"> Domain </label>
            <select className="form-select" value={domain} onChange={(e) => setDomain(e.target.value)}>
              <option value={''} disabled hidden> </option>
              {
                domains.map((data) => <option key={data.id} value={data.domainName}>{data.domainName}</option>)
              }
            </select>
          </div>
          <div className="col-6">
            <label className="form-label"> Age </label>
            <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="col-6">
            <label className="form-label"> Phone Number </label>
            <input type="tel" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
          <div className="col-6">
            <label className="form-label" id="genderLabel"> Gender </label>
            <div className="d-flex align-items-center">
              <input type="radio" className="form-check-input" name="gender" value={'male'} id="male" onChange={(e) => setGender(e.target.value)} />
              <label className="form-check-label mx-3" htmlFor="male" id="male"> Male </label>
              <input type="radio" className="form-check-input" name="gender" value={'female'} id="female" onChange={(e) => setGender(e.target.value)} />
              <label className="form-check-label mx-3" htmlFor="female" id="female"> Female </label>
            </div>
          </div>
          <div className="col-6">
            <label className="form-label"> Date of Birth </label>
            <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div className="col-6">
            <label className="form-label"> City </label>
            <select className="form-select" value={city} onChange={(e) => setCity(e.target.value)}>
              <option value={''} disabled hidden> </option>
              {
                cities.map((data) => <option key={data.id} value={data.cityName}>{data.cityName}</option>)
              }
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <Link to={'/list'}>
            <button type="button" className="btn btn-danger"> Back </button>
          </Link>
          <div className="d-flex gap-3">
            <button type="reset" className="btn btn-primary"> Reset </button>
            <button type="submit" className="btn btn-success"> Submit </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EmployeeForm