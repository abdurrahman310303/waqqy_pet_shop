import React, { useState } from "react";

const PetFoodies = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const items = [
    {
      id: 1,
      category: "cat",
      img: "images/item9.jpg",
      title: "Grey hoodie",
      price: "$18.00",
    },
    {
      id: 2,
      category: "dog",
      img: "images/item10.jpg",
      title: "Grey hoodie",
      price: "$18.00",
    },
    {
      id: 3,
      category: "dog",
      img: "images/item11.jpg",
      title: "Grey hoodie",
      price: "$18.00",
    },
    {
      id: 4,
      category: "cat",
      img: "images/item12.jpg",
      title: "Grey hoodie",
      price: "$18.00",
    },
    {
      id: 5,
      category: "bird",
      img: "images/item13.jpg",
      title: "Grey hoodie",
      price: "$18.00",
    },
    {
      id: 6,
      category: "bird",
      img: "images/item14.jpg",
      title: "Grey hoodie",
      price: "$18.00",
    },
    {
      id: 7,
      category: "dog",
      img: "images/item15.jpg",
      title: "Grey hoodie",
      price: "$18.00",
    },
    {
      id: 8,
      category: "cat",
      img: "images/item16.jpg",
      title: "Grey hoodie",
      price: "$18.00",
    },
  ];

  return (
    <section id="foodies" className="my-5">
      <div className="container my-5 py-5">
        <div className="section-header d-md-flex justify-content-between align-items-center">
          <h2 className="display-3 fw-normal">Pet Foodies</h2>
          <div className="mb-4 mb-md-0">
            <p className="m-0">
              <button
                className={`filter-button me-4 ${
                  activeFilter === "*" ? "active" : ""
                }`}
                onClick={() => handleFilterClick("*")}
              >
                ALL
              </button>
              <button
                className={`filter-button me-4 ${
                  activeFilter === ".cat" ? "active" : ""
                }`}
                onClick={() => handleFilterClick(".cat")}
              >
                CAT
              </button>
              <button
                className={`filter-button me-4 ${
                  activeFilter === ".dog" ? "active" : ""
                }`}
                onClick={() => handleFilterClick(".dog")}
              >
                DOG
              </button>
              <button
                className={`filter-button me-4 ${
                  activeFilter === ".bird" ? "active" : ""
                }`}
                onClick={() => handleFilterClick(".bird")}
              >
                BIRD
              </button>
            </p>
          </div>
          <div>
            <a
              href="#"
              className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
            >
              shop now
              <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>

        <div className="isotope-container row">
          {items
            .filter(
              (item) =>
                activeFilter === "*" || `.${item.category}` === activeFilter
            )
            .map((item) => (
              <div
                key={item.id}
                className={`item ${item.category} col-md-4 col-lg-3 my-4`}
              >
                <div className="card position-relative">
                  <a href="single-product.html">
                    <img
                      src={item.img}
                      className="img-fluid rounded-4"
                      alt={item.title}
                    />
                  </a>
                  <div className="card-body p-0">
                    <a href="single-product.html">
                      <h3 className="card-title pt-4 m-0">{item.title}</h3>
                    </a>
                    <div className="card-text">
                      <span className="rating secondary-font">
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        ></iconify-icon>
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        ></iconify-icon>
                        5.0
                      </span>
                      <h3 className="secondary-font text-primary">
                        {item.price}
                      </h3>
                      <div className="d-flex flex-wrap mt-3">
                        <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a href="#" className="btn-wishlist px-4 pt-3">
                          <iconify-icon
                            icon="fluent:heart-28-filled"
                            className="fs-5"
                          ></iconify-icon>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PetFoodies;
