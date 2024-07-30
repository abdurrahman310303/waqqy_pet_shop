import React from 'react';
import { Icon } from '@iconify/react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} icon="mdi:star" className="text-warning" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Icon key="half" icon="mdi:star-half-full" className="text-warning" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty-${i}`} icon="mdi:star-outline" className="text-muted" />);
    }

    return stars;
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="position-relative">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          {!product.inStock && (
            <div className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 m-2 rounded">
              Out of Stock
            </div>
          )}
          <button
            className={`position-absolute top-0 start-0 btn btn-sm m-2 ${
              isInWishlist(product.id) ? 'btn-danger' : 'btn-outline-danger'
            }`}
            onClick={handleWishlistToggle}
          >
            <Icon icon="mdi:heart" />
          </button>
        </div>
        
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.name}</h6>
          <p className="card-text text-muted small flex-grow-1">
            {product.description}
          </p>
          
          <div className="mb-2">
            {renderStars(product.rating)}
            <small className="text-muted ms-1">({product.rating})</small>
          </div>
          
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <h5 className="text-primary mb-0">{product.price}</h5>
            <button
              className="btn btn-primary btn-sm"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <Icon icon="mdi:cart-plus" className="me-1" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
