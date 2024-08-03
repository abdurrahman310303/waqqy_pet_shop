import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const PetAdoption = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    housing: '',
    yard: '',
    otherPets: '',
    children: '',
    workSchedule: '',
    references: '',
    veterinarian: ''
  });

  const adoptablePets = [
    {
      id: 1,
      name: 'Buddy',
      type: 'Dog',
      breed: 'Golden Retriever Mix',
      age: '2 years',
      gender: 'Male',
      size: 'Large',
      color: 'Golden',
      image: 'item7.jpg',
      description: 'Buddy is a friendly and energetic dog who loves playing fetch and going on walks. He gets along well with children and other pets.',
      vaccinated: true,
      neutered: true,
      microchipped: true,
      goodWithKids: true,
      goodWithPets: true,
      specialNeeds: false,
      adoptionFee: 250,
      story: 'Buddy was found as a stray and has made incredible progress with our volunteers. He loves belly rubs and treats!'
    },
    {
      id: 2,
      name: 'Whiskers',
      type: 'Cat',
      breed: 'Domestic Shorthair',
      age: '3 years',
      gender: 'Female',
      size: 'Medium',
      color: 'Tabby',
      image: 'item8.jpg',
      description: 'Whiskers is a calm and affectionate cat who enjoys quiet companionship and sunny windowsills. Perfect for apartment living.',
      vaccinated: true,
      neutered: true,
      microchipped: true,
      goodWithKids: true,
      goodWithPets: false,
      specialNeeds: false,
      adoptionFee: 150,
      story: 'Whiskers was surrendered by her previous family due to housing changes. She is looking for a quiet forever home.'
    },
    {
      id: 3,
      name: 'Charlie',
      type: 'Dog',
      breed: 'Beagle Mix',
      age: '5 years',
      gender: 'Male',
      size: 'Medium',
      color: 'Brown & White',
      image: 'item9.jpg',
      description: 'Charlie is a gentle senior dog who loves leisurely walks and cozy naps. He would be perfect for a calm household.',
      vaccinated: true,
      neutered: true,
      microchipped: true,
      goodWithKids: true,
      goodWithPets: true,
      specialNeeds: true,
      adoptionFee: 150,
      story: 'Charlie is a senior dog who deserves to spend his golden years in a loving home. He has mild arthritis but is otherwise healthy.'
    },
    {
      id: 4,
      name: 'Luna',
      type: 'Cat',
      breed: 'Siamese Mix',
      age: '1 year',
      gender: 'Female',
      size: 'Small',
      color: 'Seal Point',
      image: 'item10.jpg',
      description: 'Luna is a playful young cat who loves interactive toys and climbing. She would thrive in an active household.',
      vaccinated: true,
      neutered: true,
      microchipped: true,
      goodWithKids: false,
      goodWithPets: true,
      specialNeeds: false,
      adoptionFee: 175,
      story: 'Luna was born at our shelter and has been socialized with many volunteers. She is ready for her forever adventure!'
    },
    {
      id: 5,
      name: 'Rocky',
      type: 'Dog',
      breed: 'Pit Bull Terrier',
      age: '3 years',
      gender: 'Male',
      size: 'Large',
      color: 'Brindle',
      image: 'item11.jpg',
      description: 'Rocky is a loyal and loving dog who enjoys training sessions and outdoor activities. He needs an experienced owner.',
      vaccinated: true,
      neutered: true,
      microchipped: true,
      goodWithKids: false,
      goodWithPets: false,
      specialNeeds: false,
      adoptionFee: 200,
      story: 'Rocky came to us after his owner could no longer care for him. He is well-trained and just needs someone who understands his breed.'
    },
    {
      id: 6,
      name: 'Mittens',
      type: 'Cat',
      breed: 'Persian Mix',
      age: '4 years',
      gender: 'Female',
      size: 'Large',
      color: 'White & Grey',
      image: 'item12.jpg',
      description: 'Mittens is a fluffy, dignified cat who prefers a quiet environment and gentle handling. She loves to be brushed.',
      vaccinated: true,
      neutered: true,
      microchipped: true,
      goodWithKids: true,
      goodWithPets: false,
      specialNeeds: true,
      adoptionFee: 125,
      story: 'Mittens has a heart condition that requires daily medication, but she is otherwise a wonderful companion who will bring joy to the right family.'
    }
  ];

  const toggleFavorite = (petId) => {
    setFavorites(prev => 
      prev.includes(petId) 
        ? prev.filter(id => id !== petId)
        : [...prev, petId]
    );
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest in adopting ${selectedPet.name}! We will review your application and contact you within 2-3 business days.`);
    setShowApplicationForm(false);
    setSelectedPet(null);
    setApplicationData({
      name: '', email: '', phone: '', address: '', experience: '', housing: '', yard: '',
      otherPets: '', children: '', workSchedule: '', references: '', veterinarian: ''
    });
  };

  const filteredPets = selectedCategory === 'all' 
    ? adoptablePets 
    : adoptablePets.filter(pet => pet.type.toLowerCase() === selectedCategory);

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-5 mb-3">
            <Icon icon="mdi:heart" className="text-danger me-2" />
            Pet Adoption Center
          </h2>
          <p className="lead text-muted">
            Give a loving home to pets in need. Find your perfect companion today!
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="row mb-4">
        <div className="col-12 text-center">
          <div className="btn-group" role="group">
            <button 
              className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Pets ({adoptablePets.length})
            </button>
            <button 
              className={`btn ${selectedCategory === 'dog' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('dog')}
            >
              <Icon icon="mdi:dog" className="me-2" />
              Dogs ({adoptablePets.filter(p => p.type === 'Dog').length})
            </button>
            <button 
              className={`btn ${selectedCategory === 'cat' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('cat')}
            >
              <Icon icon="mdi:cat" className="me-2" />
              Cats ({adoptablePets.filter(p => p.type === 'Cat').length})
            </button>
          </div>
        </div>
      </div>

      {/* Pet Grid */}
      <div className="row">
        {filteredPets.map(pet => (
          <div key={pet.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="position-relative">
                <img 
                  src={`/images/${pet.image}`} 
                  className="card-img-top" 
                  alt={pet.name}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <button 
                  className={`btn position-absolute top-0 end-0 m-2 ${favorites.includes(pet.id) ? 'btn-danger' : 'btn-outline-light'}`}
                  onClick={() => toggleFavorite(pet.id)}
                >
                  <Icon icon={favorites.includes(pet.id) ? 'mdi:heart' : 'mdi:heart-outline'} />
                </button>
                <div className="position-absolute top-0 start-0 m-2">
                  <span className="badge bg-primary">{pet.type}</span>
                  {pet.specialNeeds && (
                    <span className="badge bg-warning ms-1">Special Needs</span>
                  )}
                </div>
                <div className="position-absolute bottom-0 end-0 m-2">
                  <span className="badge bg-success">Fee: ${pet.adoptionFee}</span>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="text-muted mb-2">{pet.breed} • {pet.age} • {pet.gender}</p>
                
                {/* Pet Details */}
                <div className="row mb-3">
                  <div className="col-6">
                    <small className="text-muted">Size:</small>
                    <div>{pet.size}</div>
                  </div>
                  <div className="col-6">
                    <small className="text-muted">Color:</small>
                    <div>{pet.color}</div>
                  </div>
                </div>

                <p className="card-text small">{pet.description}</p>

                {/* Story */}
                <div className="mb-3">
                  <small className="text-muted">Story:</small>
                  <p className="small fst-italic">{pet.story}</p>
                </div>

                {/* Health Status */}
                <div className="mb-3">
                  <div className="d-flex flex-wrap gap-1">
                    {pet.vaccinated && (
                      <span className="badge bg-success">
                        <Icon icon="mdi:shield-check" className="me-1" />
                        Vaccinated
                      </span>
                    )}
                    {pet.neutered && (
                      <span className="badge bg-success">
                        <Icon icon="mdi:medical-bag" className="me-1" />
                        Fixed
                      </span>
                    )}
                    {pet.microchipped && (
                      <span className="badge bg-success">
                        <Icon icon="mdi:chip" className="me-1" />
                        Chipped
                      </span>
                    )}
                  </div>
                </div>

                {/* Compatibility */}
                <div className="mb-3">
                  <small className="text-muted">Good with:</small>
                  <div className="d-flex gap-2 mt-1">
                    {pet.goodWithKids && (
                      <span className="badge bg-info">
                        <Icon icon="mdi:human-child" className="me-1" />
                        Kids
                      </span>
                    )}
                    {pet.goodWithPets && (
                      <span className="badge bg-info">
                        <Icon icon="mdi:paw" className="me-1" />
                        Other Pets
                      </span>
                    )}
                    {!pet.goodWithKids && !pet.goodWithPets && (
                      <span className="badge bg-secondary">
                        <Icon icon="mdi:home" className="me-1" />
                        Adults Only
                      </span>
                    )}
                  </div>
                </div>

                <div className="d-grid">
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      setSelectedPet(pet);
                      setShowApplicationForm(true);
                    }}
                  >
                    <Icon icon="mdi:heart-plus" className="me-2" />
                    Adopt {pet.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && selectedPet && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <Icon icon="mdi:file-document" className="me-2" />
                  Adoption Application for {selectedPet.name}
                </h5>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => setShowApplicationForm(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleApplicationSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={applicationData.name}
                        onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        value={applicationData.email}
                        onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        value={applicationData.phone}
                        onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Housing Type *</label>
                      <select
                        className="form-select"
                        value={applicationData.housing}
                        onChange={(e) => setApplicationData({...applicationData, housing: e.target.value})}
                        required
                      >
                        <option value="">Select housing type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condominium</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Address *</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      value={applicationData.address}
                      onChange={(e) => setApplicationData({...applicationData, address: e.target.value})}
                      required
                    ></textarea>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Do you have a yard? *</label>
                      <select
                        className="form-select"
                        value={applicationData.yard}
                        onChange={(e) => setApplicationData({...applicationData, yard: e.target.value})}
                        required
                      >
                        <option value="">Select option</option>
                        <option value="large-fenced">Large fenced yard</option>
                        <option value="small-fenced">Small fenced yard</option>
                        <option value="unfenced">Unfenced yard</option>
                        <option value="none">No yard</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Other pets at home? *</label>
                      <select
                        className="form-select"
                        value={applicationData.otherPets}
                        onChange={(e) => setApplicationData({...applicationData, otherPets: e.target.value})}
                        required
                      >
                        <option value="">Select option</option>
                        <option value="none">No other pets</option>
                        <option value="dogs">Dogs</option>
                        <option value="cats">Cats</option>
                        <option value="both">Both dogs and cats</option>
                        <option value="other">Other animals</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Children at home? *</label>
                      <select
                        className="form-select"
                        value={applicationData.children}
                        onChange={(e) => setApplicationData({...applicationData, children: e.target.value})}
                        required
                      >
                        <option value="">Select option</option>
                        <option value="none">No children</option>
                        <option value="under5">Children under 5</option>
                        <option value="5to12">Children 5-12 years</option>
                        <option value="over12">Children over 12</option>
                        <option value="mixed">Mixed age children</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Work Schedule *</label>
                      <select
                        className="form-select"
                        value={applicationData.workSchedule}
                        onChange={(e) => setApplicationData({...applicationData, workSchedule: e.target.value})}
                        required
                      >
                        <option value="">Select schedule</option>
                        <option value="home">Work from home</option>
                        <option value="part-time">Part-time away</option>
                        <option value="full-time">Full-time away</option>
                        <option value="retired">Retired</option>
                        <option value="varies">Schedule varies</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Previous pet experience *</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={applicationData.experience}
                      onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
                      placeholder="Please describe your experience with pets..."
                      required
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Veterinarian Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      value={applicationData.veterinarian}
                      onChange={(e) => setApplicationData({...applicationData, veterinarian: e.target.value})}
                      placeholder="Vet clinic name and phone number (if you have one)"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">References</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      value={applicationData.references}
                      onChange={(e) => setApplicationData({...applicationData, references: e.target.value})}
                      placeholder="Please provide 2 references with contact information"
                    ></textarea>
                  </div>

                  <div className="alert alert-info">
                    <h6><Icon icon="mdi:information" className="me-2" />Adoption Process</h6>
                    <ul className="mb-0 small">
                      <li>Application review (2-3 business days)</li>
                      <li>Phone interview with adoption counselor</li>
                      <li>Meet and greet with {selectedPet.name}</li>
                      <li>Home visit (if required)</li>
                      <li>Adoption finalization and take home</li>
                    </ul>
                  </div>

                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary flex-fill">
                      <Icon icon="mdi:send" className="me-2" />
                      Submit Application
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setShowApplicationForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Adoption Statistics */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-light border-0">
            <div className="card-body text-center py-4">
              <h4 className="mb-4">Our Impact This Year</h4>
              <div className="row">
                <div className="col-md-3">
                  <Icon icon="mdi:paw" className="fs-1 text-primary mb-2" />
                  <h3 className="text-primary">1,247</h3>
                  <p className="text-muted">Pets Adopted</p>
                </div>
                <div className="col-md-3">
                  <Icon icon="mdi:home-heart" className="fs-1 text-success mb-2" />
                  <h3 className="text-success">856</h3>
                  <p className="text-muted">Happy Families</p>
                </div>
                <div className="col-md-3">
                  <Icon icon="mdi:medical-bag" className="fs-1 text-info mb-2" />
                  <h3 className="text-info">2,134</h3>
                  <p className="text-muted">Pets Rescued</p>
                </div>
                <div className="col-md-3">
                  <Icon icon="mdi:heart-multiple" className="fs-1 text-danger mb-2" />
                  <h3 className="text-danger">98%</h3>
                  <p className="text-muted">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Cards */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <Icon icon="mdi:clock" className="fs-1 text-primary mb-3" />
              <h5>Adoption Hours</h5>
              <p className="mb-0">
                <strong>Mon-Fri:</strong> 12PM - 7PM<br />
                <strong>Sat-Sun:</strong> 10AM - 6PM
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <Icon icon="mdi:phone" className="fs-1 text-success mb-3" />
              <h5>Contact Us</h5>
              <p className="mb-0">
                <strong>Phone:</strong> (555) 123-PETS<br />
                <strong>Email:</strong> adopt@waqqypet.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <Icon icon="mdi:map-marker" className="fs-1 text-info mb-3" />
              <h5>Visit Us</h5>
              <p className="mb-0">
                123 Pet Adoption Lane<br />
                Happy Valley, PV 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetAdoption;