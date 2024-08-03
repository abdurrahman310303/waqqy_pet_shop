import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    ownerName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const [availableSlots] = useState([
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ]);

  const [bookedSlots] = useState(['10:00', '14:30', '15:00']); // Example booked slots

  const services = [
    { id: 'checkup', name: 'General Check-up', duration: '30 min', price: '$45' },
    { id: 'vaccination', name: 'Vaccination', duration: '20 min', price: '$35' },
    { id: 'grooming', name: 'Full Grooming', duration: '60 min', price: '$65' },
    { id: 'dental', name: 'Dental Cleaning', duration: '45 min', price: '$85' },
    { id: 'emergency', name: 'Emergency Consultation', duration: '30 min', price: '$75' },
    { id: 'training', name: 'Behavior Training', duration: '60 min', price: '$55' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Appointment booked successfully! We will send you a confirmation email shortly.');
    console.log('Appointment data:', formData);
  };

  const isSlotAvailable = (slot) => {
    return !bookedSlots.includes(slot);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="display-5 mb-3">
            <Icon icon="mdi:calendar-clock" className="text-primary me-2" />
            Book an Appointment
          </h2>
          <p className="lead text-muted">
            Schedule a visit with our professional veterinarians and pet care experts
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="petName" className="form-label">
                      <Icon icon="mdi:paw" className="me-2" />
                      Pet's Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your pet's name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="petType" className="form-label">
                      <Icon icon="mdi:dog" className="me-2" />
                      Pet Type *
                    </label>
                    <select
                      className="form-select"
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="rabbit">Rabbit</option>
                      <option value="hamster">Hamster</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="ownerName" className="form-label">
                      <Icon icon="mdi:account" className="me-2" />
                      Owner's Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ownerName"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      <Icon icon="mdi:email" className="me-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      <Icon icon="mdi:phone" className="me-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="service" className="form-label">
                      <Icon icon="mdi:medical-bag" className="me-2" />
                      Service Required *
                    </label>
                    <select
                      className="form-select"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.name} - {service.duration} ({service.price})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="date" className="form-label">
                      <Icon icon="mdi:calendar" className="me-2" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={getMinDate()}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="time" className="form-label">
                      <Icon icon="mdi:clock" className="me-2" />
                      Preferred Time *
                    </label>
                    <select
                      className="form-select"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select time</option>
                      {availableSlots.map(slot => (
                        <option 
                          key={slot} 
                          value={slot}
                          disabled={!isSlotAvailable(slot)}
                        >
                          {slot} {!isSlotAvailable(slot) ? '(Booked)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="notes" className="form-label">
                    <Icon icon="mdi:note-text" className="me-2" />
                    Additional Notes
                  </label>
                  <textarea
                    className="form-control"
                    id="notes"
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any specific concerns or requests for your appointment..."
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    <Icon icon="mdi:calendar-check" className="me-2" />
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-light border-0">
            <div className="card-body p-4">
              <h4 className="text-center mb-4">
                <Icon icon="mdi:medical-bag" className="text-primary me-2" />
                Our Services
              </h4>
              <div className="row">
                {services.map((service) => (
                  <div key={service.id} className="col-lg-4 col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <Icon icon="mdi:check-circle" className="text-success me-3 fs-5" />
                      <div>
                        <h6 className="mb-0">{service.name}</h6>
                        <small className="text-muted">{service.duration} - {service.price}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="row mt-4">
        <div className="col-12 text-center">
          <div className="alert alert-danger">
            <Icon icon="mdi:emergency" className="fs-4 me-2" />
            <strong>Emergency?</strong> For urgent pet emergencies, please call us immediately at 
            <strong> (555) 911-PETS</strong> or visit our emergency clinic.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
