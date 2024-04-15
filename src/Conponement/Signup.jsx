import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigate

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const URL = "http://localhost:8000/student/registerUser";

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      firstname: Yup
      .string()
      .required("First Name is Required")
      .max(15, "Must be 15 characters or less")
      .min(3, "Must be 3 characters or more"),
      
      lastname: Yup
        .string()
        .required("Last Name is Required")
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more"),

        email: Yup
        .string()
        .email("Invalid email address")
        .required("Email is Required"),

        password: Yup
        .string()
        .min(8, "password Must be 8 characters or more")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[^A-Za-z0-9]/, "Password must contain at least one special character")
        .required("Password is Required")

    }),

    onSubmit: (values) => {
      console.log(values);

      axios
        .post(URL, values)
        .then((res) => {
          setSuccessMessage("Signup Successfully");
          setErrorMessage("");
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
          console.log(res.data.message);
          navigate("/Signin"); // Navigate to Signin after successful signup
        })
        .catch((err) => {
          setErrorMessage("Failed to Signup");
          setSuccessMessage("");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
          console.log(err);
        });
    },
  });

  return (
    <div>
      {successMessage && <h3 style={{ color: "green" }}>{successMessage}</h3>}
      {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}

      <form onSubmit={formik.handleSubmit} className="form mx-auto ">
        <div>
          <h1 className="fw-bolder fst-italic text-center">Sign up</h1>
          <label htmlFor="firstname" className="fw-bolder fst-italic text-center mt-2">First Name:</label> 
          <input
            type="text"
            onBlur={formik.handleBlur}
            placeholder="Enter First Name"
            name="firstname"
            className="input w-100"
            id="firstname"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div style={{ color: "red" }}>{formik.errors.firstname}</div>
          ):null}
        </div>
        <div>
          <label htmlFor="lastname" className="fw-bolder fst-italic text-center mt-2">Last Name:</label> 
          <input
            type="text"
            onBlur={formik.handleBlur}
            placeholder="Enter Last Name"
            name="lastname"
            id="lastname"
            className="input w-100"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
           {formik.touched.lastname && formik.errors.lastname ? (
            <div style={{ color: "red" }}>{formik.errors.lastname}</div>
          ):null}
        </div>
        <div>
          <label htmlFor="email" className="fw-bolder fst-italic text-center m-2 ">Email:</label>
          <input
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Enter Email"
            className="input w-100"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
           {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ):null}
        </div>
        <div>
          <label htmlFor="password" className="fw-bolder fst-italic text-center m-2 ">Password:</label>
          <input
            onBlur={formik.handleBlur}
            type="password"
            placeholder="Enter Password"
            className="input w-100"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
           {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ):null}
        </div>
        <button type="submit" className="submit btn btn-danger mx-auto d-block mt-4 w-100 " id="button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
