import React from "react";
import blogImage1 from "../../public/images/insta1.jpg"; // Replace with your image path
import blogImage2 from "../../public/images/insta1.jpg"; // Replace with your image path
import blogImage3 from "../../public/images/insta1.jpg"; // Replace with your image path
const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Product for Your Needs",
      summary:
        "Discover key factors to consider when selecting products that best fit your needs and preferences.",
      image: blogImage1,
      date: "July 20, 2024",
    },
    {
      id: 2,
      title: "The Benefits of Quality Products",
      summary:
        "Learn about the advantages of investing in high-quality products and how they can improve your daily life.",
      image: blogImage2,
      date: "July 15, 2024",
    },
    {
      id: 3,
      title: "Top Trends in Our Industry for 2024",
      summary:
        "Stay updated with the latest trends and innovations in our industry that will shape the future.",
      image: blogImage3,
      date: "July 10, 2024",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">Our Blog</h1>
      <div className="row">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img src={post.image} alt={post.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.summary}</p>
                <p className="text-muted">{post.date}</p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
