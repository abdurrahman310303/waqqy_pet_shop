import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ShopPage from "./Pages/ShopPage";

import Header from "./components/Header";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import Whishlist from "./Pages/Whishlist";
import AcountPage from "./Pages/AccountPage";
import "/src/App.css";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";

// Import all feature components for standalone pages
import AppointmentBooking from "./components/AppointmentBooking";
import PetAdoption from "./components/PetAdoption";
import PetInsuranceCalculator from "./components/PetInsuranceCalculator";
import EmergencyContacts from "./components/EmergencyContacts";
import ProductComparison from "./components/ProductComparison";
import PetGroomingScheduler from "./components/PetGroomingScheduler";
import PetFoodCalculator from "./components/PetFoodCalculator";
import LoyaltyProgram from "./components/LoyaltyProgram";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/account" element={<AcountPage />} />
            <Route path="/wishlist" element={<Whishlist />} />
            
            {/* New feature routes */}
            <Route path="/appointments" element={<AppointmentBooking />} />
            <Route path="/adoption" element={<PetAdoption />} />
            <Route path="/insurance" element={<PetInsuranceCalculator />} />
            <Route path="/emergency" element={<EmergencyContacts />} />
            <Route path="/comparison" element={<ProductComparison />} />
            <Route path="/grooming" element={<PetGroomingScheduler />} />
            <Route path="/calculator" element={<PetFoodCalculator />} />
            <Route path="/loyalty" element={<LoyaltyProgram />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <Footer />
          <FooterBottom />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
