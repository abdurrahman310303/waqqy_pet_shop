import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const EmergencyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    type: '',
    phone: '',
    address: '',
    email: '',
    hours: '',
    specialties: [],
    notes: ''
  });

  const emergencyTypes = [
    { value: 'veterinary', label: 'Emergency Veterinary Clinic', icon: 'mdi:hospital-box' },
    { value: 'poison-control', label: 'Pet Poison Control', icon: 'mdi:bottle-tonic-skull' },
    { value: 'animal-hospital', label: 'Animal Hospital', icon: 'mdi:hospital-building' },
    { value: 'mobile-vet', label: 'Mobile Emergency Vet', icon: 'mdi:truck-delivery' },
    { value: 'rescue', label: 'Animal Rescue/Control', icon: 'mdi:paw' },
    { value: 'pet-taxi', label: 'Emergency Pet Transportation', icon: 'mdi:car' }
  ];

  const specialtyOptions = [
    'Surgery', 'Cardiology', 'Oncology', 'Neurology', 'Orthopedics', 
    'Dermatology', 'Ophthalmology', 'Dentistry', 'Exotic Animals', 'Critical Care'
  ];

  // Pre-populated emergency contacts
  const defaultContacts = [
    {
      id: 1,
      name: 'WaqqyPet Emergency Veterinary Hospital',
      type: 'veterinary',
      phone: '(555) 911-PETS',
      address: '123 Emergency Lane, Pet City, PC 12345',
      email: 'emergency@waqqypet.com',
      hours: '24/7',
      specialties: ['Surgery', 'Critical Care', 'Cardiology'],
      notes: 'Full-service emergency hospital with specialist on call'
    },
    {
      id: 2,
      name: 'Pet Poison Control Hotline',
      type: 'poison-control',
      phone: '(888) 426-4435',
      address: 'National Hotline',
      email: 'info@petpoison.org',
      hours: '24/7',
      specialties: ['Toxicology'],
      notes: 'ASPCA Animal Poison Control Center - $95 consultation fee'
    },
    {
      id: 3,
      name: 'Metro Animal Hospital',
      type: 'animal-hospital',
      phone: '(555) 123-4567',
      address: '456 Main Street, Pet City, PC 12345',
      email: 'info@metroanimal.com',
      hours: 'Mon-Sun 8AM-10PM',
      specialties: ['Surgery', 'Orthopedics', 'Dentistry'],
      notes: 'Extended hours emergency care'
    },
    {
      id: 4,
      name: 'Emergency Pet Transport',
      type: 'pet-taxi',
      phone: '(555) PET-RIDE',
      address: 'City-wide service',
      email: 'rides@petransport.com',
      hours: '24/7',
      specialties: [],
      notes: 'Emergency transportation to vet clinics'
    }
  ];

  useEffect(() => {
    const savedContacts = localStorage.getItem('emergencyContacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else {
      setContacts(defaultContacts);
      localStorage.setItem('emergencyContacts', JSON.stringify(defaultContacts));
    }
  }, []);

  const handleAddContact = (e) => {
    e.preventDefault();
    const contact = {
      ...newContact,
      id: Date.now()
    };
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    localStorage.setItem('emergencyContacts', JSON.stringify(updatedContacts));
    
    setNewContact({
      name: '', type: '', phone: '', address: '', email: '', hours: '', specialties: [], notes: ''
    });
    setShowAddForm(false);
  };

  const handleDeleteContact = (id) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      setContacts(updatedContacts);
      localStorage.setItem('emergencyContacts', JSON.stringify(updatedContacts));
    }
  };

  const handleSpecialtyChange = (specialty) => {
    setNewContact(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  const getTypeInfo = (type) => {
    return emergencyTypes.find(t => t.value === type) || { label: type, icon: 'mdi:phone' };
  };

  const callEmergency = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const getDirections = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com?q=${encodedAddress}`, '_blank');
  };

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="display-5 mb-2">
                <Icon icon="mdi:phone-alert" className="text-danger me-2" />
                Emergency Contacts
              </h2>
              <p className="text-muted">Quick access to emergency veterinary services and pet care</p>
            </div>
            <button 
              className="btn btn-primary"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              <Icon icon="mdi:plus" className="me-2" />
              Add Contact
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="alert alert-danger">
            <div className="d-flex align-items-center">
              <Icon icon="mdi:alert" className="fs-2 me-3" />
              <div>
                <h5 className="alert-heading mb-1">Pet Emergency? Act Fast!</h5>
                <p className="mb-0">
                  In case of a pet emergency, stay calm and contact your nearest emergency veterinary clinic immediately.
                  Call ahead to let them know you're coming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Contact Form */}
      {showAddForm && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5>
                  <Icon icon="mdi:plus" className="me-2" />
                  Add Emergency Contact
                </h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleAddContact}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Contact Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newContact.name}
                        onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Type *</label>
                      <select
                        className="form-select"
                        value={newContact.type}
                        onChange={(e) => setNewContact({...newContact, type: e.target.value})}
                        required
                      >
                        <option value="">Select type</option>
                        {emergencyTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        value={newContact.phone}
                        onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={newContact.email}
                        onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newContact.address}
                        onChange={(e) => setNewContact({...newContact, address: e.target.value})}
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Hours</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newContact.hours}
                        onChange={(e) => setNewContact({...newContact, hours: e.target.value})}
                        placeholder="e.g., 24/7"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Specialties</label>
                    <div className="row">
                      {specialtyOptions.map(specialty => (
                        <div key={specialty} className="col-md-4 col-sm-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={newContact.specialties.includes(specialty)}
                              onChange={() => handleSpecialtyChange(specialty)}
                              id={`specialty-${specialty}`}
                            />
                            <label className="form-check-label small" htmlFor={`specialty-${specialty}`}>
                              {specialty}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Notes</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      value={newContact.notes}
                      onChange={(e) => setNewContact({...newContact, notes: e.target.value})}
                      placeholder="Additional information..."
                    ></textarea>
                  </div>
                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-success">
                      <Icon icon="mdi:check" className="me-2" />
                      Add Contact
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setShowAddForm(false)}
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

      {/* Emergency Contacts Grid */}
      <div className="row">
        {contacts.map(contact => {
          const typeInfo = getTypeInfo(contact.type);
          return (
            <div key={contact.id} className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-header bg-light">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Icon icon={typeInfo.icon} className="fs-4 text-primary me-2" />
                      <div>
                        <h6 className="mb-0">{contact.name}</h6>
                        <small className="text-muted">{typeInfo.label}</small>
                      </div>
                    </div>
                    {contact.id > 4 && ( // Only show delete for custom contacts
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteContact(contact.id)}
                      >
                        <Icon icon="mdi:delete" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="card-body">
                  {/* Phone */}
                  <div className="d-flex align-items-center mb-3">
                    <Icon icon="mdi:phone" className="text-success me-3" />
                    <div className="flex-grow-1">
                      <strong>{contact.phone}</strong>
                      <button 
                        className="btn btn-success btn-sm ms-2"
                        onClick={() => callEmergency(contact.phone)}
                      >
                        <Icon icon="mdi:phone" className="me-1" />
                        Call Now
                      </button>
                    </div>
                  </div>

                  {/* Address */}
                  {contact.address && (
                    <div className="d-flex align-items-start mb-3">
                      <Icon icon="mdi:map-marker" className="text-info me-3 mt-1" />
                      <div className="flex-grow-1">
                        <div>{contact.address}</div>
                        {contact.address !== 'National Hotline' && contact.address !== 'City-wide service' && (
                          <button 
                            className="btn btn-info btn-sm mt-1"
                            onClick={() => getDirections(contact.address)}
                          >
                            <Icon icon="mdi:directions" className="me-1" />
                            Get Directions
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Hours */}
                  {contact.hours && (
                    <div className="d-flex align-items-center mb-3">
                      <Icon icon="mdi:clock" className="text-warning me-3" />
                      <div>
                        <strong>Hours:</strong> {contact.hours}
                        {contact.hours.includes('24/7') && (
                          <span className="badge bg-success ms-2">Always Open</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Email */}
                  {contact.email && (
                    <div className="d-flex align-items-center mb-3">
                      <Icon icon="mdi:email" className="text-secondary me-3" />
                      <a href={`mailto:${contact.email}`} className="text-decoration-none">
                        {contact.email}
                      </a>
                    </div>
                  )}

                  {/* Specialties */}
                  {contact.specialties && contact.specialties.length > 0 && (
                    <div className="mb-3">
                      <div className="d-flex align-items-start">
                        <Icon icon="mdi:star" className="text-primary me-3 mt-1" />
                        <div>
                          <strong>Specialties:</strong>
                          <div className="d-flex flex-wrap gap-1 mt-1">
                            {contact.specialties.map(specialty => (
                              <span key={specialty} className="badge bg-primary">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Notes */}
                  {contact.notes && (
                    <div className="d-flex align-items-start">
                      <Icon icon="mdi:note-text" className="text-muted me-3 mt-1" />
                      <div>
                        <strong>Notes:</strong>
                        <p className="mb-0 small text-muted">{contact.notes}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Emergency Tips */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-danger text-white">
            <div className="card-header">
              <h5>
                <Icon icon="mdi:medical-bag" className="me-2" />
                Pet Emergency Preparedness Tips
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Before an Emergency:</h6>
                  <ul className="mb-0">
                    <li>Keep this contact list easily accessible</li>
                    <li>Know the route to your nearest emergency vet</li>
                    <li>Have a pet first aid kit ready</li>
                    <li>Keep your pet's medical records handy</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6>During an Emergency:</h6>
                  <ul className="mb-0">
                    <li>Stay calm and assess the situation</li>
                    <li>Call ahead to the emergency clinic</li>
                    <li>Bring your pet's medical history</li>
                    <li>Have someone else drive if possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card text-center border-danger">
            <div className="card-body">
              <Icon icon="mdi:bottle-tonic-skull" className="fs-1 text-danger mb-2" />
              <h6>Pet Poisoning?</h6>
              <button 
                className="btn btn-danger"
                onClick={() => callEmergency('(888) 426-4435')}
              >
                Call Poison Control
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center border-warning">
            <div className="card-body">
              <Icon icon="mdi:hospital-box" className="fs-1 text-warning mb-2" />
              <h6>Emergency Vet Needed?</h6>
              <button 
                className="btn btn-warning"
                onClick={() => callEmergency('(555) 911-PETS')}
              >
                Call Emergency Vet
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center border-info">
            <div className="card-body">
              <Icon icon="mdi:car" className="fs-1 text-info mb-2" />
              <h6>Need Transportation?</h6>
              <button 
                className="btn btn-info"
                onClick={() => callEmergency('(555) PET-RIDE')}
              >
                Call Pet Taxi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
