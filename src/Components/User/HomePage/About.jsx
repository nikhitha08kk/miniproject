import React from 'react'
import'./Home.css';
function About() {
  return (
    <div className='about'>
        <h1 className='abt-title'>ABOUT US</h1>
     <div className='abt-para'>
        <p className='abt-para1'>Euphoria.com is India's largest online retailer of perfumes,
         colognes and deodorants. We offer competitive prices, delivery and top-notch customer service to our customers. </p>

       <p className='abt-para2'>Our mission is to provide the best quality products 
       at the most affordable prices. We have a wide range of products from leading 
        like Calvin Klein, Hugo Boss, Gucci and many more. Our team of experts are 
        always available to help you find the perfect scent for any occasion. With our 
        easy-to-use website and mobile app, you can shop for your favorite fragrances anytime, anywhere!</p>
        </div>
        <div className=' brand'><h1>TOP BRANDS</h1></div>
    </div>
  )
}

export default About