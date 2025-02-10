import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Dropdown from "./Dropdown";
import newCompanyLogo from "../assets/fdgcfghgzs.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              className="w-12 h-12 transform hover:scale-110 transition-transform duration-300"
              src={newCompanyLogo}
              alt="Company Logo"
            />
            <Link
              to="/"
              className="text-white font-bold text-xl ml-2 pt-1 hover:text-[#ef8e35] transition-colors duration-300"
            >
              AppOrigo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {["/", "/services", "/career", "/contact"].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`text-white font-semibold p-2 hover:text-[#ef8e35] transition-colors duration-300 transform transition-transform duration-500 ease-in-out ${
                  location.pathname === path ? "border-b-2 border-[#ef8e35] scale-105" : ""
                }`}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
            <Dropdown title="About" links={["About", "Mission"]} isMobile={false} />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#ef8e35] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-black py-4 space-y-3 transition-all duration-300">
            {["/", "/services", "/career", "/contact", "/about", "/mission"].map((path, index) => (
              <Link
                key={index}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`text-white font-semibold text-lg p-2 hover:text-[#ef8e35] transition-colors duration-300 ${
                  location.pathname === path ? "border-b-2 border-[#ef8e35]" : ""
                }`}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;