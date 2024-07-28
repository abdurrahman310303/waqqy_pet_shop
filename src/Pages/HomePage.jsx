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

const HomePage = () => {
  return (
    <>
      <OffcanvasCart />
      <OffcanvasSearch />
      <Banner />
      <Categories />
      <PetFoodies />
      <BannerSection />
      <Testimonial />
      <BestSellingProducts />
      <Register />
      <LatestBlog />
      <ServiceSection />
      <InstaSection />
    </>
  );
};

export default HomePage;
