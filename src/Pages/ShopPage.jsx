import React, { useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import { products as productData, categories } from "../data/products";
import { 
  searchProducts, 
  filterByCategory, 
  sortProducts, 
  filterByPriceRange, 
  filterByRating 
} from "../utils/searchUtils";

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [minRating, setMinRating] = useState(0);
  
  const filteredProducts = useMemo(() => {
    let result = productData;
    
    // Apply search
    result = searchProducts(result, searchQuery);
    
    // Apply category filter
    result = filterByCategory(result, selectedCategory);
    
    // Apply price range filter
    result = filterByPriceRange(result, priceRange.min, priceRange.max);
    
    // Apply rating filter
    result = filterByRating(result, minRating);
    
    // Apply sorting
    result = sortProducts(result, sortBy);
    
    return result;
  }, [searchQuery, selectedCategory, sortBy, priceRange, minRating]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        icon={index < rating ? "mdi:star" : "mdi:star-outline"}
        className={index < rating ? "text-warning" : "text-muted"}
      />
    ));
  };

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="text-center mb-4">Shop Our Pet Products</h1>
          
          {/* Search and Filter Controls */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="search-bar border rounded-2 px-3">
                <input
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="popularity">Most Popular</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
              >
                <option value={0}>All Ratings</option>
                <option value={4}>4+ Stars</option>
                <option value={4.5}>4.5+ Stars</option>
              </select>
            </div>
            <div className="col-md-2">
              <span className="text-muted small">
                {filteredProducts.length} products found
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">
        {filteredProducts.length === 0 ? (
          <div className="col-12 text-center py-5">
            <Icon icon="mdi:magnify" className="fs-1 text-muted mb-3" />
            <h4 className="text-muted">No products found</h4>
            <p className="text-muted">Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  {!product.inStock && (
                    <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 small">
                      Out of Stock
                    </div>
                  )}
                  {product.sales > 200 && (
                    <div className="position-absolute top-0 end-0 bg-success text-white px-2 py-1 small">
                      Popular
                    </div>
                  )}
                </div>
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{product.name}</h6>
                  <p className="card-text small text-muted flex-grow-1">
                    {product.description}
                  </p>
                  <div className="mb-2">
                    {renderStars(Math.floor(product.rating))}
                    <span className="ms-1 small text-muted">
                      ({product.rating}) · {product.sales} sold
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="text-primary mb-0">{product.price}</h5>
                    <div>
                      <button 
                        className="btn btn-outline-primary btn-sm me-1"
                        disabled={!product.inStock}
                      >
                        <Icon icon="mdi:heart-outline" />
                      </button>
                      <button 
                        className="btn btn-primary btn-sm"
                        disabled={!product.inStock}
                      >
                        <Icon icon="mdi:cart-plus" className="me-1" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopPage;
