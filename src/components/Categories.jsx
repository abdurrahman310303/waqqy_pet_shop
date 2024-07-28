import React from "react";
import { Icon } from "@iconify/react";

const Categories = () => {
  return (
    <section id="categories">
      <div className="container my-3 py-5">
        <div className="row my-5">
          <div className="col text-center">
            <a href="#" className="categories-item">
              <Icon className="category-icon" icon="ph:bowl-food" />
              <h5>Foodies</h5>
            </a>
          </div>
          <div className="col text-center">
            <a href="#" className="categories-item">
              <Icon className="category-icon" icon="ph:bird" />
              <h5>Bird Shop</h5>
            </a>
          </div>
          <div className="col text-center">
            <a href="#" className="categories-item">
              <Icon className="category-icon" icon="ph:dog" />
              <h5>Dog Shop</h5>
            </a>
          </div>
          <div className="col text-center">
            <a href="#" className="categories-item">
              <Icon className="category-icon" icon="ph:fish" />
              <h5>Fish Shop</h5>
            </a>
          </div>
          <div className="col text-center">
            <a href="#" className="categories-item">
              <Icon className="category-icon" icon="ph:cat" />
              <h5>Cat Shop</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
