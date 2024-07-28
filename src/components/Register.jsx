import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, password1, password2 });
  };

  return (
    <section
      id="register"
      style={{ background: "url('images/background-img.png') no-repeat" }}
    >
      <div className="container">
        <div className="row my-5 py-5">
          <div className="offset-md-3 col-md-6 my-5">
            <h2 className="display-3 fw-normal text-center">
              Get 20% Off on{" "}
              <span className="text-primary">first Purchase</span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password1"
                  id="password1"
                  placeholder="Create Password"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password2"
                  id="password2"
                  placeholder="Repeat Password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-lg rounded-1">
                  Register it now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
