import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const ProductReviews = ({ productId }) => {
  const [reviews] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      rating: 5,
      date: "2024-07-25",
      comment: "Excellent quality food! My golden retriever loves it and his coat looks amazing.",
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      author: "Mike Chen",
      rating: 4,
      date: "2024-07-20",
      comment: "Good product overall. My dog enjoys it, though it's a bit pricey.",
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      author: "Emily Davis",
      rating: 5,
      date: "2024-07-18",
      comment: "Perfect for my sensitive stomach pup. No more digestive issues!",
      verified: false,
      helpful: 15
    }
  ]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        icon={index < rating ? "mdi:star" : "mdi:star-outline"}
        className={index < rating ? "text-warning" : "text-muted"}
        style={{ fontSize: '14px' }}
      />
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="product-reviews">
      <div className="reviews-header mb-4">
        <h5>Customer Reviews</h5>
        <div className="d-flex align-items-center mb-3">
          <div className="me-3">
            {renderStars(Math.round(averageRating))}
            <span className="ms-2 fw-bold">{averageRating.toFixed(1)}</span>
          </div>
          <span className="text-muted">({reviews.length} reviews)</span>
        </div>
      </div>

      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item border-bottom pb-3 mb-3">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <div className="d-flex align-items-center mb-1">
                  <span className="fw-semibold me-2">{review.author}</span>
                  {review.verified && (
                    <span className="badge bg-success-subtle text-success small">
                      <Icon icon="mdi:check-circle" className="me-1" />
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="d-flex align-items-center">
                  {renderStars(review.rating)}
                  <span className="text-muted small ms-2">{review.date}</span>
                </div>
              </div>
            </div>
            
            <p className="text-muted mb-2">{review.comment}</p>
            
            <div className="d-flex align-items-center">
              <button className="btn btn-link p-0 text-muted small">
                <Icon icon="mdi:thumb-up-outline" className="me-1" />
                Helpful ({review.helpful})
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="btn btn-outline-primary">
          <Icon icon="mdi:pencil" className="me-2" />
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default ProductReviews;
