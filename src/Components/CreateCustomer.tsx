import { useState } from "react"
import { addCustomer } from "../Slices/customerReducer";
import { useDispatch } from "react-redux";

const CreateCustomer = () => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCustomer(name, gender));
    }
    
    return (
        <div className="mb-3">
            <h5> Create new customer 👦</h5>

            <form className="bg-theme p-5" onSubmit={(e) => handleSubmit(e)}>
                <div className="d-flex align-items-center mb-3">
                    <label className="pe-3"> Full Name : </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <label className="pe-3"> Gender : </label>
                    <input type="radio" value={'male'} onChange={(e) => setGender(e.target.value)} name="gender" id="male"/>
                    <label className="px-2" htmlFor="male"> M </label>
                    <input type="radio" value={'female'} onChange={(e) => setGender(e.target.value)} name="gender" id="female"/>
                    <label className="px-2" htmlFor="female"> F </label>
                </div>
                <div>
                    <button role="submit"> Create new Customer </button>
                </div>
            </form>
        </div>
    )
}

export default CreateCustomer