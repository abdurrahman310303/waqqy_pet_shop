import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const LoyaltyProgram = () => {
  const [userPoints] = useState(2350);
  const [membershipTier] = useState('Gold');
  
  const tiers = [
    {
      name: 'Bronze',
      minPoints: 0,
      maxPoints: 999,
      benefits: ['5% discount on all purchases', 'Birthday treat for your pet', 'Monthly newsletter'],
      color: 'warning',
      icon: 'mdi:medal'
    },
    {
      name: 'Silver',
      minPoints: 1000,
      maxPoints: 2499,
      benefits: ['10% discount on all purchases', 'Free monthly nail trimming', 'Priority customer support', 'Early access to sales'],
      color: 'secondary',
      icon: 'mdi:medal'
    },
    {
      name: 'Gold',
      minPoints: 2500,
      maxPoints: 4999,
      benefits: ['15% discount on all purchases', 'Free quarterly health check-up', 'Complimentary grooming session', 'VIP event invitations'],
      color: 'warning',
      icon: 'mdi:trophy'
    },
    {
      name: 'Diamond',
      minPoints: 5000,
      maxPoints: Infinity,
      benefits: ['20% discount on all purchases', 'Free monthly grooming', 'Personal pet consultant', 'Exclusive diamond member perks'],
      color: 'primary',
      icon: 'mdi:diamond-stone'
    }
  ];

  const rewards = [
    {
      id: 1,
      name: '10% Off Next Purchase',
      points: 500,
      description: 'Get 10% discount on your next order',
      icon: 'mdi:percent',
      available: true
    },
    {
      id: 2,
      name: 'Free Pet Toy',
      points: 800,
      description: 'Choose from our selection of premium pet toys',
      icon: 'mdi:toy-brick',
      available: true
    },
    {
      id: 3,
      name: 'Grooming Session',
      points: 1200,
      description: 'Complimentary professional grooming for your pet',
      icon: 'mdi:content-cut',
      available: true
    },
    {
      id: 4,
      name: 'Free Delivery for 3 Months',
      points: 1500,
      description: 'Enjoy free delivery on all orders for 3 months',
      icon: 'mdi:truck-delivery',
      available: userPoints >= 1500
    },
    {
      id: 5,
      name: 'Veterinary Consultation',
      points: 2000,
      description: '30-minute consultation with our veterinarian',
      icon: 'mdi:medical-bag',
      available: userPoints >= 2000
    },
    {
      id: 6,
      name: 'Premium Pet Food Bundle',
      points: 3000,
      description: 'Complete premium food bundle for your pet',
      icon: 'mdi:food-dog-bowl',
      available: false
    }
  ];

  const currentTier = tiers.find(tier => tier.name === membershipTier);
  const nextTier = tiers.find(tier => userPoints >= tier.minPoints && userPoints <= tier.maxPoints);
  const progressToNext = nextTier && nextTier.maxPoints !== Infinity 
    ? ((userPoints - nextTier.minPoints) / (nextTier.maxPoints - nextTier.minPoints)) * 100 
    : 100;

  const handleRedeemReward = (rewardId, points) => {
    if (userPoints >= points) {
      alert(`Reward redeemed successfully! You now have ${userPoints - points} points remaining.`);
    } else {
      alert(`You need ${points - userPoints} more points to redeem this reward.`);
    }
  };

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="display-5 mb-3">
            <Icon icon="mdi:star-circle" className="text-warning me-2" />
            Waggy Loyalty Program
          </h2>
          <p className="lead text-muted">
            Earn points with every purchase and unlock amazing rewards for you and your pet!
          </p>
        </div>
      </div>

      {/* Current Status */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <Icon icon={currentTier?.icon} className={`fs-1 text-${currentTier?.color} mb-2`} />
                  <h5>{membershipTier} Member</h5>
                  <p className="text-muted small">Your current tier</p>
                </div>
                <div className="col-md-4 mb-3">
                  <Icon icon="mdi:star" className="fs-1 text-primary mb-2" />
                  <h5>{userPoints.toLocaleString()} Points</h5>
                  <p className="text-muted small">Available points</p>
                </div>
                <div className="col-md-4 mb-3">
                  <Icon icon="mdi:trending-up" className="fs-1 text-success mb-2" />
                  <h5>Next Tier</h5>
                  {nextTier && nextTier.maxPoints !== Infinity ? (
                    <p className="text-muted small">
                      {nextTier.maxPoints - userPoints} points to {tiers[tiers.indexOf(nextTier) + 1]?.name}
                    </p>
                  ) : (
                    <p className="text-muted small">You've reached the highest tier!</p>
                  )}
                </div>
              </div>
              
              {nextTier && nextTier.maxPoints !== Infinity && (
                <div className="mt-4">
                  <div className="progress" style={{ height: '10px' }}>
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: `${progressToNext}%` }}
                    ></div>
                  </div>
                  <div className="text-center mt-2">
                    <small className="text-muted">
                      {Math.round(progressToNext)}% progress to next tier
                    </small>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Membership Tiers */}
      <div className="row mb-5">
        <div className="col-12 text-center mb-4">
          <h3>Membership Tiers</h3>
          <p className="text-muted">The more you shop, the more you save!</p>
        </div>
        {tiers.map((tier, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-4">
            <div className={`card border-0 shadow-sm h-100 ${tier.name === membershipTier ? 'border-primary' : ''}`}>
              <div className="card-body text-center p-4">
                <Icon icon={tier.icon} className={`fs-1 text-${tier.color} mb-3`} />
                <h5 className={`card-title ${tier.name === membershipTier ? 'text-primary' : ''}`}>
                  {tier.name}
                  {tier.name === membershipTier && <Icon icon="mdi:check-circle" className="ms-2 text-success" />}
                </h5>
                <p className="text-muted small mb-3">
                  {tier.minPoints === 0 ? '0' : tier.minPoints.toLocaleString()} - {' '}
                  {tier.maxPoints === Infinity ? '∞' : tier.maxPoints.toLocaleString()} points
                </p>
                <ul className="list-unstyled text-start">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="mb-2">
                      <Icon icon="mdi:check" className="text-success me-2" />
                      <small>{benefit}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Available Rewards */}
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h3>Redeem Your Points</h3>
          <p className="text-muted">Choose from these amazing rewards</p>
        </div>
        {rewards.map((reward) => (
          <div key={reward.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <Icon icon={reward.icon} className="fs-2 text-primary me-3" />
                  <div className="flex-grow-1">
                    <h6 className="card-title mb-1">{reward.name}</h6>
                    <div className="d-flex align-items-center">
                      <span className="badge bg-primary me-2">{reward.points} points</span>
                      {!reward.available && (
                        <span className="badge bg-secondary">Not enough points</span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="card-text text-muted small mb-3">{reward.description}</p>
                <button
                  className={`btn btn-sm w-100 ${reward.available ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => handleRedeemReward(reward.id, reward.points)}
                  disabled={!reward.available}
                >
                  {reward.available ? 'Redeem Now' : `Need ${reward.points - userPoints} more points`}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How it Works */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-light border-0">
            <div className="card-body p-4">
              <h4 className="text-center mb-4">
                <Icon icon="mdi:lightbulb" className="text-warning me-2" />
                How It Works
              </h4>
              <div className="row text-center">
                <div className="col-md-3 mb-3">
                  <Icon icon="mdi:shopping" className="fs-1 text-primary mb-2" />
                  <h6>Shop</h6>
                  <small className="text-muted">Earn 1 point for every $1 spent</small>
                </div>
                <div className="col-md-3 mb-3">
                  <Icon icon="mdi:star-plus" className="fs-1 text-success mb-2" />
                  <h6>Earn Points</h6>
                  <small className="text-muted">Get bonus points for reviews and referrals</small>
                </div>
                <div className="col-md-3 mb-3">
                  <Icon icon="mdi:arrow-up-circle" className="fs-1 text-warning mb-2" />
                  <h6>Level Up</h6>
                  <small className="text-muted">Unlock higher tiers with more benefits</small>
                </div>
                <div className="col-md-3 mb-3">
                  <Icon icon="mdi:gift" className="fs-1 text-danger mb-2" />
                  <h6>Redeem Rewards</h6>
                  <small className="text-muted">Use points for discounts and free services</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
