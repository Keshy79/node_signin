import React from 'react'
import { useState } from 'react';
import axios from 'axios';

 const Fetch = () => {
    const [firstName, setfirstName] = useState("");
const [lastName, setlastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
let URL = "http://localhost:8000/student/registerUser";
let url = "http://localhost:8000/student/about"
const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data sent successfully");
    console.log(firstName, lastName, email, password);
    axios.post(URL, {
        firstName,
        lastName,
        email,
        password
    })
        .then((res) => {
            console.log("Data sent successfully");
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
            
        })}
    const handleAbout = (e) => {
        e.preventDefault();
       
        axios.get(url)
            .then((res) => {
                console.log("Data sent successfully");
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                
            })
        }
  return (
    <div>
        <form   className='d-flex align-items-center justify-content-center flex-column'>
            <input type="text" name='firstname' id='firstName' placeholder='FirstName' onChange={(e) => setfirstName(e.target.value)} />
            <input type="text" name='lastname' id='lastName' placeholder='LastName' onChange={(e) => setlastName(e.target.value)} />
            <input type="text" name='email' id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" name='password' id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
           

            <button type='submit' onClick={handleSubmit}>Submit</button>
            <button type='submit' onClick={handleAbout}>About</button>
        </form>
    </div>
  )
}


export default Fetch






        
       

