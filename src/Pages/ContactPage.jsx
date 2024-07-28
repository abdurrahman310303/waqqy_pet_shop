import React from "react";

const ContactPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="mb-4">Contact Us</h1>
          <p className="lead mb-4">
            Get in touch with us for any queries or support. We are here to
            help!
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <div className="col-lg-6">
          <h2 className="mb-4">Our Contact Details</h2>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-telephone-fill"></i> <strong>Phone:</strong>{" "}
              +123-456-7890
            </li>
            <li className="mb-2">
              <i className="bi bi-envelope-fill"></i> <strong>Email:</strong>{" "}
              support@example.com
            </li>
            <li className="mb-2">
              <i className="bi bi-geo-alt-fill"></i> <strong>Address:</strong>{" "}
              123 Main Street, City, Country
            </li>
          </ul>
          <div className="map mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1265.1859522692705!2d-118.2498519053264!3d34.05530806762911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c5b9b752c63f%3A0x40d11f6b0557080!2s123%20Main%20St%2C%20Los%20Angeles%2C%20CA%2090007!5e0!3m2!1sen!2sus!4v1639150730950!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
