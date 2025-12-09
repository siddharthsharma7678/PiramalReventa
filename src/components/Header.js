import React, { useState } from "react";
import logo from "../PiramalImge/logo.png";
import "../css/Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow bg-[#EBEBCF]">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="h-10 w-auto invert sepia saturate-200 hue-rotate-90"
            />
          </a>

          {/* Mobile Appointment Button */}
          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm block md:hidden">
            Book Appointment
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex items-center text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              // Hamburger Icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              // Close Icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Overview
            </a>
            <a
              href="/configuration"
              className="text-gray-700 hover:text-blue-600"
            >
              Configuration
            </a>
            <a href="/amenities" className="text-gray-700 hover:text-blue-600">
              Amenities
            </a>
            <a href="/gallery" className="text-gray-700 hover:text-blue-600">
              Gallery
            </a>
            <a href="/location" className="text-gray-700 hover:text-blue-600">
              Location
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </a>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-md rounded-lg p-4 mt-2 space-y-3 animate-fadeIn">
            <a href="/" className="block text-gray-700 hover:text-blue-600">
              Overview
            </a>
            <a
              href="/configuration"
              className="block text-gray-700 hover:text-blue-600"
            >
              Configuration
            </a>
            <a
              href="/amenities"
              className="block text-gray-700 hover:text-blue-600"
            >
              Amenities
            </a>
            <a
              href="/gallery"
              className="block text-gray-700 hover:text-blue-600"
            >
              Gallery
            </a>
            <a
              href="/location"
              className="block text-gray-700 hover:text-blue-600"
            >
              Location
            </a>
            <a
              href="/about"
              className="block text-gray-700 hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
