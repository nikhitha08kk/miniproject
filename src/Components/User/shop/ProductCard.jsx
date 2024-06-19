import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from './WishlistContext';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToWishlist } = useWishlist();

  const handleImageClick = () => {
    navigate(`/shop/${product._id}`);
  };


  const handleWishlistClick = () => {
    addToWishlist(product);
    console.log(`${product.prod_name} added to wishlist`);
  };


  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card className="product-card shadow p-3 mb-2">
        <Card.Img variant="top" src={product.image} onClick={handleImageClick} alt={product.prod_name} className="product-image" />
        <Card.Body>
          <Card.Title className="product-name">{product.prod_name}</Card.Title>
          <FontAwesomeIcon
            icon={faHeart}
            className="wishlist-icon"
            onClick={handleWishlistClick}
          />
          <Card.Text className="product-description">{product.description}</Card.Text>
          <Card.Text className="product-price">₹{product.price}</Card.Text>
          <Button variant="primary">Add cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;

