import React, { useState, useEffect } from "react";
import logo from "../PiramalImge/logo.png";
import "../css/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic text color
  const navTextClass = scrolled
    ? "text-white hover:text-gray-300"
    : "text-gray-700 hover:text-blue-600";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow transition-colors duration-300 ${
        scrolled ? "bg-[rgb(12_55_48/1)]" : "bg-[#EBEBCF]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="h-10 w-auto invert sepia saturate-200 hue-rotate-90"
            />
          </a>

          {/* Mobile Appointment Button */}
          <button
            className={`px-4 py-2 rounded-md text-sm block md:hidden transition-colors ${
              scrolled
                ? "bg-white text-green-700"
                : "bg-[rgb(12_55_48/1)] text-white"
            }`}
          >
            Book Appointment
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex items-center text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
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
            <a href="#overview" className={navTextClass}>
              Overview
            </a>
            <a href="#highlights" className={navTextClass}>
              Highlights
            </a>
            <a href="#amenities" className={navTextClass}>
              Amenities
            </a>
            <a href="#gallery" className={navTextClass}>
              Gallery
            </a>
            <a href="#location" className={navTextClass}>
              Location
            </a>
            <a href="#contact" className={navTextClass}>
              Contact Us
            </a>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setOpen(false)}
            ></div>

            {/* Sliding Menu */}
            <div
              className="relative h-full w-64 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out"
              style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-700 text-xl"
                onClick={() => setOpen(false)}
              >
                &times;
              </button>

              <nav className="flex flex-col items-end space-y-3 text-right mt-10">
                <a
                  href="#overview"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Overview
                </a>
                <a
                  href="#highlight"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Highlights
                </a>
                <a
                  href="#amenities"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Amenities
                </a>
                <a
                  href="#gallery"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Gallery
                </a>
                <a
                  href="#location"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Location
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
