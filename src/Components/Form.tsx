import { useFormik } from "formik"
import { userSchema } from "../schema";

const initialValues = {
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    age: '',
}

const Form = () => {

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: userSchema,
        onSubmit: (value, action) => {
            console.log(value);
            action.resetForm();
        }
    })

    return (
        <div className="h-100 py-5">
            <h3 className="text-center"> User Form </h3>
            <form className="border h-100 rounded-3 p-5" onSubmit={handleSubmit}>
                <div className="row g-5 ">
                    <div className="col-6">
                        <label htmlFor="name" className="form-label"> Name </label>
                        <input type="text" id="name" onChange={handleChange} value={values.name} className="form-control" />
                        { errors.name && touched.name && <span className="text-danger"> {errors.name} </span> }
                    </div>
                    <div className="col-6">
                        <label htmlFor="email" className="form-label"> Email </label>
                        <input type="email" id="email" onChange={handleChange} value={values.email} className="form-control" />
                        { errors.email && touched.email && <span className="text-danger"> {errors.email} </span> }
                    </div>
                    <div className="col-6">
                        <label htmlFor="phone" className="form-label"> Mobile Number </label>
                        <input type="tel" id="phone" onChange={handleChange} value={values.phone} className="form-control" />
                        { errors.phone && touched.phone && <span className="text-danger"> {errors.phone} </span> }
                    </div>
                    <div className="col-6">
                        <label htmlFor="dob" className="form-label"> Date of birth </label>
                        <input type="date" id="dob" onChange={handleChange} value={values.dob} className="form-control" />
                        { errors.dob && touched.dob && <span className="text-danger"> {errors.dob} </span> }
                    </div>
                    <div className="col-6">
                        <label htmlFor="gender" className="form-label"> Gender </label>
                        <div className="d-flex mt-1">
                            <input type="radio" name="gender" id="male" onChange={handleChange} value={values.gender} className="form-check-input" />
                            <label htmlFor="male" className="form-check-label mx-3" id="male">Male</label>
                            <input type="radio" name="gender" id="female" onChange={handleChange} value={values.gender} className="form-check-input" />
                            <label htmlFor="female" className="form-check-label mx-3" id="female">Female</label>
                        </div>
                        {/* { errors.gender && touched.gender && <span className="text-danger"> {errors.gender} </span> } */}
                    </div>
                    <div className="col-6">
                        <label htmlFor="age" className="form-label"> Age </label>
                        <input type="number" id="age" onChange={handleChange} value={values.age} className="form-control" />
                        { errors.age && touched.age && <span className="text-danger"> {errors.age} </span> }
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form