import React from 'react'
import './Home.css';


function Home() {
  return (
    <div className='home'>
    <div className='container home-img'>
<img className='bot' alt='home-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVX0wd9qUfsP6lHcPQGkT6L5GB6xs79L5KEZZeiQqY_50Icy9s123lwpeXI7Jdve8aWrQ&usqp=CAU'></img>
<div className="wel">
  WELCOME TO EUPHORIA.COM
</div>
<div className='we'>
  We are dedicated to providing our customers with the best  online  perfume   collection<br></br> and satisfaction while doing so.Here you will find 100% authentic products at competitive
  <br></br>pricing , free Express shipping , and a vast range of International Fragrances....
</div>

     </div> 
     <div className='sec'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img className='new' alt='one' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlk1CmrWEl_g9kPhV1v12uxsdehivzO3lbw&usqp=CAU'></img>
            <div className='img-title1'>NEW SELLLER</div>
          </div>
          <div className='col-6'>
            <img className='best' alt='two' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuc0jfrO3jIQcVjlGDRR74oRu4DWmWDGRb9g&usqp=CAU'></img>
            <div className='img-title2'>BEST SELLLER</div>
          </div>
        </div>
      </div>
      </div>
      <div className='gender'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 first-men'>
                 
                  <div className='col-4'>
                    <img alt='sent1' className='black-scent' src='https://www.perfume24x7.com/cdn/shop/products/Bvlgari_Man_in_Black_EDP_A_1800x1800_3b9dbe43-461e-4c56-8993-40f72ff1d75e.jpg?v=1636444914&width=900'></img>
                  </div>
                  <div className='col-4 image-men'>
                      <img className='men' alt='img-men' src='https://www.perfume24x7.com/cdn/shop/products/PacoRabanne1MillionEDTA.jpg?v=1623850196&width=540'></img>
                  </div> 
                  <div className='col-4'></div>
            </div>
            <div className='col-6 sec-women'>
                 
                  <div className='col-4'>
                  <img alt='sent1' className='violet-scent'src='https://www.perfume24x7.com/cdn/shop/products/bvlgariamethyste.jpg?v=1633960686&width=540'></img>
                  </div>
                  <div className='col-4 image-men'>
                   <img className='women' alt='img-women' src='https://www.perfume24x7.com/cdn/shop/products/Jimmy_Choo_EDP_For_Women_100_MLA.jpeg?v=1626279658&width=540'></img>
                  </div>
                  <div className='col-4'></div>
            </div>
          </div>
        </div>
      </div>
        
</div>
    
  )
}

export default Home