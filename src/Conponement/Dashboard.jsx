import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate();
  let url = "http://localhost:8000/student/dashboard"
  let token = localStorage.getItem("token")
  useEffect(() => {
    axios.get(url, {
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    })
   .then ((res) => {
     if(res.data.status === true) {
      console.log("success");
     } else {
      localStorage.removeItem("token");
      navigate("/signin");
      console.log(res.status);
     }
   });
  }, [])

  return (
    <div>
        <h1 className='text-center '>WELCOME TO DASHBOARD</h1>
    </div>
  )
}

export default Dashboard