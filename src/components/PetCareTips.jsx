import React from 'react';
import { Icon } from '@iconify/react';

const PetCareTips = () => {
  const tips = [
    {
      id: 1,
      icon: 'mdi:food-dog-bowl',
      title: 'Proper Nutrition',
      description: 'Feed your pet high-quality food appropriate for their age, size, and activity level.',
      color: 'text-primary'
    },
    {
      id: 2,
      icon: 'mdi:dumbbell',
      title: 'Regular Exercise',
      description: 'Ensure daily exercise to keep your pet healthy and mentally stimulated.',
      color: 'text-success'
    },
    {
      id: 3,
      icon: 'mdi:medical-bag',
      title: 'Veterinary Care',
      description: 'Schedule regular check-ups and keep up with vaccinations and preventive care.',
      color: 'text-danger'
    },
    {
      id: 4,
      icon: 'mdi:shower',
      title: 'Grooming & Hygiene',
      description: 'Regular grooming helps maintain your pet\'s health and strengthens your bond.',
      color: 'text-info'
    },
    {
      id: 5,
      icon: 'mdi:brain',
      title: 'Mental Stimulation',
      description: 'Provide toys and activities that challenge your pet mentally and prevent boredom.',
      color: 'text-warning'
    },
    {
      id: 6,
      icon: 'mdi:heart',
      title: 'Love & Attention',
      description: 'Spend quality time with your pet to build trust and emotional well-being.',
      color: 'text-danger'
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#F9F3EC' }}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-3">Pet Care Tips</h2>
            <p className="lead text-muted">Essential guidelines for keeping your furry friends happy and healthy</p>
          </div>
        </div>
        
        <div className="row">
          {tips.map((tip) => (
            <div key={tip.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <Icon 
                      icon={tip.icon} 
                      className={`fs-1 ${tip.color}`}
                    />
                  </div>
                  <h5 className="card-title mb-3">{tip.title}</h5>
                  <p className="card-text text-muted">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <button className="btn btn-primary btn-lg">
              <Icon icon="mdi:book-open-variant" className="me-2" />
              View More Tips
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;
