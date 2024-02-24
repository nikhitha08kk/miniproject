import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'
import UserSignUp from "../Pages/User/UserSignUp"
import UserLogin from '../Pages/User/UserLogin'
import UserProduct from '../Pages/User/UserProduct'



function Userrouter() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<UserHome/>}/>
         <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/product' element={<UserProduct/>}/>
  
         
        </Routes>
    </div>
  )
}

export default Userrouter