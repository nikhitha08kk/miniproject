import React, { useState, useEffect } from 'react';
import { bestseller } from '../../../Services/Userapi';
import ProductCard from './ProductCard';
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import Footer from '../Footerl/Footer';
function BestSeller() {
    const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {data} = await bestseller();

        if (data.status) {
          setProducts(data.bestseller);
        } else {
          console.error('Data format error: Expected an array, but got:', data);
          throw new Error('Data format error: Expected an array');
        }
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);
  return (
<div className="shop">
<Header/><Navbar/>
<div className=' new-title'><h1>Best Seller</h1></div>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )};
      
      <Footer/>
    </div>
  );
}

export default BestSeller