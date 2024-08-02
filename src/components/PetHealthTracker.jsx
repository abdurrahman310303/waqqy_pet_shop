import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const PetHealthTracker = () => {
  const [selectedPet, setSelectedPet] = useState('');
  const [healthRecords] = useState([
    {
      id: 1,
      date: '2024-07-25',
      type: 'Vaccination',
      description: 'Annual rabies vaccination',
      vet: 'Dr. Smith',
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-08-01',
      type: 'Check-up',
      description: 'Regular health examination',
      vet: 'Dr. Johnson',
      status: 'completed'
    },
    {
      id: 3,
      date: '2024-08-15',
      type: 'Dental',
      description: 'Dental cleaning scheduled',
      vet: 'Dr. Smith',
      status: 'upcoming'
    }
  ]);

  const [upcomingReminders] = useState([
    {
      id: 1,
      title: 'Heartworm Prevention',
      dueDate: '2024-08-10',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Grooming Appointment',
      dueDate: '2024-08-12',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Annual Vaccination',
      dueDate: '2024-08-20',
      priority: 'high'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'upcoming': return 'warning';
      case 'overdue': return 'danger';
      default: return 'primary';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'primary';
    }
  };

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-5 mb-3">
            <Icon icon="mdi:heart-pulse" className="text-danger me-2" />
            Pet Health Tracker
          </h2>
          <p className="lead text-muted">
            Keep track of your pet's health records and upcoming appointments
          </p>
        </div>
      </div>

      {/* Pet Selection */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <select 
            className="form-select form-select-lg"
            value={selectedPet}
            onChange={(e) => setSelectedPet(e.target.value)}
          >
            <option value="">Select your pet</option>
            <option value="buddy">Buddy (Golden Retriever)</option>
            <option value="luna">Luna (Persian Cat)</option>
            <option value="max">Max (German Shepherd)</option>
          </select>
        </div>
      </div>

      <div className="row">
        {/* Health Records */}
        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h5 className="card-title mb-0">
                <Icon icon="mdi:clipboard-text" className="me-2 text-primary" />
                Health Records
              </h5>
            </div>
            <div className="card-body">
              {healthRecords.map((record) => (
                <div key={record.id} className="d-flex align-items-center mb-3 p-3 bg-light rounded">
                  <div className="me-3">
                    <Icon 
                      icon={record.type === 'Vaccination' ? 'mdi:needle' : 
                            record.type === 'Check-up' ? 'mdi:stethoscope' : 
                            'mdi:tooth'} 
                      className="fs-4 text-primary" 
                    />
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h6 className="mb-1">{record.type}</h6>
                        <p className="text-muted small mb-1">{record.description}</p>
                        <small className="text-muted">
                          <Icon icon="mdi:calendar" className="me-1" />
                          {record.date} • Dr. {record.vet}
                        </small>
                      </div>
                      <span className={`badge bg-${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="btn btn-outline-primary w-100">
                <Icon icon="mdi:plus" className="me-2" />
                Add New Record
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Reminders */}
        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0">
              <h5 className="card-title mb-0">
                <Icon icon="mdi:bell" className="me-2 text-warning" />
                Upcoming Reminders
              </h5>
            </div>
            <div className="card-body">
              {upcomingReminders.map((reminder) => (
                <div key={reminder.id} className="d-flex align-items-center mb-3 p-3 bg-light rounded">
                  <div className="me-3">
                    <Icon icon="mdi:alarm" className="fs-4 text-warning" />
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h6 className="mb-1">{reminder.title}</h6>
                        <small className="text-muted">
                          <Icon icon="mdi:calendar-clock" className="me-1" />
                          Due: {reminder.dueDate}
                        </small>
                      </div>
                      <span className={`badge bg-${getPriorityColor(reminder.priority)}`}>
                        {reminder.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="btn btn-outline-warning w-100">
                <Icon icon="mdi:plus" className="me-2" />
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card bg-primary text-white">
            <div className="card-body text-center py-4">
              <h5 className="card-title mb-3">
                <Icon icon="mdi:medical-bag" className="me-2" />
                Quick Health Actions
              </h5>
              <div className="d-flex justify-content-center gap-2 flex-wrap">
                <button className="btn btn-light">
                  <Icon icon="mdi:calendar-plus" className="me-2" />
                  Schedule Appointment
                </button>
                <button className="btn btn-outline-light">
                  <Icon icon="mdi:download" className="me-2" />
                  Export Records
                </button>
                <button className="btn btn-outline-light">
                  <Icon icon="mdi:phone" className="me-2" />
                  Emergency Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetHealthTracker;
