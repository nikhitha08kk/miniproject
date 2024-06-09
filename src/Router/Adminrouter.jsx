import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHomepage from '../Pages/Admin/UserHomepage'


import AdminProduct from '../Pages/Admin/AdminProduct'
import AdminLogin from '../Pages/Admin/AdminLogin'
import AdminOrder from '../Pages/Admin/AdminOrder'
import UsersList from '../Pages/Admin/UsersList'
import AddProduct from '../Components/Admin/AddProduct/AddProduct'
import AdminEditPage from '../Pages/Admin/AdminEditPage'


function Adminrouter() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<UserHomepage/>}/>
        <Route path='/user' element={<UsersList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path='/order' element={<AdminOrder/>}/>
        <Route path='/product' element={<AdminProduct/>}/>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/edit/:id' element={<AdminEditPage/>}/>
      </Routes>
    </div>
  )
}

export default Adminrouter