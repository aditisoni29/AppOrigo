import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Dropdown = ({ title, links, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const [position, setPosition] = useState('left');

  useEffect(() => {
    if (!isMobile) {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobile]);

  // Dynamic position adjustment
  useEffect(() => {
    if (dropdownRef.current && isOpen && !isMobile) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const isOverflowingRight = dropdownRect.right > window.innerWidth - 20;
      setPosition(isOverflowingRight ? 'right' : 'left');
    }
  }, [isOpen, isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`dropdown-container ${isMobile ? 'dropdown-mobile' : 'dropdown-desktop'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`dropdown-trigger ${isOpen ? 'dropdown-trigger-active' : ''}`}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="dropdown-title">{title}</span>
        <ChevronDown 
          className={`dropdown-icon ${isOpen ? 'dropdown-icon-rotated' : ''}`} 
          size={16} 
        />
        <div className="dropdown-trigger-bg"></div>
      </button>

      <div
        className={`dropdown-menu ${isOpen ? 'dropdown-menu-open' : ''} ${
          position === 'right' ? 'dropdown-menu-right' : 'dropdown-menu-left'
        } ${isMobile ? 'dropdown-menu-mobile' : 'dropdown-menu-desktop'}`}
      >
        <div className="dropdown-content">
          <div className="dropdown-header">
            <div className="dropdown-glow"></div>
          </div>
          
          <div className="dropdown-links">
            {links.map((link, index) => (
              <Link
                key={index}
                to={`/${link.toLowerCase()}`}
                className="dropdown-link"
                onClick={() => setIsOpen(false)}
              >
                <div className="dropdown-link-content">
                  <span className="dropdown-link-text">{link}</span>
                  <div className="dropdown-link-arrow">→</div>
                </div>
                <div className="dropdown-link-bg"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;