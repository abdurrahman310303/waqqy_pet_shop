import React from "react";

const instagramImages = [
  "images/insta1.jpg",
  "images/insta2.jpg",
  "images/insta3.jpg",
  "images/insta4.jpg",
  "images/insta5.jpg",
  "images/insta6.jpg",
];

const InstaSection = () => {
  return (
    <section id="insta" className="my-5">
      <div className="row g-0 py-5">
        {instagramImages.map((src, index) => (
          <div
            key={index}
            className="col instagram-item text-center position-relative"
          >
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon
                className="text-white"
                icon="la:instagram"
              ></iconify-icon>
            </div>
            <a href="#">
              <img
                src={src}
                alt={`insta-img-${index + 1}`}
                className="img-fluid rounded-3"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstaSection;
