import React from "react";
import { hero } from "../constants/images";

const HeroSection = () => {
  return (
    <section className="hero relative h-screen overflow-hidden">
      <div className="image h-full">
        <img
          src={hero}
          className="h-full w-full object-cover"
          alt="Hero Image"
        />
      </div>
      <div className="absolute left-10 top-1/2 w-2/5 translate-x-16 translate-y-[-50%]">
        <h2 className="mb-4 text-7xl font-semibold text-light">
          Tasty & Spicy Pasta
        </h2>
        <p className="text-lightAlt">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          culpa ab sunt.
        </p>
        <div className="mt-5 flex">
          <a href="#" className="button">
            order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
