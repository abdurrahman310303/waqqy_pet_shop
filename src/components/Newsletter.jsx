import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
      setEmail('');
    }, 1000);
  };

  if (subscribed) {
    return (
      <section className="py-5" style={{ backgroundColor: '#6995B1' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-white">
              <Icon icon="mdi:check-circle" className="fs-1 mb-3" />
              <h3 className="mb-3">Thank You for Subscribing!</h3>
              <p className="mb-4">You'll receive our latest pet care tips and exclusive offers.</p>
              <button 
                className="btn btn-light"
                onClick={() => setSubscribed(false)}
              >
                Subscribe Another Email
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5" style={{ backgroundColor: '#6995B1' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="text-white">
              <h3 className="mb-3">
                <Icon icon="mdi:email-newsletter" className="me-2" />
                Join Our Pet Family Newsletter
              </h3>
              <p className="mb-4 lead">
                Get exclusive pet care tips, special offers, and be the first to know about new arrivals!
              </p>
              
              <div className="row text-center text-lg-start">
                <div className="col-sm-4 mb-3">
                  <Icon icon="mdi:gift" className="fs-2 mb-2" />
                  <p className="small mb-0">Exclusive Discounts</p>
                </div>
                <div className="col-sm-4 mb-3">
                  <Icon icon="mdi:lightbulb" className="fs-2 mb-2" />
                  <p className="small mb-0">Pet Care Tips</p>
                </div>
                <div className="col-sm-4 mb-3">
                  <Icon icon="mdi:new-box" className="fs-2 mb-2" />
                  <p className="small mb-0">New Product Alerts</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-12">
            <div className="bg-white p-4 rounded shadow">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="newsletter-email" className="form-label">
                    <Icon icon="mdi:email" className="me-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="newsletter-email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="newsletter-agree"
                      required
                    />
                    <label className="form-check-label small text-muted" htmlFor="newsletter-agree">
                      I agree to receive newsletters and promotional emails. 
                      I can unsubscribe at any time.
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Icon icon="mdi:loading" className="me-2" style={{animation: 'spin 1s linear infinite'}} />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Icon icon="mdi:send" className="me-2" />
                      Subscribe Now
                    </>
                  )}
                </button>
              </form>
              
              <div className="text-center mt-3">
                <small className="text-muted">
                  <Icon icon="mdi:shield-check" className="me-1" />
                  We respect your privacy. Unsubscribe at any time.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
