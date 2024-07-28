import React from "react";

const Banner = () => {
  return (
    <section id="banner" style={{ background: "#F9F3EC" }}>
      <div className="container">
        <div className="row banner-content align-items-center py-5">
          <div className="img-wrapper col-md-5">
            <img
              src="images/banner-img.png"
              alt="Banner"
              className="img-fluid"
            />
          </div>
          <div className="content-wrapper col-md-7 p-5 mb-5">
            <div className="secondary-font text-primary text-uppercase mb-4">
              Save 10 - 20 % off
            </div>
            <h2 className="banner-title display-1 fw-normal">
              Best destination for{" "}
              <span className="text-primary">your pets</span>
            </h2>
            <a
              href="#"
              className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
            >
              shop now
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="mb-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M10.29 16.29a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 1.42L12.58 14H3a1 1 0 0 0 0 2h9.58l-2.29 2.29a1 1 0 0 0 0 1.42z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
