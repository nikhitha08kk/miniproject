import React from 'react'
import './Header.css'
function Navbar() {
  return (
    <div className=' navbar'>
    <div className='row nav'>
    <div className='col'>
        <div className='nav-item'><a href='/'>HOME</a></div>
      </div>
      <div className='col'>
        <div className='nav-item'><a href='/Newarrival'>NEW ARRIVALS</a></div>
      </div>
      <div className='col'>
        <div className='nav-item'> <a href='/bestseller'>BEST SELLER</a></div>
      </div>
      <div className='col'>
        <div className='nav-item'><a href='/Men'>MEN </a></div>
      </div>
      <div className='col'>
        <div className='nav-item'><a href='/Women'>WOMEN </a></div>
      </div>
      <div className='col'>
        <div className='nav-item'><a href='/bodybath'>BODY & BATH </a></div>
      </div>
 </div>
</div>
  )
}

export default Navbar