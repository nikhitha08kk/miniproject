import React from 'react'
import './Home.css';

function Home() {
  return (
<div className='home'>
    <div className='container home-img'>
     <div className="wel marquee-container">
       <div className="marquee-content">WELCOME TO EUPHORIA.COM </div>
    </div>
    </div>
  <div className='container red-bot'>
  <div className='row'>
    <img className='red-lady' alt='red' src='https://www.perfume24x7.com/cdn/shop/files/Mix_Banner_mob-58.jpg?v=1693912505&width=1920'></img>
   <div className='right'> <p>"A good fragrance should have a certain personality that makes people identify the scent with you"</p></div>
   <div className='be'><p>BE MORE</p></div>
   <div className='fid'><p>CONFIDENT</p></div>

  </div>
  </div>
     <div className='sec'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
          <img alt='sent1' className='black-scent' src='https://www.perfume24x7.com/cdn/shop/products/Bvlgari_Man_in_Black_EDP_A_1800x1800_3b9dbe43-461e-4c56-8993-40f72ff1d75e.jpg?v=1636444914&width=900'></img>
            <div className='img-title1'>NEW SELLLER</div>
          </div>
          <div className='col-6'>
          <img alt='sent1' className='violet-scent'src='https://www.perfume24x7.com/cdn/shop/products/bvlgariamethyste.jpg?v=1633960686&width=540'></img>
            <div className='img-title2'>BEST SELLLER</div>
          </div>
        </div>
      </div>
      </div>
  
        
</div>
    
  )
}

export default Home