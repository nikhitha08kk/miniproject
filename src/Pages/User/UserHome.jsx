import React from 'react'
 import Header from '../../Components/User/Header/Header'
 import Home from '../../Components/User/HomePage/Home'
import Footer from '../../Components/User/Footerl/Footer'
import RedLady from '../../Components/User/HomePage/RedLady'
import Wel from '../../Components/User/HomePage/Wel'
import Topbrand from '../../Components/User/HomePage/Topbrand'
import Navbar from '../../Components/User/Header/Navbar'
import Notes from '../../Components/User/HomePage/Notes'
import About from '../../Components/User/HomePage/About'



function UserHome() {
  return (
    <div><Header/><Navbar/><Wel/><RedLady/> <Home/><Notes/><About/><Topbrand/><Footer/></div>
   
  )
}

export default UserHome