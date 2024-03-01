import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className='footer'>
     
    <div className='footer-ti'></div>
    <div className='footer-content'>
          <div className='contactus'>
         <h3 className='con'>Collections</h3>
         <p>New arrival</p>
         <p>Best Seller</p>
         <p>For Men</p>
         <p>For Women</p>
         <p>Body & Bath</p>

          </div>
          <div className='www'>
          <h3 className='con'>Customer Service</h3>
          <p>Contact us</p>
          <p>www.euphoria@.com</p>
          </div>
          <div className='follow'>
          <p className='con'>Follow Us</p>
          <p><FontAwesomeIcon icon={faInstagram} /></p>
          <p><FontAwesomeIcon icon={faFacebook} /></p>
          </div>
    </div>
       
     </div>   
   
  )
}

export default Footer