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
  CounterSection,
  GreateTaste,
  TestimonialSection,
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
      <CounterSection />
      <GreateTaste />
      <TestimonialSection />
    </>
  );
};

export default Home;
