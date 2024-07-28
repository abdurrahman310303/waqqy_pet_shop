import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import OffcanvasCart from "./OffcanvasCart";
import OffcanvasSearch from "./OffcanvasSearch";

const Header = () => {
  return (
    <header>
      <div className="container py-2">
        <div className="row py-4 pb-0 pb-sm-4 align-items-center">
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <Link to="/">
                <img src="images/logo.png" alt="logo" className="img-fluid" />
              </Link>
            </div>
          </div>
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className="search-bar border rounded-2 px-3 border-dark-subtle">
              <form
                id="search-form"
                className="text-center d-flex align-items-center"
                action=""
                method=""
              >
                <input
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Search for more than 10,000 products"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                  />
                </svg>
              </form>
            </div>
          </div>
          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 secondary-font text-muted">Phone</span>
              <h5 className="mb-0">+980-34984089</h5>
            </div>
            <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 secondary-font text-muted">Email</span>
              <h5 className="mb-0">waggy@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <hr className="m-0" />
      </div>

      <div className="container">
        <nav className="main-menu d-flex navbar navbar-expand-lg">
          <div className="d-flex d-lg-none align-items-end mt-3">
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <Link to="/account" className="mx-3">
                  <Icon icon="healthicons:person" className="fs-4" />
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="mx-3">
                  <Icon icon="mdi:heart" className="fs-4" />
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="mx-3"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                  aria-controls="offcanvasCart"
                >
                  <Icon icon="mdi:cart" className="fs-4 position-relative" />
                  <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                    03
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="mx-3"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSearch"
                  aria-controls="offcanvasSearch"
                >
                  <Icon icon="tabler:search" className="fs-4" />
                </Link>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header justify-content-center">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body justify-content-between">
              <select className="filter-categories border-0 mb-0 me-5">
                <option>Shop by Category</option>
                <option>Clothes</option>
                <option>Food</option>
                <option>Toy</option>
              </select>

              <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="d-none d-lg-flex align-items-end">
                <ul className="d-flex justify-content-end list-unstyled m-0">
                  <li>
                    <Link to="/account" className="mx-3">
                      <Icon icon="healthicons:person" className="fs-4" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="mx-3">
                      <Icon icon="mdi:heart" className="fs-4" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="mx-3"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasCart"
                      aria-controls="offcanvasCart"
                    >
                      <Icon
                        icon="mdi:cart"
                        className="fs-4 position-relative"
                      />
                      <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                        03
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <OffcanvasCart />
        <OffcanvasSearch />
      </div>
    </header>
  );
};

export default Header;
