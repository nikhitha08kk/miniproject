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
      <div className='container brand'><h1>TOP BRANDS</h1></div>
      <div className='container top'>
       <div><img alt='brand' src='https://www.perfume24x7.com/cdn/shop/files/azzaro_58031d94-86f5-4836-808f-d3267e938a30.png?v=1623507065&width=180'></img></div>
       <div><img alt='brand' src='https://www.perfume24x7.com/cdn/shop/files/Hugo-Boss-logo_3874436b-b12d-4417-81d0-8e53cb196ffc.jpg?v=1623589260&width=180'></img></div>
       <div><img alt='brand' src='https://www.perfume24x7.com/cdn/shop/files/bvlgari.jpg?v=1623589433&width=180'></img></div>
       <div><img alt='brand' src='https://www.perfume24x7.com/cdn/shop/files/Carolina-Herrera.jpg?v=1629915192&width=180'></img></div>
       <div><img alt='brand' src='https://www.perfume24x7.com/cdn/shop/files/Elizabeth-Arden-Emblem.png?v=1633858292&width=180'></img></div>
       <div><img alt='brand' src='https://www.perfume24x7.com/cdn/shop/files/Prada_Logo.jpg?v=1688063075&width=180'></img></div>
        </div>
        <div className='container top-2'>
          <div><img alt='brand' src='https://www.perfume24x7.com/cdn/shop/files/versace_a6f369c3-93c3-49a0-9fba-3367bf63a92f.jpg?v=1623589721&width=180'></img></div>
          <div><img alt='brand' src='https://www.perfume24x7.com/cdn/shop/files/Paco_Rabanne_076b7bac-c8cf-43d6-b30a-a53aaebb6c43.gif?v=1623589983&width=180'></img></div>
          <div><img alt='brand' src='https://www.perfume24x7.com/cdn/shop/files/victorias-secret_e22ec485-3018-43d2-8114-ba5a9eb4729b.png?v=1623589800&width=180'></img></div>
          <div><img alt='brand' src='https://www.perfume24x7.com/cdn/shop/files/YSL_Logo.png?v=1617389650&width=180'></img></div>
        </div>
     
        
</div>
    
  )
}

export default Home