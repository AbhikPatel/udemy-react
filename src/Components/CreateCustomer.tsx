import { useState } from "react"

const CreateCustomer = () => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState(null);
    
    return (
        <div className="mb-3">
            <h5> Create new customer 👦</h5>

            <form className="bg-theme p-5">
                <div className="d-flex align-items-center mb-3">
                    <label className="pe-3"> Full Name : </label>
                    <input type="text" />
                </div>
                <div className="d-flex align-items-center mb-3">
                    <label className="pe-3"> Gender : </label>
                    <input type="radio" name="gender" id="male"/>
                    <label className="px-2" htmlFor="male"> M </label>
                    <input type="radio" name="gender" id="female"/>
                    <label className="px-2" htmlFor="female"> F </label>
                </div>
                <div>
                    <button> Add </button>
                </div>
            </form>
        </div>
    )
}

export default CreateCustomer