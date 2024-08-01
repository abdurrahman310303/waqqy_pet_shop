import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <Icon icon="mdi:check-circle" className="fs-1 text-success mb-3" />
            <h2 className="mb-3">Thank You!</h2>
            <p className="text-muted mb-4">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-3">Contact Us</h1>
          <p className="lead text-muted">
            Have questions about our products or services? We'd love to hear from you!
          </p>
        </div>
      </div>
      
      <div className="row">
        {/* Contact Info */}
        <div className="col-lg-4 mb-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title mb-4">
                <Icon icon="mdi:information" className="me-2 text-primary" />
                Get in Touch
              </h5>
              
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <Icon icon="mdi:phone" className="fs-5 text-primary me-3" />
                  <div>
                    <strong>Phone</strong>
                    <p className="mb-0 text-muted">+980-34984089</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <Icon icon="mdi:email" className="fs-5 text-primary me-3" />
                  <div>
                    <strong>Email</strong>
                    <p className="mb-0 text-muted">waggy@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <Icon icon="mdi:map-marker" className="fs-5 text-primary me-3" />
                  <div>
                    <strong>Address</strong>
                    <p className="mb-0 text-muted">123 Pet Street, Animal City, AC 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <Icon icon="mdi:clock" className="fs-5 text-primary me-3" />
                  <div>
                    <strong>Hours</strong>
                    <p className="mb-0 text-muted">Mon-Fri: 9AM-6PM<br />Sat-Sun: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title mb-4">
                <Icon icon="mdi:message" className="me-2 text-primary" />
                Send us a Message
              </h5>
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <select
                    className={`form-select ${errors.subject ? 'is-invalid' : ''}`}
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="products">Product Question</option>
                    <option value="order">Order Support</option>
                    <option value="adoption">Pet Adoption</option>
                    <option value="training">Training Services</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please tell us how we can help you..."
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  <div className="form-text">
                    {formData.message.length}/500 characters
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="mdi:loading" className="me-2" style={{animation: 'spin 1s linear infinite'}} />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Icon icon="mdi:send" className="me-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
