import React from "react";
import teamImage from "../../public/images/insta1.jpg"; // Replace with your image path
import missionImage from "../../public/images/insta2.jpg"; // Replace with your image path

const AboutPage = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={teamImage}
            alt="Our Team"
            className="img-fluid rounded-3 shadow-sm"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Welcome to our website! We are dedicated to providing you with the
            best products and services. Our team is committed to excellence and
            customer satisfaction.
          </p>
          <p>
            Our mission is to deliver top-notch quality and ensure that our
            customers have a delightful experience. We believe in continuous
            improvement and strive to meet the ever-evolving needs of our
            clients.
          </p>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
          <img
            src={missionImage}
            alt="Our Mission"
            className="img-fluid rounded-3 shadow-sm"
          />
        </div>
        <div className="col-lg-6 order-lg-1">
          <h2 className="display-5">Our Mission</h2>
          <p className="lead">
            Our mission is to be a leader in the industry, offering high-quality
            products that exceed customer expectations. We are driven by
            innovation and customer satisfaction.
          </p>
          <p>
            Our dedicated team works tirelessly to ensure that our products meet
            the highest standards of quality. We are committed to sustainability
            and ethical practices in all aspects of our business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
