import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import PetFoodies from "../components/PetFoodies";
import BannerSection from "../components/BannerSection";
import Testimonial from "../components/Testimonial";
import BestSellingProducts from "../components/BestSellingProducts";
import Register from "../components/Register";
import LatestBlog from "../components/LatestBlog";
import ServiceSection from "../components/ServiceSection";
import InstaSection from "../components/InstaSection";
import OffcanvasCart from "../components/OffcanvasCart";
import OffcanvasSearch from "../components/OffcanvasSearch";
import PetCareTips from "../components/PetCareTips";
import PetTrainingTips from "../components/PetTrainingTips";
import ProductReviews from "../components/ProductReviews";
import FAQ from "../components/FAQ";
import PetFoodCalculator from "../components/PetFoodCalculator";
import SocialShare from "../components/SocialShare";
import LoyaltyProgram from "../components/LoyaltyProgram";
import AppointmentBooking from "../components/AppointmentBooking";
import ProductComparison from "../components/ProductComparison";
import PetGroomingScheduler from "../components/PetGroomingScheduler";
import PetAdoption from "../components/PetAdoption";
import PetInsuranceCalculator from "../components/PetInsuranceCalculator";
import EmergencyContacts from "../components/EmergencyContacts";
import { Icon } from '@iconify/react';

const HomePage = () => {
  return (
    <>
      <OffcanvasCart />
      <OffcanvasSearch />
      <Banner />
      
      {/* Features Showcase Section */}
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-4 mb-3">
              <Icon icon="mdi:paw" className="text-primary me-2" />
              Complete Pet Care Solutions
            </h2>
            <p className="lead text-muted">
              Discover our comprehensive suite of pet care services and tools designed for modern pet parents
            </p>
          </div>
        </div>

        {/* Quick Access Features */}
        <div className="row mb-5">
          <div className="col-md-3 mb-4">
            <div className="card h-100 border-0 shadow-sm feature-card" style={{ cursor: 'pointer' }}>
              <div className="card-body text-center p-4">
                <Icon icon="mdi:calendar-clock" className="fs-1 text-primary mb-3" />
                <h5>Book Appointments</h5>
                <p className="text-muted small">Schedule vet visits and grooming sessions</p>
                <a href="#appointments" className="btn btn-primary btn-sm">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card h-100 border-0 shadow-sm feature-card" style={{ cursor: 'pointer' }}>
              <div className="card-body text-center p-4">
                <Icon icon="mdi:heart" className="fs-1 text-danger mb-3" />
                <h5>Pet Adoption</h5>
                <p className="text-muted small">Find your perfect furry companion</p>
                <a href="#adoption" className="btn btn-danger btn-sm">Adopt Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card h-100 border-0 shadow-sm feature-card" style={{ cursor: 'pointer' }}>
              <div className="card-body text-center p-4">
                <Icon icon="mdi:shield-heart" className="fs-1 text-success mb-3" />
                <h5>Pet Insurance</h5>
                <p className="text-muted small">Get instant insurance quotes</p>
                <a href="#insurance" className="btn btn-success btn-sm">Get Quote</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card h-100 border-0 shadow-sm feature-card" style={{ cursor: 'pointer' }}>
              <div className="card-body text-center p-4">
                <Icon icon="mdi:phone-alert" className="fs-1 text-warning mb-3" />
                <h5>Emergency Contacts</h5>
                <p className="text-muted small">Quick access to emergency services</p>
                <a href="#emergency" className="btn btn-warning btn-sm">View Contacts</a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <Icon icon="mdi:compare-horizontal" className="fs-4 text-info me-3" />
                  <h6 className="mb-0">Product Comparison</h6>
                </div>
                <p className="small text-muted">Compare products side by side to make the best choice</p>
                <a href="#comparison" className="btn btn-outline-info btn-sm">Compare Products</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <Icon icon="mdi:calculator" className="fs-4 text-secondary me-3" />
                  <h6 className="mb-0">Food Calculator</h6>
                </div>
                <p className="small text-muted">Calculate the right food portions for your pet</p>
                <a href="#calculator" className="btn btn-outline-secondary btn-sm">Calculate Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <Icon icon="mdi:crown" className="fs-4 text-warning me-3" />
                  <h6 className="mb-0">Loyalty Program</h6>
                </div>
                <p className="small text-muted">Earn points and get rewards for your purchases</p>
                <a href="#loyalty" className="btn btn-outline-warning btn-sm">Join Program</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Categories />
      <PetFoodies />
      <BannerSection />
      
      {/* Pet Care & Training Tips */}
      <div id="tips-section">
        <PetCareTips />
        <PetTrainingTips />
      </div>
      
      <Testimonial />
      <BestSellingProducts />
      
      {/* Product Reviews Section */}
      <div id="reviews-section">
        <ProductReviews />
      </div>
      
      {/* Service Features */}
      <div id="appointments">
        <AppointmentBooking />
      </div>
      
      <div id="comparison">
        <ProductComparison />
      </div>
      
      <div id="grooming">
        <PetGroomingScheduler />
      </div>
      
      <div id="adoption">
        <PetAdoption />
      </div>
      
      <div id="insurance">
        <PetInsuranceCalculator />
      </div>
      
      <div id="calculator">
        <PetFoodCalculator />
      </div>
      
      <div id="loyalty">
        <LoyaltyProgram />
      </div>
      
      <div id="emergency">
        <EmergencyContacts />
      </div>
      
      {/* FAQ Section */}
      <div id="faq-section">
        <FAQ />
      </div>
      
      <Register />
      <LatestBlog />
      <ServiceSection />
      
      {/* Social Share */}
      <div className="py-3">
        <SocialShare />
      </div>
      
      <InstaSection />
    </>
  );
};

export default HomePage;
