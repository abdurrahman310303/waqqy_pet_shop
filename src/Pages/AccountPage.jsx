import React from "react";
import profileImage from "../../public/images/insta1.jpg"; // Replace with your image path

const AccountPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Profile Section */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <img
                src={profileImage}
                className="img-fluid rounded-circle mb-3"
                alt="Profile"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h5 className="card-title">John Doe</h5>
              <p className="card-text text-muted">john.doe@example.com</p>
              <a href="#" className="btn btn-primary">
                Edit Profile
              </a>
            </div>
          </div>
        </div>

        {/* Account Details Section */}
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Account Details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      defaultValue="john.doe@example.com"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      defaultValue="+1234567890"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>

          {/* Order History Section */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Order History</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Order #1234
                  <span className="badge bg-primary rounded-pill">
                    Completed
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Order #5678
                  <span className="badge bg-secondary rounded-pill">
                    Pending
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Order #9101
                  <span className="badge bg-warning text-dark rounded-pill">
                    Shipped
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Account Settings Section */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Account Settings</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="form-label">
                      Change Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
