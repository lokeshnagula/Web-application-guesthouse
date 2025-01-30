import React, { useState } from "react";
import { HashLink } from "react-router-hash-link"; // Import HashLink for scrolling
import { Menu, X } from "lucide-react"; // For burger and close icons

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-900 text-white relative">
      {/* Logo */}
      <div className="font-bold text-lg">Kingsukh Guest House</div>

      {/* Burger Menu Button (Mobile Only) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navbar */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-900 md:static md:w-auto md:flex md:items-center`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center text-center md:text-left py-4 md:py-0">
          <li className="hover:text-yellow-500 cursor-pointer capitalize">
            <HashLink to="/#home" smooth>Home</HashLink>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer capitalize">
            <HashLink to="/#livingRoom" smooth>Living Room</HashLink>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer capitalize">
            <HashLink to="/#services" smooth>Services</HashLink>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer capitalize">
            <HashLink to="/#gallery" smooth>Gallery</HashLink>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer capitalize">
            <HashLink to="/contact" smooth>Contact</HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
