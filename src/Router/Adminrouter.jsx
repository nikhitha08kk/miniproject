import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserHomepage from '../Pages/Admin/UserHomepage'
import UsersData from '../Pages/Admin/UsersData'
import UserLogin from '../Pages/Admin/UserLogin'
import AdminProduct from '../Pages/Admin/AdminProduct'
function Adminrouter() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<UserHomepage/>}/>
        <Route path='/user' element={<UsersData/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/product' element={<AdminProduct/>}/>
      </Routes>
    </div>
  )
}

export default Adminrouter