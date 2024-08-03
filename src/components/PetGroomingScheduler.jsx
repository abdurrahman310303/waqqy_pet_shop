import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const PetGroomingScheduler = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [petDetails, setPetDetails] = useState({
    name: '',
    breed: '',
    size: '',
    specialRequirements: ''
  });

  const groomingServices = [
    {
      id: 'basic-bath',
      name: 'Basic Bath & Dry',
      duration: 60,
      price: 35,
      description: 'Shampoo, rinse, towel and blow dry',
      icon: 'mdi:shower'
    },
    {
      id: 'full-groom',
      name: 'Full Grooming Package',
      duration: 120,
      price: 75,
      description: 'Bath, dry, nail trim, ear cleaning, brush out',
      icon: 'mdi:content-cut'
    },
    {
      id: 'nail-trim',
      name: 'Nail Trimming',
      duration: 30,
      price: 20,
      description: 'Professional nail trimming service',
      icon: 'mdi:scissors-cutting'
    },
    {
      id: 'teeth-cleaning',
      name: 'Teeth Cleaning',
      duration: 45,
      price: 40,
      description: 'Professional dental cleaning for pets',
      icon: 'mdi:tooth'
    },
    {
      id: 'flea-treatment',
      name: 'Flea & Tick Treatment',
      duration: 90,
      price: 55,
      description: 'Specialized treatment for fleas and ticks',
      icon: 'mdi:bug'
    },
    {
      id: 'luxury-spa',
      name: 'Luxury Spa Package',
      duration: 180,
      price: 120,
      description: 'Full grooming with aromatherapy and massage',
      icon: 'mdi:spa'
    }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const [bookedSlots, setBookedSlots] = useState({
    '2024-08-03': ['10:00', '14:30'],
    '2024-08-04': ['09:00', '11:00', '15:00'],
    '2024-08-05': ['13:00', '16:00']
  });

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days from now
    return maxDate.toISOString().split('T')[0];
  };

  const isSlotBooked = (date, time) => {
    return bookedSlots[date]?.includes(time) || false;
  };

  const getAvailableSlotsForDate = (date) => {
    return timeSlots.filter(time => !isSlotBooked(date, time));
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setSelectedTime(''); // Reset time when service changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedServiceDetails = groomingServices.find(s => s.id === selectedService);
    const newAppointment = {
      id: Date.now(),
      date: selectedDate,
      time: selectedTime,
      service: selectedServiceDetails,
      pet: { ...petDetails },
      status: 'scheduled'
    };

    setAppointments([...appointments, newAppointment]);
    
    // Update booked slots
    const dateSlots = bookedSlots[selectedDate] || [];
    setBookedSlots({
      ...bookedSlots,
      [selectedDate]: [...dateSlots, selectedTime]
    });

    // Reset form
    setSelectedDate('');
    setSelectedTime('');
    setSelectedService('');
    setPetDetails({ name: '', breed: '', size: '', specialRequirements: '' });

    alert('Grooming appointment scheduled successfully!');
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getTotalPrice = () => {
    const service = groomingServices.find(s => s.id === selectedService);
    return service ? service.price : 0;
  };

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-5 mb-3">
            <Icon icon="mdi:content-cut" className="text-primary me-2" />
            Pet Grooming Scheduler
          </h2>
          <p className="lead text-muted">
            Book professional grooming services for your beloved pets
          </p>
        </div>
      </div>

      <div className="row">
        {/* Service Selection */}
        <div className="col-lg-8 mx-auto">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <Icon icon="mdi:clipboard-list" className="me-2" />
                Select Grooming Service
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                {groomingServices.map(service => (
                  <div key={service.id} className="col-md-6 mb-3">
                    <div 
                      className={`card h-100 cursor-pointer border-2 ${selectedService === service.id ? 'border-primary bg-light' : 'border-light'}`}
                      onClick={() => handleServiceSelect(service.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="card-body text-center">
                        <Icon icon={service.icon} className="fs-1 text-primary mb-3" />
                        <h6 className="card-title">{service.name}</h6>
                        <p className="card-text small text-muted">{service.description}</p>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <span className="badge bg-info">{service.duration} min</span>
                          <span className="h6 text-primary mb-0">${service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          {selectedService && (
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">
                  <Icon icon="mdi:calendar-clock" className="me-2" />
                  Schedule Your Appointment
                </h5>
              </div>
              <div className="card-body">
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
                        value={petDetails.name}
                        onChange={(e) => setPetDetails({...petDetails, name: e.target.value})}
                        required
                        placeholder="Enter your pet's name"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="breed" className="form-label">
                        <Icon icon="mdi:dog" className="me-2" />
                        Breed
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="breed"
                        value={petDetails.breed}
                        onChange={(e) => setPetDetails({...petDetails, breed: e.target.value})}
                        placeholder="e.g., Golden Retriever"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="size" className="form-label">
                        <Icon icon="mdi:resize" className="me-2" />
                        Pet Size *
                      </label>
                      <select
                        className="form-select"
                        id="size"
                        value={petDetails.size}
                        onChange={(e) => setPetDetails({...petDetails, size: e.target.value})}
                        required
                      >
                        <option value="">Select size</option>
                        <option value="small">Small (under 25 lbs)</option>
                        <option value="medium">Medium (25-60 lbs)</option>
                        <option value="large">Large (60-100 lbs)</option>
                        <option value="extra-large">Extra Large (over 100 lbs)</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="date" className="form-label">
                        <Icon icon="mdi:calendar" className="me-2" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={selectedDate}
                        onChange={(e) => {
                          setSelectedDate(e.target.value);
                          setSelectedTime(''); // Reset time when date changes
                        }}
                        min={getCurrentDate()}
                        max={getMaxDate()}
                        required
                      />
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label className="form-label">
                          <Icon icon="mdi:clock" className="me-2" />
                          Available Time Slots for {formatDate(selectedDate)} *
                        </label>
                        <div className="d-flex flex-wrap gap-2">
                          {getAvailableSlotsForDate(selectedDate).map(time => (
                            <button
                              key={time}
                              type="button"
                              className={`btn ${selectedTime === time ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        {getAvailableSlotsForDate(selectedDate).length === 0 && (
                          <p className="text-danger mt-2">No available slots for this date. Please select another date.</p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="requirements" className="form-label">
                        <Icon icon="mdi:note-text" className="me-2" />
                        Special Requirements
                      </label>
                      <textarea
                        className="form-control"
                        id="requirements"
                        rows="3"
                        value={petDetails.specialRequirements}
                        onChange={(e) => setPetDetails({...petDetails, specialRequirements: e.target.value})}
                        placeholder="Any special needs, behavioral notes, or specific requests..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Service Summary */}
                  <div className="alert alert-info">
                    <h6>
                      <Icon icon="mdi:information" className="me-2" />
                      Appointment Summary
                    </h6>
                    <div className="row">
                      <div className="col-md-6">
                        <p className="mb-1"><strong>Service:</strong> {groomingServices.find(s => s.id === selectedService)?.name}</p>
                        <p className="mb-1"><strong>Duration:</strong> {groomingServices.find(s => s.id === selectedService)?.duration} minutes</p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-1"><strong>Date:</strong> {selectedDate ? formatDate(selectedDate) : 'Not selected'}</p>
                        <p className="mb-1"><strong>Time:</strong> {selectedTime || 'Not selected'}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                      <span><strong>Total Price:</strong></span>
                      <span className="h5 text-primary mb-0">${getTotalPrice()}</span>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-success btn-lg"
                      disabled={!selectedDate || !selectedTime || !petDetails.name || !petDetails.size}
                    >
                      <Icon icon="mdi:calendar-check" className="me-2" />
                      Schedule Grooming Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Existing Appointments */}
      {appointments.length > 0 && (
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-secondary text-white">
                <h5 className="mb-0">
                  <Icon icon="mdi:calendar-multiple" className="me-2" />
                  Your Scheduled Appointments
                </h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Pet Name</th>
                        <th>Service</th>
                        <th>Date & Time</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map(appointment => (
                        <tr key={appointment.id}>
                          <td>
                            <Icon icon="mdi:paw" className="me-2 text-primary" />
                            {appointment.pet.name}
                          </td>
                          <td>{appointment.service.name}</td>
                          <td>
                            <div>
                              <div>{formatDate(appointment.date)}</div>
                              <small className="text-muted">{appointment.time}</small>
                            </div>
                          </td>
                          <td>{appointment.service.duration} min</td>
                          <td className="text-primary fw-bold">${appointment.service.price}</td>
                          <td>
                            <span className="badge bg-success">
                              <Icon icon="mdi:clock-check" className="me-1" />
                              {appointment.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grooming Tips */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-light border-0">
            <div className="card-body">
              <h5 className="text-center mb-4">
                <Icon icon="mdi:lightbulb" className="text-warning me-2" />
                Grooming Preparation Tips
              </h5>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Icon icon="mdi:check-circle" className="text-success me-2" />
                      Ensure your pet is well-fed but not overfed before arrival
                    </li>
                    <li className="mb-2">
                      <Icon icon="mdi:check-circle" className="text-success me-2" />
                      Bring vaccination records for first-time visits
                    </li>
                    <li className="mb-2">
                      <Icon icon="mdi:check-circle" className="text-success me-2" />
                      Inform us about any skin conditions or allergies
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Icon icon="mdi:check-circle" className="text-success me-2" />
                      Arrive 10 minutes early for your appointment
                    </li>
                    <li className="mb-2">
                      <Icon icon="mdi:check-circle" className="text-success me-2" />
                      Let us know if your pet is anxious or aggressive
                    </li>
                    <li className="mb-2">
                      <Icon icon="mdi:check-circle" className="text-success me-2" />
                      Bring your pet's favorite toy for comfort
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetGroomingScheduler;
