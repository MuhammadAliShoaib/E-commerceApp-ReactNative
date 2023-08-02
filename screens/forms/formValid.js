import * as Yup from "yup";

export const signupValidation = Yup.object({
    firstName : Yup.string().min(3).max(25).required("Please enter your First name"),
    lastName : Yup.string().min(3).max(25).required("Please enter your Last Name"),
    email : Yup.string().email().required("Please enter your Email"),
    password : Yup.string().min(6).required()

})