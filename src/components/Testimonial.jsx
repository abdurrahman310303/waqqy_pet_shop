import React from "react";
// import "./Testimonial.css"; // Import a CSS file for styling

const Testimonial = () => {
  return (
    <section id="testimonial" className="my-5 py-5">
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-10">
            <div className="testimonial-content-wrapper">
              <div className="row align-items-center">
                <div className="col-2">
                  <iconify-icon
                    icon="ri:double-quotes-l"
                    className="quote-icon text-primary"
                  ></iconify-icon>
                </div>
                <div className="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                  <p className="testimonial-content fs-2">
                    At the core of our practice is the idea that cities are the
                    incubators of our greatest achievements, and the best hope
                    for a sustainable future.
                  </p>
                  <p className="text-black">- Joshima Lin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
