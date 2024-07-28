import React from "react";
import "/src/App.css";

const blogPosts = [
  {
    id: 1,
    date: { day: "20", month: "Feb" },
    imgSrc: "images/blog1.jpg",
    title: "10 Reasons to be helpful towards any animals",
    excerpt:
      "At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.",
    link: "single-post.html",
  },
  {
    id: 2,
    date: { day: "21", month: "Feb" },
    imgSrc: "images/blog2.jpg",
    title: "How to know your pet is hungry",
    excerpt:
      "At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.",
    link: "single-post.html",
  },
  {
    id: 3,
    date: { day: "22", month: "Feb" },
    imgSrc: "images/blog3.jpg",
    title: "Best home for your pets",
    excerpt:
      "At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.",
    link: "single-post.html",
  },
];

const LatestBlog = () => {
  return (
    <section id="latest-blog" className="my-5">
      <div className="container py-5 my-5">
        <div className="row mt-5">
          <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 className="display-3 fw-normal">Latest Blog Post</h2>
            <div>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                Read all
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4 my-4 my-md-0">
              <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 className="secondary-font text-primary m-0">
                  {post.date.day}
                </h3>
                <p className="secondary-font fs-6 m-0">{post.date.month}</p>
              </div>
              <div className="card position-relative">
                <a href={post.link}>
                  <img
                    src={post.imgSrc}
                    className="img-fluid rounded-4"
                    alt="blog post"
                  />
                </a>
                <div className="card-body p-0">
                  <a href={post.link}>
                    <h3 className="card-title pt-4 pb-3 m-0">{post.title}</h3>
                  </a>
                  <div className="card-text">
                    <p className="blog-paragraph fs-6">{post.excerpt}</p>
                    <a href={post.link} className="blog-read">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
