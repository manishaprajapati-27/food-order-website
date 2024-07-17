import React from "react";

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
        <span className="clip-custom-polygon absolute left-7 top-0 bg-light px-3 py-2 pb-4 text-center font-sansSerifAlt font-bold text-primary">
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
