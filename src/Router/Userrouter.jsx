import React from 'react'
import { Routes,Route, } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'
import UserSignUp from "../Pages/User/UserSignUp"
import UserLogin from '../Pages/User/UserLogin'
import UserProduct from '../Pages/User/UserProduct'
import UserArrival from '../Pages/User/UserArrival'
import UserBestseller from '../Pages/User/UserBestseller'
import UserBodywash from '../Pages/User/UserBodywash'
import UserMen from '../Pages/User/UserMen'
import UserWomen from '../Pages/User/UserWomen'
import UserCart from '../Pages/User/UserCart'
import UserWish from '../Pages/User/UserWish'


function Userrouter() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<UserHome/>}/>
        <Route path='/SignUp' element={<UserSignUp/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/product' element={<UserProduct/>}/>
        <Route path='/Newarrival'element={<UserArrival/>}/>
        <Route path='/Bestseller' element={<UserBestseller/>}/>
        <Route path='/Bodywash' element={<UserBodywash/>}/>
        <Route path='/Men' element={<UserMen/>}/>
        <Route path='/Women'element={<UserWomen/>}/>
        <Route path='/Cart' element={<UserCart/>}/>
        <Route path='/Wish' element={<UserWish/>}/>
     
        </Routes>
    </div>
  )
}

export default Userrouter