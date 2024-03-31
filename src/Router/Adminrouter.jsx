import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHomepage from '../Pages/Admin/UserHomepage'
import UsersData from '../Pages/Admin/UsersData'
import AdminProduct from '../Pages/Admin/AdminProduct'
import AdminLogin from '../Pages/Admin/AdminLogin'
import AdminOrder from '../Pages/Admin/AdminOrder'
function Adminrouter() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<UserHomepage/>}/>
        <Route path='/user' element={<UsersData/>}/>
        <Route path='/order' element={<AdminOrder/>}/>
        <Route path='/product' element={<AdminProduct/>}/>
        <Route path='/login' element={<AdminLogin/>}/>
      </Routes>
    </div>
  )
}

export default Adminrouter