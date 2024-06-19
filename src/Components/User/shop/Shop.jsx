// import React, { useEffect, useState } from 'react';
// import { shopProduct } from '../../../Services/Userapi';
// import ProductCard from './ProductCard';

// function Shop() {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await shopProduct();
//         console.log(data);
//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           throw new Error('Data format error: Expected an array');
//         }
//       } catch (error) {
//         setError('Failed to fetch products. Please try again later.');
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="shop">
//       {error ? (
//         <div className="error-message">{error}</div>
//       ) : (
//         <div className="product-list">
//           {products.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       )}

//     </div>
//   );
// }

// export default Shop;
import React from 'react'
import { Link } from "react-router-dom";
function Shop() {
  return (
    
    <div className="categories">
      <div className="categoriesHeading">
        <h1>Categories</h1>
      </div>
      <div className="categoriesGrids">
        <Link to="/shop/Newarrival">
          <img className="categoriesName" id="casuals"/>
        </Link>
        <Link to="/shop/bestseller">
          <img className="categoriesName" id="formals"/>
        </Link>
        <Link to="/shop/men">
          <img className="categoriesName" id="sandals"/>
        </Link>
        <Link to="/shop/women">
          <img className="categoriesName" id="sneaker"/>
        </Link>
        <Link to="/shop/bodybath">
          <img className="categoriesName" id="sneaker"/>
        </Link>
      </div>
    </div>
  )
}

export default Shop
