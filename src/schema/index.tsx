import * as Yup from 'yup';

export const userSchema = Yup.object({
    name: Yup.string().min(2).max(50).required("Name is required."),
    email: Yup.string().email().min(2).max(50).required("Email Address is required."),
    phone: Yup.number().min(10).required("Mobile Number is required."),
    dob: Yup.date().required("Date of birth is required."),
    age: Yup.number().min(1).max(2).required("Age is required."),
})