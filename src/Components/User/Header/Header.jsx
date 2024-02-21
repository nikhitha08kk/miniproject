import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaSearch, FaCartPlus } from 'react-icons/fa';
import { IoHeartOutline } from 'react-icons/io5'; 

function Header() {
  const iconSize = 24; // Set the size of the icons (in pixels)


  return (
    <div className="Header">
      <div className="container top">
        <div className='row '>
          <div className="col-9 head">Euphoria</div>
          <div className="col-3 icons">
            <span className='iconbar'><FaSearch size={iconSize} /></span>
            <span className='iconbar'><FaUser size={iconSize} /></span>
            <span className='iconbar'><IoHeartOutline size={iconSize} /></span>
            <span className='iconbar'><FaCartPlus size={iconSize} /></span>
          </div>
        </div>
      </div>
      <div className='container navbar'>
          <div className='row nav'>
            <div className='col'>
              <div className='nav-item'>NEW ARRIVALS</div>
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
