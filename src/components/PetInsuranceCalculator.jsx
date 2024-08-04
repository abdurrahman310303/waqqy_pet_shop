import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const PetInsuranceCalculator = () => {
  const [petInfo, setPetInfo] = useState({
    type: '',
    breed: '',
    age: '',
    weight: '',
    preExisting: false,
    location: ''
  });

  const [coverage, setCoverage] = useState({
    type: 'accident-illness',
    deductible: 250,
    reimbursement: 80,
    annualLimit: 10000,
    wellness: false
  });

  const [quote, setQuote] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const insurancePlans = {
    'accident-only': {
      name: 'Accident Only',
      basePrice: 15,
      description: 'Covers accidents and emergency injuries only',
      includes: ['Emergency surgery', 'Accident-related injuries', 'Poisoning treatment', 'Foreign object ingestion']
    },
    'accident-illness': {
      name: 'Accident & Illness',
      basePrice: 35,
      description: 'Comprehensive coverage for accidents and illnesses',
      includes: ['All accident coverage', 'Illness treatment', 'Diagnostic tests', 'Prescription medications', 'Surgery']
    },
    'comprehensive': {
      name: 'Comprehensive Plus',
      basePrice: 55,
      description: 'Complete coverage including preventive care',
      includes: ['All accident & illness coverage', 'Annual checkups', 'Vaccinations', 'Dental cleaning', 'Flea/tick prevention']
    }
  };

  const breedRiskFactors = {
    'golden-retriever': 1.2,
    'german-shepherd': 1.3,
    'bulldog': 1.8,
    'persian-cat': 1.4,
    'siamese-cat': 1.1,
    'mixed': 1.0,
    'other': 1.1
  };

  const locationFactors = {
    'urban': 1.2,
    'suburban': 1.0,
    'rural': 0.9
  };

  const calculateQuote = () => {
    if (!petInfo.type || !petInfo.age || !petInfo.location) {
      alert('Please fill in all required fields');
      return;
    }

    setIsCalculating(true);

    // Simulate API call delay
    setTimeout(() => {
      const plan = insurancePlans[coverage.type];
      let monthlyPrice = plan.basePrice;

      // Age factor
      const age = parseInt(petInfo.age);
      if (age < 1) monthlyPrice *= 0.8;
      else if (age <= 3) monthlyPrice *= 1.0;
      else if (age <= 7) monthlyPrice *= 1.3;
      else monthlyPrice *= 1.8;

      // Pet type factor
      if (petInfo.type === 'dog') monthlyPrice *= 1.1;
      else if (petInfo.type === 'cat') monthlyPrice *= 0.9;

      // Breed factor
      const breedKey = petInfo.breed.toLowerCase().replace(/\s+/g, '-');
      const breedFactor = breedRiskFactors[breedKey] || breedRiskFactors['other'];
      monthlyPrice *= breedFactor;

      // Location factor
      monthlyPrice *= locationFactors[petInfo.location];

      // Weight factor (for dogs)
      if (petInfo.type === 'dog' && petInfo.weight) {
        const weight = parseInt(petInfo.weight);
        if (weight > 50) monthlyPrice *= 1.2;
        else if (weight > 25) monthlyPrice *= 1.0;
        else monthlyPrice *= 0.9;
      }

      // Pre-existing conditions
      if (petInfo.preExisting) monthlyPrice *= 1.4;

      // Deductible adjustment
      const deductibleFactor = {
        100: 1.15,
        250: 1.0,
        500: 0.85,
        1000: 0.7
      };
      monthlyPrice *= deductibleFactor[coverage.deductible] || 1.0;

      // Reimbursement adjustment
      const reimbursementFactor = {
        70: 0.9,
        80: 1.0,
        90: 1.15
      };
      monthlyPrice *= reimbursementFactor[coverage.reimbursement] || 1.0;

      // Annual limit adjustment
      const limitFactor = {
        5000: 0.8,
        10000: 1.0,
        20000: 1.2,
        'unlimited': 1.4
      };
      monthlyPrice *= limitFactor[coverage.annualLimit] || 1.0;

      // Wellness add-on
      if (coverage.wellness) monthlyPrice += 15;

      const annualPrice = monthlyPrice * 12;
      const lifetimePrice = annualPrice * 10; // Estimate 10-year coverage

      setQuote({
        monthly: Math.round(monthlyPrice * 100) / 100,
        annual: Math.round(annualPrice * 100) / 100,
        lifetime: Math.round(lifetimePrice * 100) / 100,
        plan: plan,
        savings: {
          emergency: Math.round((5000 * (coverage.reimbursement / 100)) * 100) / 100,
          annual: Math.round((2000 * (coverage.reimbursement / 100)) * 100) / 100
        }
      });

      setIsCalculating(false);
    }, 2000);
  };

  const resetCalculator = () => {
    setPetInfo({
      type: '', breed: '', age: '', weight: '', preExisting: false, location: ''
    });
    setCoverage({
      type: 'accident-illness', deductible: 250, reimbursement: 80, annualLimit: 10000, wellness: false
    });
    setQuote(null);
  };

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-5 mb-3">
            <Icon icon="mdi:shield-heart" className="text-success me-2" />
            Pet Insurance Calculator
          </h2>
          <p className="lead text-muted">
            Get instant quotes for comprehensive pet insurance coverage
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <Icon icon="mdi:calculator" className="me-2" />
                Calculate Your Pet Insurance Quote
              </h5>
            </div>
            <div className="card-body">
              {/* Pet Information */}
              <div className="row mb-4">
                <div className="col-12">
                  <h6 className="text-primary mb-3">
                    <Icon icon="mdi:paw" className="me-2" />
                    Pet Information
                  </h6>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Pet Type *</label>
                  <select
                    className="form-select"
                    value={petInfo.type}
                    onChange={(e) => setPetInfo({...petInfo, type: e.target.value})}
                    required
                  >
                    <option value="">Select pet type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="rabbit">Rabbit</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Breed</label>
                  <select
                    className="form-select"
                    value={petInfo.breed}
                    onChange={(e) => setPetInfo({...petInfo, breed: e.target.value})}
                  >
                    <option value="">Select breed</option>
                    {petInfo.type === 'dog' && (
                      <>
                        <option value="golden-retriever">Golden Retriever</option>
                        <option value="german-shepherd">German Shepherd</option>
                        <option value="bulldog">Bulldog</option>
                        <option value="labrador">Labrador</option>
                        <option value="mixed">Mixed Breed</option>
                      </>
                    )}
                    {petInfo.type === 'cat' && (
                      <>
                        <option value="persian-cat">Persian</option>
                        <option value="siamese-cat">Siamese</option>
                        <option value="maine-coon">Maine Coon</option>
                        <option value="british-shorthair">British Shorthair</option>
                        <option value="mixed">Mixed Breed</option>
                      </>
                    )}
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Age (years) *</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    max="20"
                    value={petInfo.age}
                    onChange={(e) => setPetInfo({...petInfo, age: e.target.value})}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Weight (lbs)</label>
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    max="200"
                    value={petInfo.weight}
                    onChange={(e) => setPetInfo({...petInfo, weight: e.target.value})}
                    placeholder={petInfo.type === 'dog' ? 'Required for dogs' : 'Optional'}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Location *</label>
                  <select
                    className="form-select"
                    value={petInfo.location}
                    onChange={(e) => setPetInfo({...petInfo, location: e.target.value})}
                    required
                  >
                    <option value="">Select area</option>
                    <option value="urban">Urban</option>
                    <option value="suburban">Suburban</option>
                    <option value="rural">Rural</option>
                  </select>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={petInfo.preExisting}
                      onChange={(e) => setPetInfo({...petInfo, preExisting: e.target.checked})}
                      id="preExisting"
                    />
                    <label className="form-check-label" htmlFor="preExisting">
                      My pet has pre-existing health conditions
                    </label>
                  </div>
                </div>
              </div>

              {/* Coverage Options */}
              <div className="row mb-4">
                <div className="col-12">
                  <h6 className="text-success mb-3">
                    <Icon icon="mdi:shield-check" className="me-2" />
                    Coverage Options
                  </h6>
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Insurance Plan *</label>
                  <div className="row">
                    {Object.entries(insurancePlans).map(([key, plan]) => (
                      <div key={key} className="col-md-4 mb-2">
                        <div 
                          className={`card h-100 cursor-pointer ${coverage.type === key ? 'border-success bg-light' : 'border-light'}`}
                          onClick={() => setCoverage({...coverage, type: key})}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="card-body p-3 text-center">
                            <h6 className="card-title">{plan.name}</h6>
                            <p className="small text-muted mb-0">{plan.description}</p>
                            <div className="badge bg-primary mt-2">From ${plan.basePrice}/mo</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="col-md-3 mb-3">
                  <label className="form-label">Annual Deductible</label>
                  <select
                    className="form-select"
                    value={coverage.deductible}
                    onChange={(e) => setCoverage({...coverage, deductible: parseInt(e.target.value)})}
                  >
                    <option value={100}>$100</option>
                    <option value={250}>$250</option>
                    <option value={500}>$500</option>
                    <option value={1000}>$1,000</option>
                  </select>
                </div>
                
                <div className="col-md-3 mb-3">
                  <label className="form-label">Reimbursement</label>
                  <select
                    className="form-select"
                    value={coverage.reimbursement}
                    onChange={(e) => setCoverage({...coverage, reimbursement: parseInt(e.target.value)})}
                  >
                    <option value={70}>70%</option>
                    <option value={80}>80%</option>
                    <option value={90}>90%</option>
                  </select>
                </div>
                
                <div className="col-md-3 mb-3">
                  <label className="form-label">Annual Limit</label>
                  <select
                    className="form-select"
                    value={coverage.annualLimit}
                    onChange={(e) => setCoverage({...coverage, annualLimit: e.target.value})}
                  >
                    <option value={5000}>$5,000</option>
                    <option value={10000}>$10,000</option>
                    <option value={20000}>$20,000</option>
                    <option value="unlimited">Unlimited</option>
                  </select>
                </div>
                
                <div className="col-md-3 mb-3">
                  <div className="form-check mt-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={coverage.wellness}
                      onChange={(e) => setCoverage({...coverage, wellness: e.target.checked})}
                      id="wellness"
                    />
                    <label className="form-check-label" htmlFor="wellness">
                      Add Wellness (+$15/mo)
                    </label>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <div className="d-grid mb-4">
                <button 
                  className="btn btn-success btn-lg"
                  onClick={calculateQuote}
                  disabled={isCalculating}
                >
                  {isCalculating ? (
                    <>
                      <div className="spinner-border spinner-border-sm me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      Calculating Quote...
                    </>
                  ) : (
                    <>
                      <Icon icon="mdi:calculator" className="me-2" />
                      Get My Quote
                    </>
                  )}
                </button>
              </div>

              {/* Quote Results */}
              {quote && (
                <div className="alert alert-success">
                  <div className="row">
                    <div className="col-md-8">
                      <h5 className="alert-heading">
                        <Icon icon="mdi:check-circle" className="me-2" />
                        Your {quote.plan.name} Quote
                      </h5>
                      <div className="row mb-3">
                        <div className="col-4 text-center">
                          <div className="h4 text-success">${quote.monthly}</div>
                          <small className="text-muted">per month</small>
                        </div>
                        <div className="col-4 text-center">
                          <div className="h4 text-success">${quote.annual}</div>
                          <small className="text-muted">per year</small>
                        </div>
                        <div className="col-4 text-center">
                          <div className="h4 text-success">${quote.lifetime}</div>
                          <small className="text-muted">10-year total</small>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-6">
                          <small className="text-muted">Emergency Savings (vs $5k bill):</small>
                          <div className="fw-bold text-success">${quote.savings.emergency}</div>
                        </div>
                        <div className="col-6">
                          <small className="text-muted">Annual Savings (vs $2k bill):</small>
                          <div className="fw-bold text-success">${quote.savings.annual}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <h6>What's Included:</h6>
                      <ul className="list-unstyled small">
                        {quote.plan.includes.map((item, index) => (
                          <li key={index}>
                            <Icon icon="mdi:check" className="text-success me-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex gap-2">
                    <button className="btn btn-success">
                      <Icon icon="mdi:file-document" className="me-2" />
                      Get This Quote
                    </button>
                    <button className="btn btn-outline-secondary" onClick={resetCalculator}>
                      <Icon icon="mdi:refresh" className="me-2" />
                      Start Over
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Benefits */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-light border-0">
            <div className="card-body">
              <h5 className="text-center mb-4">
                <Icon icon="mdi:shield-heart" className="text-success me-2" />
                Why Choose Pet Insurance?
              </h5>
              <div className="row">
                <div className="col-md-3 text-center mb-3">
                  <Icon icon="mdi:currency-usd" className="fs-1 text-success mb-2" />
                  <h6>Save Money</h6>
                  <p className="small">Get reimbursed up to 90% on vet bills</p>
                </div>
                <div className="col-md-3 text-center mb-3">
                  <Icon icon="mdi:heart-pulse" className="fs-1 text-danger mb-2" />
                  <h6>Peace of Mind</h6>
                  <p className="small">Focus on your pet's health, not the cost</p>
                </div>
                <div className="col-md-3 text-center mb-3">
                  <Icon icon="mdi:hospital-building" className="fs-1 text-info mb-2" />
                  <h6>Choose Any Vet</h6>
                  <p className="small">Visit any licensed veterinarian</p>
                </div>
                <div className="col-md-3 text-center mb-3">
                  <Icon icon="mdi:clock-fast" className="fs-1 text-warning mb-2" />
                  <h6>Fast Claims</h6>
                  <p className="small">Quick and easy claim processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h6>
                <Icon icon="mdi:frequently-asked-questions" className="me-2" />
                Frequently Asked Questions
              </h6>
            </div>
            <div className="card-body">
              <div className="accordion" id="insuranceAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      What does pet insurance cover?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#insuranceAccordion">
                    <div className="accordion-body">
                      Pet insurance typically covers accidents, illnesses, diagnostic tests, surgeries, and prescription medications. 
                      Some plans also include wellness care like vaccinations and routine checkups.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Are pre-existing conditions covered?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#insuranceAccordion">
                    <div className="accordion-body">
                      Most pet insurance policies do not cover pre-existing conditions. However, if a condition is cured and 
                      doesn't show symptoms for a certain period, it may be covered in the future.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      How do I file a claim?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#insuranceAccordion">
                    <div className="accordion-body">
                      Simply pay your vet bill upfront, then submit your claim with the receipt and medical records. 
                      Most insurers offer mobile apps for easy claim submission and faster processing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetInsuranceCalculator;
