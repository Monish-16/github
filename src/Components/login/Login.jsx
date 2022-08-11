import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from '../../Assets/logo.png';
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
import { logInStart } from '../../Actions/authActions';


const SignIn = () => {
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth)
    const User = auth.currentUser
    useEffect(() => {
        if (isSubmitSuccess && User) {            
            navigate('/');
        }
    }, [isSubmitSuccess, User, navigate]);

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .email("Invalid email address")
                .required("Email address is required"),
            password: Yup.string().min(5).required("Password is required"),
        }),

        onSubmit: (values) => {
            dispatch(logInStart(values));
            toast.success("login success");
            setIsSubmitSuccess(true)
        },
    });

    return (
        <div className="container">
            <ToastContainer autoClose={2000} />
            <form onSubmit={formik.handleSubmit}>
                <img src={logo} alt='logo' className='logo-img' />
                <h2>Log In</h2>
                <InputLabel className="labelField" >Login ID</InputLabel>
                <TextField
                    name="userName"
                    type="text"
                    placeholder='example@example.com'
                    className="textField"
                     onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                />

                {formik.touched.userName && formik.errors.userName ? (
                    <div className="error_msg">{formik.errors.userName}</div>
                ) : null}
                <InputLabel className="labelField">Password</InputLabel>
                <TextField
                    name="password"
                    type="password"
                    className="textField"
                    placeholder='enter your password'
                    //   InputProps={{
                    //     startAdornment: (
                    //       <InputAdornment>
                    //         <IconButton>
                    //           <Lock />
                    //         </IconButton>
                    //       </InputAdornment>
                    //     ),
                    //   }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="error_msg">{formik.errors.password}</div>
                ) : null}
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
};

export default SignIn;