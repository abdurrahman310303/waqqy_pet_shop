import React from 'react';
import { Icon } from '@iconify/react';

const PetAdoption = () => {
  const pets = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      age: "2 years",
      image: "images/reviewer-1.jpg",
      personality: ["Friendly", "Active", "Loyal"],
      description: "Buddy is a loving and energetic golden retriever looking for his forever home."
    },
    {
      id: 2,
      name: "Luna",
      breed: "Persian Cat",
      age: "3 years", 
      image: "images/reviewer-2.jpg",
      personality: ["Calm", "Affectionate", "Indoor"],
      description: "Luna is a gentle Persian cat who loves cuddles and quiet environments."
    },
    {
      id: 3,
      name: "Max",
      breed: "German Shepherd",
      age: "4 years",
      image: "images/reviewer-3.jpg", 
      personality: ["Protective", "Smart", "Trained"],
      description: "Max is a well-trained German Shepherd perfect for an active family."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-3">
              <Icon icon="mdi:heart" className="text-danger me-2" />
              Adopt a Pet Today
            </h2>
            <p className="lead text-muted">
              Give a loving home to these wonderful pets waiting for their forever families
            </p>
          </div>
        </div>

        <div className="row">
          {pets.map((pet) => (
            <div key={pet.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={pet.image}
                  className="card-img-top"
                  alt={pet.name}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title mb-0">{pet.name}</h5>
                    <span className="badge bg-primary-subtle text-primary">{pet.age}</span>
                  </div>
                  
                  <p className="text-muted small mb-2">{pet.breed}</p>
                  
                  <div className="mb-3">
                    {pet.personality.map((trait, index) => (
                      <span key={index} className="badge bg-success-subtle text-success me-1 mb-1">
                        {trait}
                      </span>
                    ))}
                  </div>
                  
                  <p className="card-text text-muted small flex-grow-1">
                    {pet.description}
                  </p>
                  
                  <div className="mt-auto">
                    <button className="btn btn-primary w-100 mb-2">
                      <Icon icon="mdi:heart-plus" className="me-2" />
                      Adopt {pet.name}
                    </button>
                    <button className="btn btn-outline-primary w-100">
                      <Icon icon="mdi:information" className="me-2" />
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-primary text-white">
              <div className="card-body text-center py-5">
                <h4 className="card-title mb-3">
                  <Icon icon="mdi:paw" className="me-2" />
                  Can't Adopt Right Now?
                </h4>
                <p className="card-text mb-4">
                  You can still help by volunteering, fostering, or making a donation to support our rescue efforts.
                </p>
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  <button className="btn btn-light">
                    <Icon icon="mdi:hand-heart" className="me-2" />
                    Volunteer
                  </button>
                  <button className="btn btn-outline-light">
                    <Icon icon="mdi:home-heart" className="me-2" />
                    Foster
                  </button>
                  <button className="btn btn-outline-light">
                    <Icon icon="mdi:gift" className="me-2" />
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetAdoption;
