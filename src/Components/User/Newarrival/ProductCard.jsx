// import React from 'react';
//  import { Card, Button, Col } from 'react-bootstrap';
// import './ProductCard.css';

// function ProductCard({ product }) {
//   return (
//     <Col xs={12} sm={6} md={4} lg={3} xl={3}> 
//       <Card className="product-card shadow p-3 mb-2">
//         <Card.Img variant="top" src={product.image} alt={product.prod_name} className="product-image" />
//         <Card.Body>
//           <Card.Title className="product-name">{product.prod_name}</Card.Title>
//           <Card.Text className="product-description">{product.description}</Card.Text>
//           <Card.Text className="product-price">₹{product.price}</Card.Text>
//           <Button variant="primary">Buy Now</Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// export default ProductCard;
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img className="pro-img" alt='pro' src={product.image} />
      </div>
      <div className='product-info'>
        <div className='product-title'>{product.title}</div>
        <div className='product-description'>{product.description}</div>
        <div className='product-price'><del>{product.oldPrice}</del> {product.price}</div>
        <button className='product-button'>Add Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
