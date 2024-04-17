import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import  Signoutpage  from './Pages/Signoutpage'
import  Signinpage  from './Pages/Signinpage'
import Fetch from './Pages/Fetch'
import Signup from './Conponement/Signup'
import Signin from './Conponement/Signin'
import Dashboard from './Conponement/Dashboard'
import { Toaster } from 'react-hot-toast';
import Counter from './Conponement/Counter'
import Upload from './Conponement/Upload'

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      {/* <Signin /> */}
      <Toaster position='top-center' reverseOrder={false} />
        <Routes> 
      <Route path="/Signoutpage" element={<Signoutpage/>} />
      <Route path="/Signinpage" element={<Signinpage/>} />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Counter" element={<Counter/>} />
      <Route path="/Upload" element={<Upload/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Dashboard" element={token ? <Dashboard/> : <Navigate to="/Signin" />} />
      <Route path="/" element={<Fetch/>} />
     </Routes>
    </div>
  )
}

export default App







