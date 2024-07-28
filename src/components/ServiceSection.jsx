import React from "react";
import { Icon } from "@iconify/react";

const services = [
  {
    id: 1,
    icon: "la:shopping-cart",
    title: "Free Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    id: 2,
    icon: "la:user-check",
    title: "100% secure payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    id: 3,
    icon: "la:tag",
    title: "Daily Offer",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    id: 4,
    icon: "la:award",
    title: "Quality guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
];

const ServiceSection = () => {
  return (
    <section id="service">
      <div className="container py-5 my-5">
        <div className="row g-md-5 pt-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-3 my-3">
              <div className="card">
                <div>
                  <Icon
                    className="service-icon text-primary"
                    icon={service.icon}
                    width="24"
                    height="24"
                  />
                </div>
                <h3 className="card-title py-2 m-0">{service.title}</h3>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
