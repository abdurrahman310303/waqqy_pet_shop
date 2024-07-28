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

const App = () => {
  return (
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
      </Routes>
      <Footer />
      <FooterBottom />
    </Router>
  );
};

export default App;
