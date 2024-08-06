import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
// import Register from './Authentication/Register/Register'
import "./App.css"
// import Login from './Authentication/Login/Login'
import Login from './Components/Login/Login'
import FaLogin from './Components/TwoStepverification/FALogin/FaLogin'

// import ClientRegister from './Authentication/Register/ClientRegister/ClientRegister'
import ClientRegister from './Components/Register/ClientRegister/ClientRegister';
import LawyerRegister from './Components/Register/LawyerRegister/LawyerRegister'
import AdminRegister from './Components/Register/AdminLawyer/AdminRegister'
import AdminProgress from './Components/Register/AdminLawyer/AdminProgress'
import Forgotpassword from './Components/ForgotPassword/Forgotpassword'
const App = () => {
  return (
    <div className='App'>

   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/clientreg" element={<ClientRegister/>} />
    <Route path="/verification" element={<FaLogin/>} />
    <Route path='/lawyerreg' element={<LawyerRegister/>}/>
    <Route path='/adminregister' element={<AdminRegister/>}/>
    <Route path='/progress:id' element={<AdminProgress/>}/>
    <Route path='/forgotpassword' element={<Forgotpassword/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
