import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full bg-primary py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center gap-1 text-light">
                <IoLocationOutline /> Your Location
              </a>
              <a href="#" className="flex items-center gap-1 text-light">
                <IoLocationOutline /> +91 85987622341
              </a>
            </div>
            <div className="flex gap-5">
              <a href="#" className="text-light">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light">
                <FaInstagram />
              </a>
              <a href="#" className="text-light">
                <FaYoutube />
              </a>
              <a href="#" className="text-light">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-light py-5">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex">
              <button className="button">Location</button>
            </div>
            <div className="align-center flex justify-center gap-10">
              <ul className="flex items-center justify-center gap-5">
                <li>
                  <a
                    className="ease text-dark transition duration-500 hover:text-primary"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="ease text-dark transition duration-500 hover:text-primary"
                    href="#"
                  >
                    About
                  </a>
                </li>
              </ul>
              <div className="logo px-5">
                <h1 className="font-cursive text-4xl text-dark">
                  Food<span className="">Juction</span>
                </h1>
              </div>
              <ul className="flex items-center justify-center gap-5">
                <li>
                  <a
                    className="ease text-dark transition duration-500 hover:text-primary"
                    href="#"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    className="ease text-dark transition duration-500 hover:text-primary"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="icons flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.884"
                height="20.884"
                viewBox="0 0 20.884 20.884"
              >
                <path d="m20.564 18.788-4.734-4.734a8.8 8.8 0 1 0-1.776 1.776l4.734 4.734a1.258 1.258 0 0 0 1.776-1.776Zm-18.052-10a6.28 6.28 0 1 1 6.28 6.28 6.28 6.28 0 0 1-6.28-6.277Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
