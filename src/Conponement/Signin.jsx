import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
 // Import toast

const Signin = () => {
  const navigate = useNavigate();

  const Signup = () => {
    // event.preventDefault();
    navigate("/Signup");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:8000/student/loginUser", values)
        .then((response) => {
          console.log(response);
          toast.success("Login successful"); // Display success message
          let token = response.data.token;
          localStorage.setItem("token", token);
          navigate("/Dashboard");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Login failed"); // Display error message
        });
    },
  });

  return (
    <form className="form mx-auto " onSubmit={formik.handleSubmit}>
      <h1 className="title fw-bolder fst-italic text-center">Sign In</h1>
      <h3 className="message fw-bolder fst-italic text-center">Welcome to Signin page.</h3>
      <div>
        <label htmlFor="email" className="fw-bolder fst-italic">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="input w-100 "
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor="password" className="fw-bolder fst-italic">Password</label>
        <input
          type="password"
          className="input w-100"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <button className="submit btn btn-danger mx-auto d-block mt-4" type="submit">
        Submit
      </button>
      <p className="signin fw-bolder fst-italic text-center mt-3 ">
        Don't have an account?{" "}
        <a href="#" onClick={Signup}>
          Sign Up
        </a>
      </p>
    </form>
  );
};

export default Signin;
