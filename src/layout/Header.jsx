import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full py-4">
      <div className="container">
        <nav className="flex justify-between">
          <div className="logo">
            <h1 className="text-light font-cursive">FoodJuction</h1>
          </div>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <a className="text-white hover:text-yellow-400" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-white hover:text-yellow-400" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-white hover:text-yellow-400" href="#">
                Menu
              </a>
            </li>
            <li>
              <a className="text-white hover:text-yellow-400" href="#">
                Blogs
              </a>
            </li>
            <li>
              <a className="text-white hover:text-yellow-400" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex">
            {/* <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 md:flex">
              Location
            </button> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
