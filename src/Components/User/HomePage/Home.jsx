import React from 'react'
import './Home.css';

function Home() {
  return (
<div className='home'>
     <div className='sec'>
     
        <div className='row'>
          <div className='col-6'>
         <a href='/Newarrival'> <img alt='sent1' className='black-scent' src='https://www.perfume24x7.com/cdn/shop/products/Bvlgari_Man_in_Black_EDP_A_1800x1800_3b9dbe43-461e-4c56-8993-40f72ff1d75e.jpg?v=1636444914&width=900'></img></a>
            <div className='img-title1'>NEW SELLLER</div>
          </div>
          <div className='col-6'>
          <a href='/Bestseller'><img alt='sent1' className='violet-scent'src='https://www.perfume24x7.com/cdn/shop/products/bvlgariamethyste.jpg?v=1633960686&width=540'></img></a>
            <div className='img-title2'>BEST SELLLER</div>
          </div>
        </div>
      </div>
      <div className='note-title'>SHOP BY NOTES</div>
     
     
</div>
    
  )
}

export default Home