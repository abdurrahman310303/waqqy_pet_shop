import React from "react";
import { Icon } from "@iconify/react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      image: "images/reviewer-1.jpg",
      bio: "Veterinarian with 15+ years of experience, passionate about pet welfare."
    },
    {
      name: "Mike Chen",
      position: "Head Veterinarian",
      image: "images/reviewer-2.jpg",
      bio: "Specialized in exotic pets and emergency care, loves helping furry friends."
    },
    {
      name: "Emily Davis",
      position: "Pet Nutrition Expert",
      image: "images/reviewer-3.jpg",
      bio: "Certified pet nutritionist helping pets live healthier, happier lives."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Pets", icon: "mdi:paw" },
    { number: "5,000+", label: "Customers Served", icon: "mdi:account-group" },
    { number: "500+", label: "Pets Adopted", icon: "mdi:heart" },
    { number: "15+", label: "Years Experience", icon: "mdi:calendar-check" }
  ];

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-3">About Waggy Pet Shop</h1>
          <p className="lead text-muted mb-4">
            Your trusted partner in pet care since 2009. We're passionate about helping pets 
            live their happiest, healthiest lives.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-6 mb-4">
          <img 
            src="images/banner-img2.png" 
            alt="Our Story" 
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-lg-6 mb-4">
          <h2 className="mb-4">
            <Icon icon="mdi:book-open-variant" className="text-primary me-2" />
            Our Story
          </h2>
          <p className="text-muted mb-3">
            Founded in 2009 by veterinarian Dr. Sarah Johnson, Waggy Pet Shop began as a small 
            local store with a big mission: to provide the highest quality products and services 
            for pets and their families.
          </p>
          <p className="text-muted mb-3">
            What started as a dream to create a one-stop destination for pet needs has grown into 
            a trusted community hub where pet lovers find everything from premium nutrition to 
            expert veterinary care.
          </p>
          <p className="text-muted">
            Today, we're proud to serve thousands of pets and their families, maintaining our 
            commitment to quality, care, and community that has defined us from the beginning.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card bg-primary text-white">
            <div className="card-body py-5">
              <div className="row text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="col-md-3 mb-3">
                    <Icon icon={stat.icon} className="fs-1 mb-3" />
                    <h3 className="mb-2">{stat.number}</h3>
                    <p className="mb-0">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="row mb-5">
        <div className="col-12 text-center mb-4">
          <h2 className="display-5 mb-3">Meet Our Team</h2>
          <p className="lead text-muted">
            Passionate pet experts dedicated to your furry family members
          </p>
        </div>
        {teamMembers.map((member, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm">
              <img 
                src={member.image} 
                className="card-img-top" 
                alt={member.name}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="text-primary mb-2">{member.position}</p>
                <p className="card-text text-muted small">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
