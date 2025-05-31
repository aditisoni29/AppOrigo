import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Dropdown from "./Dropdown";
import newCompanyLogo from "../assets/fdgcfghgzs.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/career", label: "Career" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="navbar-logo">
          <div className="logo-wrapper">
            <img
              className="logo-image"
              src={newCompanyLogo}
              alt="Company Logo"
            />
            <div className="logo-glow"></div>
          </div>
          <Link to="/" className="brand-text">
            <span className="brand-app">App</span>
            <span className="brand-origo">Origo</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
              >
                <span className="nav-link-text">{link.label}</span>
                <div className="nav-link-underline"></div>
              </Link>
            ))}
            <Dropdown title="About" links={["About", "Mission"]} isMobile={false} />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="toggle-button"
            aria-label="Toggle menu"
          >
            <div className="toggle-icon">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
            <div className="toggle-bg"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-nav-links">
            {[...navLinks, { path: "/about", label: "About" }, { path: "/mission", label: "Mission" }].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link ${location.pathname === link.path ? 'mobile-nav-link-active' : ''}`}
              >
                <span className="mobile-nav-text">{link.label}</span>
                <div className="mobile-nav-indicator"></div>
              </Link>
            ))}
          </div>
          
        </div>
        
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}></div>
      </div>
    </nav>
  );
};

export default Navbar;