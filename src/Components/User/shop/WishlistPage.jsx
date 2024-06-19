// import React from 'react';
// import { useWishlist } from '../shop/WishlistContext';
// import { Row, Col, Card, Button } from 'react-bootstrap';

// function WishlistPage() {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   return (
//     <div>
//       <h1>Wishlist</h1>
//       <Row>
//         {wishlist.map((product) => (
//           <Col key={product._id} xs={12} sm={6} md={4} lg={3} xl={3}>
//             <Card className="product-card shadow p-3 mb-2">
//               <Card.Img variant="top" src={product.image} alt={product.prod_name} className="product-image" />
//               <Card.Body>
//                 <Card.Title className="product-name">{product.prod_name}</Card.Title>
//                 <Card.Text className="product-description">{product.description}</Card.Text>
//                 <Card.Text className="product-price">₹{product.price}</Card.Text>
//                 <Button variant="danger" onClick={() => removeFromWishlist(product._id)}>Remove</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default WishlistPage;
import React from 'react'

function WishlistPage() {
  return (
    <div>WishlistPage</div>
  )
}

export default WishlistPage