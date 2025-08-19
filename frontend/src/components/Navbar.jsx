import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Dropdown from "./Dropdown";
import newCompanyLogo from "../assets/fdgcfghgzs.webp";

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
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" }
  ];

  const PHONE_NUMBER = "+91 7742716633";
  const PHONE_TEL = "tel:+917742716633";

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
            <span className="brand-app">AppOrigo</span>
            <span className="brand-origo">Technologies</span>
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
          {/* Click-to-Call Button for Desktop */}
          <a
            href={PHONE_TEL}
            className="navbar-cta-button pulse call-now-desktop"
            aria-label={`Call us now at ${PHONE_NUMBER}`}
            tabIndex={0}
          >
            <Phone size={18} style={{marginRight: '0.5rem'}} aria-hidden="true" />
            <span className="call-now-text">Call Now</span>
            {/* <span className="call-now-number">{PHONE_NUMBER}</span> */}
          </a>
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

      {/* Sticky Click-to-Call Button for Mobile */}
      <a
        href={PHONE_TEL}
        className="call-now-mobile"
        aria-label={`Call us now at ${PHONE_NUMBER}`}
        tabIndex={0}
      >
        <Phone size={22} style={{marginRight: '0.5rem'}} aria-hidden="true" />
        <span className="call-now-text">Call Now</span>
        {/* <span className="call-now-number">{PHONE_NUMBER}</span> */}
      </a>
    </nav>
  );
};

export default Navbar;