import React from "react";
import { bookFood, pattern1 } from "../constants/images";
// import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-light pt-20">
      <div className="container">
        <div className="grid grid-cols-4 gap-5">
          <div className="">
            <h1 className="mb-3 font-cursive text-4xl text-dark">
              Food<span className="">Juction</span>
            </h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus totam sed fugiat ea repudiandae!
            </p>
            <span className="text-dark-alt block text-sm">
              © 2023 Qode Interactive, All Rights Reserved
            </span>
          </div>
          <div className="">
            <h4 className="mb-4 font-sansSerifAlt text-2xl font-extrabold text-dark">
              Stop By And Say, Hi!
            </h4>
            <p className="mb-3">
              1614 E. Bell Rd #104. foodjunction@example.com (602) 867-1010
            </p>
            <p className="mb-3">
              1614 E. Bell Rd #104. foodjunction@example.com (602) 867-1010
            </p>
          </div>
          <div className="">
            <h4 className="mb-4 font-sansSerifAlt text-2xl font-extrabold text-dark">
              Opening Hours
            </h4>
            <p className="mb-3">Mon-Fri...............08:00-12:00</p>
            <p className="mb-3">Saturday..............08:00-18:00</p>
            <p className="mb-3">Sunday................08:00-18:00</p>
            <div className="mt-7 flex items-center gap-6">
              <a href="#" className="text-[1.4rem] text-primary">
                <FaFacebook />
              </a>
              <a href="#" className="text-[1.4rem] text-primary">
                <FaXTwitter />
              </a>
              <a href="#" className="text-[1.4rem] text-primary">
                <FaLinkedin />
              </a>
              <a href="#" className="text-[1.4rem] text-primary">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="">
            <h4 className="mb-4 font-sansSerifAlt text-2xl font-extrabold text-dark">
              Follow Us
            </h4>
            <img src={bookFood} className="rounded" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-24 w-full">
        <img src={pattern1} className="w-full" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
