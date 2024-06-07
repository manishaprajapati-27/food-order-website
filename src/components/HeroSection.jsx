import React from "react";
import { hero } from "../constants/images";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="image">
        <img src={hero} alt="Hero Image" />
      </div>
    </div>
  );
};

export default HeroSection;
