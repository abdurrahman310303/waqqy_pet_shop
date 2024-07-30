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

  const products = [
    {
      id: 1,
      image: "images/item1.jpg",
      name: "Premium Dog Food",
      price: "$25.00",
      description: "High-quality organic dog food that your pet will love.",
      category: "food"
    },
    {
      id: 2,
      image: "images/item2.jpg",
      name: "Product 2",
      price: "$30.00",
      description: "Stylish and durable, perfect for everyday use.",
    },
    {
      id: 3,
      image: "images/item3.jpg",
      name: "Product 3",
      price: "$20.00",
      description: "Affordable and versatile product for any occasion.",
    },
    {
      id: 4,
      image: "images/item4.jpg",
      name: "Product 4",
      price: "$35.00",
      description: "Premium quality with a modern design.",
    },
    {
      id: 5,
      image: "images/item5.jpg",
      name: "Product 5",
      price: "$40.00",
      description: "Elegant and functional, a must-have item.",
    },
    {
      id: 6,
      image: "images/item6.jpg",
      name: "Product 6",
      price: "$22.00",
      description: "Simple yet effective, fits any style.",
    },
    {
      id: 7,
      image: "images/item7.jpg",
      name: "Product 7",
      price: "$27.00",
      description: "Perfect for casual wear, with excellent quality.",
    },
    {
      id: 8,
      image: "images/item8.jpg",
      name: "Product 8",
      price: "$33.00",
      description: "Versatile and reliable for all uses.",
    },
    {
      id: 9,
      image: "images/item9.jpg",
      name: "Product 9",
      price: "$29.00",
      description: "Stylish design with unmatched comfort.",
    },
    {
      id: 10,
      image: "images/item10.jpg",
      name: "Product 10",
      price: "$31.00",
      description: "A blend of style and functionality.",
    },
    {
      id: 11,
      image: "images/item11.jpg",
      name: "Product 11",
      price: "$28.00",
      description: "Sophisticated product with premium features.",
    },
    {
      id: 12,
      image: "images/item12.jpg",
      name: "Product 12",
      price: "$32.00",
      description: "Elegant and practical for any occasion.",
    },
    {
      id: 13,
      image: "images/item13.jpg",
      name: "Product 13",
      price: "$26.00",
      description: "High performance with a modern touch.",
    },
    {
      id: 14,
      image: "images/item14.jpg",
      name: "Product 14",
      price: "$34.00",
      description: "Durable and stylish for everyday use.",
    },
    {
      id: 15,
      image: "images/item15.jpg",
      name: "Product 15",
      price: "$38.00",
      description: "Exceptional quality and design.",
    },
  ];

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
