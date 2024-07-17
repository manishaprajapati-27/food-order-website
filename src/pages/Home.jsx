import React from "react";
// import HeroSection from "../components/HeroSection";
// import LogosSection from "../components/LogoSection";
// import OfferSection from "../components/OfferSection";
// import ProductCardSection from "../components/ProductCardSection";
// import { OrderAhead } from "../components/OrderAhead";

import {
  HeroSection,
  LogosSection,
  OfferSection,
  ProductCardSection,
  OrderAhead,
  BlogFood,
  SpecialBurger,
  MainChef,
} from "../components/HomeSections";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LogosSection />
      <OfferSection />
      <ProductCardSection />
      <OrderAhead />
      <BlogFood />
      <SpecialBurger />
      <MainChef />
    </>
  );
};

export default Home;
