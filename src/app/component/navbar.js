import React from "react";

const Navbar = () => {
    
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="/" className="text-2xl font-bold text-green-500">
          MyLogo
        </a>
        <ul className="flex space-x-6">
          <li>
            <a
              className="text-green hover:text-green-300 font-semibold"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:text-white font-semibold"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:text-white font-semibold"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:text-white font-semibold"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
