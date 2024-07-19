import React from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

export const ProductCard = ({ heading, para, price }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-light p-3">
      <h4 className="mb-2 font-sansSerifAlt text-3xl font-extrabold text-dark">
        {heading}
      </h4>
      <p className="text-center">{para}</p>
      <h5 className="flex items-center justify-center gap-1 font-sansSerifAlt text-2xl font-bold text-dark">
        {price}
      </h5>
    </div>
  );
};

export const BlogCard = ({ image, link, heading, para }) => {
  return (
    <div className="group bg-light">
      <div className="relative mb-4 overflow-hidden rounded-2xl">
        <img
          className="scale-1 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-[1.1]"
          src={image}
          alt="Blog Image"
        />
        <span className="absolute left-7 top-0 bg-light px-3 py-2 pb-4 text-center font-sansSerifAlt font-bold text-primary clip-custom-polygon">
          22 <br /> Dec
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4 className="mb-2 font-sansSerifAlt text-2xl font-bold text-dark">
          {heading}
        </h4>
        <p className="mb-4 text-center">{para}</p>
        <div className="text-center">
          <a
            href={link}
            className="font-sansSerifAlt font-bold uppercase text-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export const ChefCard = ({ image, name, role }) => {
  return (
    <div className="group bg-light">
      <div className="relative mb-4 overflow-hidden rounded-2xl">
        <img
          className="scale-1 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-[1.1]"
          src={image}
          alt="Blog Image"
        />
      </div>
      <div className="text-start">
        <h4 className="mb-2 font-sansSerifAlt text-2xl font-bold text-dark">
          {name}
        </h4>
        <p className="capitalize">{role}</p>
      </div>
    </div>
  );
};

export const TestimonialCard = ({ image, name, para }) => {
  return (
    <div className="group flex flex-col items-center justify-center bg-light p-5">
      <div className="mb-4 h-36 w-36 overflow-hidden rounded-full">
        <img
          className="scale-1 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-[1.1]"
          src={image}
          alt="Testimonial"
        />
      </div>
      <div className="text-center">
        <h4 className="mb-2 font-sansSerifAlt text-2xl font-bold text-dark">
          {name}
        </h4>
        <div className="gap-02 mb-3 flex justify-center">
          <div className="text-primary">
            <MdOutlineStar />
          </div>
          <div className="text-primary">
            <MdOutlineStar />
          </div>
          <div className="text-primary">
            <MdOutlineStar />
          </div>
          <div className="text-primary">
            <MdOutlineStarBorder />
          </div>
          <div className="text-primary">
            <MdOutlineStarBorder />
          </div>
        </div>
        <p className="text-dark">{para}</p>
      </div>
    </div>
  );
};
