import React from 'react';
import { Icon } from '@iconify/react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <Icon icon="mdi:heart-outline" className="fs-1 text-muted mb-3" />
            <h3 className="mb-3">Your Wishlist is Empty</h3>
            <p className="text-muted mb-4">
              Start adding items to your wishlist by clicking the heart icon on products you love!
            </p>
            <a href="/shop" className="btn btn-primary">
              <Icon icon="mdi:shopping" className="me-2" />
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>My Wishlist ({wishlistItems.length} items)</h2>
            <button 
              className="btn btn-outline-danger"
              onClick={clearWishlist}
            >
              <Icon icon="mdi:delete" className="me-2" />
              Clear All
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {wishlistItems.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="position-relative">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <button
                  className="position-absolute top-0 end-0 btn btn-danger btn-sm m-2"
                  onClick={() => removeFromWishlist(product.id)}
                  title="Remove from wishlist"
                >
                  <Icon icon="mdi:close" />
                </button>
                {!product.inStock && (
                  <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 small">
                    Out of Stock
                  </div>
                )}
              </div>
              
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.name}</h6>
                <p className="card-text text-muted small flex-grow-1">
                  {product.description}
                </p>
                
                {product.rating && (
                  <div className="mb-2">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Icon
                        key={index}
                        icon={index < product.rating ? "mdi:star" : "mdi:star-outline"}
                        className={index < product.rating ? "text-warning" : "text-muted"}
                      />
                    ))}
                    <small className="text-muted ms-1">({product.rating})</small>
                  </div>
                )}
                
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <h5 className="text-primary mb-0">{product.price}</h5>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    <Icon icon="mdi:cart-plus" className="me-1" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-4">
        <div className="col-12 text-center">
          <a href="/shop" className="btn btn-outline-primary me-3">
            <Icon icon="mdi:shopping" className="me-2" />
            Continue Shopping
          </a>
          <button
            className="btn btn-primary"
            onClick={() => {
              wishlistItems.forEach(product => {
                if (product.inStock) {
                  addToCart(product);
                }
              });
              clearWishlist();
            }}
            disabled={wishlistItems.every(item => !item.inStock)}
          >
            <Icon icon="mdi:cart-plus" className="me-2" />
            Add All to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
