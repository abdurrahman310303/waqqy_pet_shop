import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const PetFoodCalculator = () => {
  const [petData, setPetData] = useState({
    type: 'dog',
    weight: '',
    age: '',
    activityLevel: 'moderate',
    breed: ''
  });
  
  const [results, setResults] = useState(null);

  const calculateFoodAmount = () => {
    if (!petData.weight || !petData.age) return;

    const weight = parseFloat(petData.weight);
    let dailyCalories = 0;

    // Basic calorie calculation
    if (petData.type === 'dog') {
      dailyCalories = weight * 30 + 70;
      
      // Adjust for activity level
      switch (petData.activityLevel) {
        case 'low':
          dailyCalories *= 1.2;
          break;
        case 'moderate':
          dailyCalories *= 1.4;
          break;
        case 'high':
          dailyCalories *= 1.6;
          break;
        case 'very-high':
          dailyCalories *= 1.8;
          break;
      }
      
      // Adjust for age
      if (petData.age === 'puppy') {
        dailyCalories *= 2;
      } else if (petData.age === 'senior') {
        dailyCalories *= 0.8;
      }
    } else {
      // Cat calculation
      dailyCalories = weight * 20 + 50;
      
      if (petData.activityLevel === 'high') {
        dailyCalories *= 1.3;
      } else if (petData.activityLevel === 'low') {
        dailyCalories *= 0.8;
      }
      
      if (petData.age === 'kitten') {
        dailyCalories *= 1.5;
      } else if (petData.age === 'senior') {
        dailyCalories *= 0.9;
      }
    }

    // Convert calories to food amounts (approximate)
    const dryFoodCups = dailyCalories / 350; // ~350 calories per cup of dry food
    const wetFoodCans = dailyCalories / 200; // ~200 calories per can of wet food

    setResults({
      dailyCalories: Math.round(dailyCalories),
      dryFood: {
        cups: dryFoodCups.toFixed(1),
        grams: Math.round(dryFoodCups * 120) // ~120g per cup
      },
      wetFood: {
        cans: wetFoodCans.toFixed(1),
        grams: Math.round(wetFoodCans * 85) // ~85g per can
      },
      mixedFeeding: {
        dryCups: (dryFoodCups * 0.5).toFixed(1),
        wetCans: (wetFoodCans * 0.5).toFixed(1)
      }
    });
  };

  useEffect(() => {
    calculateFoodAmount();
  }, [petData]);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-3">
              <Icon icon="mdi:calculator" className="text-success me-2" />
              Pet Food Calculator
            </h2>
            <p className="lead text-muted">
              Calculate the right amount of food for your pet based on their needs
            </p>
          </div>
        </div>

        <div className="row">
          {/* Input Form */}
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0">
                  <Icon icon="mdi:form-select" className="me-2 text-primary" />
                  Pet Information
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Pet Type</label>
                  <div className="btn-group w-100" role="group">
                    <input 
                      type="radio" 
                      className="btn-check" 
                      name="petType" 
                      id="dog" 
                      checked={petData.type === 'dog'}
                      onChange={() => setPetData({...petData, type: 'dog'})}
                    />
                    <label className="btn btn-outline-primary" htmlFor="dog">
                      <Icon icon="mdi:dog" className="me-2" />
                      Dog
                    </label>
                    
                    <input 
                      type="radio" 
                      className="btn-check" 
                      name="petType" 
                      id="cat"
                      checked={petData.type === 'cat'}
                      onChange={() => setPetData({...petData, type: 'cat'})}
                    />
                    <label className="btn btn-outline-primary" htmlFor="cat">
                      <Icon icon="mdi:cat" className="me-2" />
                      Cat
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Weight (kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={petData.weight}
                    onChange={(e) => setPetData({...petData, weight: e.target.value})}
                    placeholder="Enter weight in kg"
                    min="0.5"
                    step="0.1"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Age Category</label>
                  <select
                    className="form-select"
                    value={petData.age}
                    onChange={(e) => setPetData({...petData, age: e.target.value})}
                  >
                    <option value="">Select age category</option>
                    {petData.type === 'dog' ? (
                      <>
                        <option value="puppy">Puppy (0-12 months)</option>
                        <option value="adult">Adult (1-7 years)</option>
                        <option value="senior">Senior (7+ years)</option>
                      </>
                    ) : (
                      <>
                        <option value="kitten">Kitten (0-12 months)</option>
                        <option value="adult">Adult (1-7 years)</option>
                        <option value="senior">Senior (7+ years)</option>
                      </>
                    )}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Activity Level</label>
                  <select
                    className="form-select"
                    value={petData.activityLevel}
                    onChange={(e) => setPetData({...petData, activityLevel: e.target.value})}
                  >
                    <option value="low">Low (Indoor, minimal exercise)</option>
                    <option value="moderate">Moderate (Regular walks/play)</option>
                    <option value="high">High (Very active, lots of exercise)</option>
                    {petData.type === 'dog' && (
                      <option value="very-high">Very High (Working/sporting dog)</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0">
                  <Icon icon="mdi:chart-line" className="me-2 text-success" />
                  Feeding Recommendations
                </h5>
              </div>
              <div className="card-body">
                {results ? (
                  <>
                    <div className="alert alert-info mb-4">
                      <Icon icon="mdi:information" className="me-2" />
                      Daily calorie requirement: <strong>{results.dailyCalories} calories</strong>
                    </div>

                    <div className="mb-4">
                      <h6 className="mb-3">
                        <Icon icon="mdi:bowl-mix" className="me-2 text-warning" />
                        Dry Food Only
                      </h6>
                      <p className="mb-1">
                        <strong>{results.dryFood.cups} cups</strong> ({results.dryFood.grams}g) per day
                      </p>
                    </div>

                    <div className="mb-4">
                      <h6 className="mb-3">
                        <Icon icon="mdi:food-variant" className="me-2 text-info" />
                        Wet Food Only
                      </h6>
                      <p className="mb-1">
                        <strong>{results.wetFood.cans} cans</strong> ({results.wetFood.grams}g) per day
                      </p>
                    </div>

                    <div className="mb-4">
                      <h6 className="mb-3">
                        <Icon icon="mdi:bowl-mix-outline" className="me-2 text-primary" />
                        Mixed Feeding (50/50)
                      </h6>
                      <p className="mb-1">
                        <strong>{results.mixedFeeding.dryCups} cups</strong> dry food +
                      </p>
                      <p className="mb-1">
                        <strong>{results.mixedFeeding.wetCans} cans</strong> wet food
                      </p>
                    </div>

                    <div className="alert alert-warning">
                      <Icon icon="mdi:alert" className="me-2" />
                      <small>
                        These are estimates. Consult your veterinarian for personalized feeding advice.
                      </small>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-5">
                    <Icon icon="mdi:information-outline" className="fs-1 text-muted mb-3" />
                    <p className="text-muted">
                      Enter your pet's information to calculate feeding recommendations
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetFoodCalculator;
