// import React from 'react'
// import './Productdata.css'
// function Productdata() {
//   return (
//     <div className='productlist'>
//     <h2>PRODUCT LIST</h2>
//      <table className='pro-table'>
//      <thead>
//         <tr>
//           <th>Items</th>
//           <th>Title</th>
//           <th>Product</th>
//           <th>Description</th>
//           <th>Price</th>
//           <th>Action</th>
//         </tr>
//        </thead>
//        <tbody>
//         <tr>
//             <td>1</td>
//             <td>MONT BLANC LEGEND NIGHT EAU DE PARFUM</td>
//             <td><img alt=''className='admin-pro' src='https://www.perfume24x7.com/cdn/shop/products/Mont_Blanc_Explorer_A.jpg?v=1622741743&width=540'/></td>
//             <td>FOR MEN 100ML</td>
//             <td> 6,550 Rs.</td>
//             <td>
//               <button className='pro-butt'>Edit</button>
//               <button className='pro-butt'>Delete</button>
//               </td>

//         </tr>
//         <tr> 
//         <td>2</td>
//         <td>DAVIDOFF COOL WATER EAU DE TOILETTE</td>
//         <td><img alt='' className='admin-pro' src='https://www.perfume24x7.com/cdn/shop/products/Davidoff_Coolwater_Intense_EDP_For_Men_125ml_408eaebd-181f-4b79-b6da-2ac94f38f8d9.jpg?v=1599652957&width=540'/></td>
//         <td>FOR MEN EDT 100ML</td>
//         <td>3,840 Rs. </td>
//         <td>
//           <button className='pro-butt'>Edit</button>
//           <button className='pro-butt'>Delete</button>
//           </td>
//         </tr>
//         <tr>
//         <td>3</td>
//         <td>DUNHILL ICON ELITE EAU DE PARFUM</td>
//         <td><img alt=''  className='admin-pro' src='https://www.perfume24x7.com/cdn/shop/products/MBLegendNightA.jpg?v=1626279219&width=540'/></td>
//         <td>FOR MEN 100ML</td>
//         <td>6,250 Rs.</td>
//         <td>
//           <button className='pro-butt'>Edit</button>
//           <button className='pro-butt'>Delete</button>
//           </td>
//         </tr>
//         <tr>
//         <td>4</td>
//         <td>MONT BLANC LEGEND NIGHT EAU DE PARFUM</td>
//         <td><img alt='' className='admin-pro' src='https://www.perfume24x7.com/cdn/shop/products/VersaceErosEDPforMen100ml.jpg?v=1629019116&width=540'/></td>
//         <td>FOR MEN 100ML</td>
//         <td>6,550 Rs.</td>
//         <td>
//           <button className='pro-butt'>Edit</button>
//           <button className='pro-butt'>Delete</button>
//           </td>

//         </tr>
        
//        </tbody>
//      </table>

//     </div>
//   )
// }

// export default Productdata
// Productdata.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { viewProducts } from '../../../Services/Adminapi'; // Assuming this is a function to fetch products
import './Productdata.css'; // Import CSS file for styling

function Productdata() {
    const [productsData, setProductsData] = useState([]);
    const [productsLength, setProductsLength] = useState(0);

    const fetchData = async () => {
        try {
            const { data } = await viewProducts();
            if (data.status) {
                setProductsData(data.ViewProducts);
                setProductsLength(data.ViewProducts.length);
            } else {
                console.error("Error fetching products:", data.message);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="admin-products">
            <h1>All Products</h1>
            <h3>Total Products: {productsLength}</h3>
            <table className="pro-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productsData.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>
                                <img
                                    src={product.imageUrl} // Assuming imageUrl is available in product data
                                    alt="Product"
                                    style={{ height: "200px" }}
                                />
                            </td>
                            <td>{product.description}</td>
                            <td
                                style={{
                                    fontWeight: "bold",
                                    color: "green",
                                }}
                            >
                                ₹{product.price}
                            </td>
                            <td>
                                <Link to={`/admin/edit/${product.id}`}>
                                    <button className="admin-pro-table-btn">Edit</button>
                                </Link>
                                <button className="admin-pro-table-btn">Disable</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Productdata;
