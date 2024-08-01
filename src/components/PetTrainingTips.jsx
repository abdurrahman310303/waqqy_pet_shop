import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const PetTrainingTips = () => {
  const [selectedCategory, setSelectedCategory] = useState('dogs');
  
  const trainingTips = {
    dogs: [
      {
        id: 1,
        title: "Basic Sit Command",
        difficulty: "Beginner",
        duration: "5-10 minutes",
        description: "Hold a treat above your dog's head and slowly move it back. As their head follows the treat, their bottom will naturally touch the ground. Say 'sit' and reward immediately.",
        icon: "mdi:seat"
      },
      {
        id: 2,
        title: "Leash Training",
        difficulty: "Intermediate", 
        duration: "15-20 minutes",
        description: "Start indoors with a short leash. Let your dog get comfortable wearing it, then practice walking alongside you with treats and praise.",
        icon: "mdi:dog-side"
      },
      {
        id: 3,
        title: "House Training",
        difficulty: "Beginner",
        duration: "Ongoing",
        description: "Establish a routine, take your dog outside frequently, especially after meals. Always praise and reward when they go outside.",
        icon: "mdi:home"
      }
    ],
    cats: [
      {
        id: 1,
        title: "Litter Box Training",
        difficulty: "Beginner",
        duration: "3-7 days",
        description: "Place litter boxes in quiet, accessible locations. Show your cat the location and gently place them inside after meals.",
        icon: "mdi:inbox"
      },
      {
        id: 2,
        title: "Scratching Post Training",
        difficulty: "Beginner",
        duration: "1-2 weeks", 
        description: "Place scratching posts near areas where your cat likes to scratch. Use catnip or treats to encourage use.",
        icon: "mdi:cat"
      },
      {
        id: 3,
        title: "Come When Called",
        difficulty: "Advanced",
        duration: "2-4 weeks",
        description: "Start training in a small room. Use high-value treats and a consistent tone. Practice daily in different locations.",
        icon: "mdi:bullhorn"
      }
    ]
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-3">
              <Icon icon="mdi:school" className="text-primary me-2" />
              Pet Training Tips
            </h2>
            <p className="lead text-muted">
              Expert training advice to help build a stronger bond with your pet
            </p>
          </div>
        </div>

        {/* Category Selector */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div className="btn-group" role="group">
              <button
                type="button"
                className={`btn ${selectedCategory === 'dogs' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setSelectedCategory('dogs')}
              >
                <Icon icon="mdi:dog" className="me-2" />
                Dog Training
              </button>
              <button
                type="button"
                className={`btn ${selectedCategory === 'cats' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setSelectedCategory('cats')}
              >
                <Icon icon="mdi:cat" className="me-2" />
                Cat Training
              </button>
            </div>
          </div>
        </div>

        {/* Training Tips */}
        <div className="row">
          {trainingTips[selectedCategory].map((tip) => (
            <div key={tip.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <Icon icon={tip.icon} className="fs-2 text-primary me-3" />
                    <div>
                      <h5 className="card-title mb-1">{tip.title}</h5>
                      <div className="d-flex gap-2">
                        <span className={`badge bg-${getDifficultyColor(tip.difficulty)}`}>
                          {tip.difficulty}
                        </span>
                        <span className="badge bg-secondary">
                          <Icon icon="mdi:clock-outline" className="me-1" />
                          {tip.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="card-text text-muted">{tip.description}</p>
                  
                  <button className="btn btn-outline-primary btn-sm">
                    <Icon icon="mdi:play-circle-outline" className="me-2" />
                    Watch Tutorial
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-light border-0">
              <div className="card-body text-center py-4">
                <h5 className="card-title mb-3">
                  <Icon icon="mdi:book-open-variant" className="me-2" />
                  Need More Help?
                </h5>
                <p className="card-text mb-4">
                  Check out our comprehensive training guides or book a session with our certified trainers.
                </p>
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  <button className="btn btn-primary">
                    <Icon icon="mdi:book" className="me-2" />
                    Training Guides
                  </button>
                  <button className="btn btn-outline-primary">
                    <Icon icon="mdi:account-tie" className="me-2" />
                    Book Trainer
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

export default PetTrainingTips;
