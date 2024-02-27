import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaSearch, FaCartPlus } from 'react-icons/fa';
import { IoHeartOutline } from 'react-icons/io5'; 


function Header() {
  const iconSize = 24; // Set the size of the icons (in pixels)
  


  return (
    <div className="Header">
      <div className='container top'>
              <div className="col-10 head"><img alt='logo' className='logo' src='data:image/jpeg;base64,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'></img></div>
               <div><FaSearch size={iconSize} /></div>
               <div className='dropdown'>
               <div className='dropbtn'><FaUser size={iconSize} /> <div className='dropdown-content'>
          <a href='/SignUp'>signup</a>
          <a href='/Login'>login</a>
          </div></div></div>
               <div><IoHeartOutline size={iconSize} /></div>
               <div><FaCartPlus size={iconSize} /></div>
      </div>
    
      <div className='container navbar'>
          <div className='row nav'>
            <div className='col'>
              <div className='nav-item'><a href='/Newarrival'>NEW ARRIVALS</a></div>
            </div>
            <div className='col'>
              <div className='nav-item'>BEST SELLER</div>
            </div>
            <div className='col'>
              <div className='nav-item'>MEN</div>
            </div>
            <div className='col'>
              <div className='nav-item'>WOMEN</div>
            </div>
            <div className='col'>
              <div className='nav-item'>BODY & BATH</div>
            </div>
            <div className='col'>
              <div className='nav-item'>MINIATURES</div>
            </div>
            <div className='col'>
              <div className='nav-item'>SHOP BY BRANDS</div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Header;
