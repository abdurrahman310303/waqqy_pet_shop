import React from "react";

const FooterBottom = () => {
  return (
    <div id="footer-bottom">
      <div className="container">
        <hr className="m-0" />
        <div className="row mt-3">
          {/* Copyright Section */}
          <div className="col-md-6 copyright">
            <p className="secondary-font">© 2023 Waggy. All rights reserved.</p>
          </div>
          {/* Credits Section */}
          <div className="col-md-6 text-md-end">
            <p className="secondary-font">
              Free HTML Template by{" "}
              <a
                href="https://templatesjungle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-underline fw-bold text-black-50"
              >
                TemplatesJungle
              </a>
            </p>
            <p className="secondary-font">
              Distributed by{" "}
              <a
                href="https://themewagon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-underline fw-bold text-black-50"
              >
                ThemeWagon
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
