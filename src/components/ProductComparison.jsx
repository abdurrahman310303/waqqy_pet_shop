import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const ProductComparison = () => {
  const [compareList, setCompareList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample products for comparison
  const products = [
    {
      id: 1,
      name: 'Premium Dog Food - Adult',
      category: 'food',
      brand: 'WaqqyPet',
      price: 45.99,
      image: 'item1.jpg',
      rating: 4.8,
      reviews: 234,
      specifications: {
        weight: '5 kg',
        ageGroup: 'Adult (1-7 years)',
        ingredients: 'Chicken, Rice, Vegetables',
        protein: '28%',
        fat: '15%',
        fiber: '4%',
        moisture: '10%'
      },
      features: ['High Protein', 'Natural Ingredients', 'Grain-Free', 'Made in USA']
    },
    {
      id: 2,
      name: 'Premium Dog Food - Senior',
      category: 'food',
      brand: 'WaqqyPet',
      price: 42.99,
      image: 'item2.jpg',
      rating: 4.7,
      reviews: 189,
      specifications: {
        weight: '5 kg',
        ageGroup: 'Senior (7+ years)',
        ingredients: 'Salmon, Sweet Potato, Spinach',
        protein: '24%',
        fat: '12%',
        fiber: '5%',
        moisture: '10%'
      },
      features: ['Joint Support', 'Easy Digestion', 'Omega-3', 'Low Fat']
    },
    {
      id: 3,
      name: 'Interactive Dog Toy',
      category: 'toys',
      brand: 'PlayPet',
      price: 24.99,
      image: 'item3.jpg',
      rating: 4.6,
      reviews: 156,
      specifications: {
        material: 'Non-toxic Rubber',
        size: '15cm x 10cm',
        weight: '200g',
        ageGroup: 'All Ages',
        batteryLife: '6 months',
        colors: 'Red, Blue, Green'
      },
      features: ['Interactive', 'Durable', 'Mental Stimulation', 'Easy Clean']
    },
    {
      id: 4,
      name: 'Smart Dog Toy',
      category: 'toys',
      brand: 'TechPet',
      price: 39.99,
      image: 'item4.jpg',
      rating: 4.5,
      reviews: 98,
      specifications: {
        material: 'Silicone & Plastic',
        size: '20cm x 12cm',
        weight: '350g',
        ageGroup: 'Adult Dogs',
        batteryLife: '12 months',
        connectivity: 'Bluetooth'
      },
      features: ['App Control', 'Smart Sensors', 'Voice Commands', 'Timer Function']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'food', label: 'Food' },
    { value: 'toys', label: 'Toys' },
    { value: 'accessories', label: 'Accessories' }
  ];

  const addToCompare = (product) => {
    if (compareList.length < 4 && !compareList.find(p => p.id === product.id)) {
      setCompareList([...compareList, product]);
    }
  };

  const removeFromCompare = (productId) => {
    setCompareList(compareList.filter(p => p.id !== productId));
  };

  const clearComparison = () => {
    setCompareList([]);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const getSpecificationKeys = () => {
    if (compareList.length === 0) return [];
    return Object.keys(compareList[0].specifications);
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
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty-${i}`} icon="mdi:star-outline" className="text-muted" />);
    }
    return stars;
  };

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-5 mb-3">
            <Icon icon="mdi:compare-horizontal" className="text-primary me-2" />
            Product Comparison
          </h2>
          <p className="lead text-muted">
            Compare products side by side to make the best choice for your pet
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-center gap-2 mb-4">
            {categories.map(category => (
              <button
                key={category.value}
                className={`btn ${selectedCategory === category.value ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card bg-light">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Icon icon="mdi:compare" className="text-primary me-2 fs-4" />
                    <span className="fw-bold">Compare ({compareList.length}/4)</span>
                    <div className="ms-3 d-flex gap-2">
                      {compareList.map(product => (
                        <div key={product.id} className="badge bg-primary d-flex align-items-center">
                          {product.name.substring(0, 20)}...
                          <button
                            className="btn-close btn-close-white ms-2"
                            style={{ fontSize: '0.6rem' }}
                            onClick={() => removeFromCompare(product.id)}
                          ></button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    {compareList.length >= 2 && (
                      <a href="#comparison" className="btn btn-success me-2">
                        <Icon icon="mdi:compare" className="me-1" />
                        View Comparison
                      </a>
                    )}
                    <button className="btn btn-outline-secondary" onClick={clearComparison}>
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="position-relative">
                <img 
                  src={`/images/${product.image}`} 
                  className="card-img-top" 
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 p-2">
                  <button
                    className={`btn btn-sm ${compareList.find(p => p.id === product.id) ? 'btn-success' : 'btn-outline-primary'}`}
                    onClick={() => compareList.find(p => p.id === product.id) 
                      ? removeFromCompare(product.id) 
                      : addToCompare(product)
                    }
                    disabled={compareList.length >= 4 && !compareList.find(p => p.id === product.id)}
                  >
                    <Icon icon={compareList.find(p => p.id === product.id) ? 'mdi:check' : 'mdi:plus'} />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title">{product.name}</h6>
                <p className="text-muted small mb-2">{product.brand}</p>
                <div className="d-flex align-items-center mb-2">
                  <div className="me-2">{renderStars(product.rating)}</div>
                  <small className="text-muted">({product.reviews} reviews)</small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 text-primary mb-0">${product.price}</span>
                  <button 
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => addToCompare(product)}
                    disabled={compareList.length >= 4 || compareList.find(p => p.id === product.id)}
                  >
                    Compare
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      {compareList.length >= 2 && (
        <div className="row mt-5" id="comparison">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  <Icon icon="mdi:table-large" className="me-2" />
                  Product Comparison
                </h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="bg-light">
                      <tr>
                        <th style={{ width: '200px' }}>Features</th>
                        {compareList.map(product => (
                          <th key={product.id} className="text-center" style={{ width: '200px' }}>
                            <div className="position-relative">
                              <button
                                className="btn-close position-absolute top-0 end-0"
                                onClick={() => removeFromCompare(product.id)}
                              ></button>
                              <img 
                                src={`/images/${product.image}`} 
                                alt={product.name}
                                className="img-fluid mb-2"
                                style={{ height: '80px', objectFit: 'cover' }}
                              />
                              <h6 className="mb-0">{product.name}</h6>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Price</th>
                        {compareList.map(product => (
                          <td key={product.id} className="text-center">
                            <span className="h5 text-primary">${product.price}</span>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <th>Brand</th>
                        {compareList.map(product => (
                          <td key={product.id} className="text-center">{product.brand}</td>
                        ))}
                      </tr>
                      <tr>
                        <th>Rating</th>
                        {compareList.map(product => (
                          <td key={product.id} className="text-center">
                            <div className="d-flex justify-content-center align-items-center">
                              {renderStars(product.rating)}
                              <span className="ms-2 small">({product.reviews})</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      {getSpecificationKeys().map(spec => (
                        <tr key={spec}>
                          <th className="text-capitalize">{spec.replace(/([A-Z])/g, ' $1').toLowerCase()}</th>
                          {compareList.map(product => (
                            <td key={product.id} className="text-center">
                              {product.specifications[spec]}
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr>
                        <th>Key Features</th>
                        {compareList.map(product => (
                          <td key={product.id}>
                            <ul className="list-unstyled mb-0">
                              {product.features.map((feature, index) => (
                                <li key={index} className="small">
                                  <Icon icon="mdi:check-circle" className="text-success me-1" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <th>Action</th>
                        {compareList.map(product => (
                          <td key={product.id} className="text-center">
                            <button className="btn btn-primary btn-sm mb-2 w-100">
                              <Icon icon="mdi:cart" className="me-1" />
                              Add to Cart
                            </button>
                            <button className="btn btn-outline-secondary btn-sm w-100">
                              <Icon icon="mdi:heart" className="me-1" />
                              Add to Wishlist
                            </button>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {compareList.length === 0 && (
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="py-5">
              <Icon icon="mdi:compare-horizontal" className="fs-1 text-muted mb-3" />
              <h4>Start Comparing Products</h4>
              <p className="text-muted">Add products to compare their features, specifications, and prices</p>
            </div>
          </div>
        </div>
      )}

      {/* Help Text */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="alert alert-info">
            <Icon icon="mdi:information" className="me-2" />
            <strong>How to compare:</strong> Click the "+" button on products you want to compare. 
            You can compare up to 4 products at once. The comparison table will appear when you select 2 or more products.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
