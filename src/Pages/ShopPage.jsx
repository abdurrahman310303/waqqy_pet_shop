import React from "react";
const ShopPage = () => {
  const products = [
    {
      id: 1,
      image: "images/item1.jpg",
      name: "Product 1",
      price: "$25.00",
      description: "High-quality product that you will love.",
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
      <h1 className="text-center mb-4">Shop Our Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h6 className="card-subtitle mb-2 text-muted">
                  {product.price}
                </h6>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
