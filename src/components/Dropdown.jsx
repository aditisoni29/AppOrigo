import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ title, links, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
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

  // Added: Adjust dropdown position dynamically to prevent overflow
  useEffect(() => {
    if (dropdownRef.current && isOpen && !isMobile) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const isOverflowingRight = dropdownRect.right < window.innerWidth;

      // Adjust position to right if it overflows the screen
      setPosition(isOverflowingRight ? 'right' : 'left');
    }
  }, [isOpen, isMobile]);

  // Leveraged handleMouseEnter and handleMouseLeave events to make it dropdown as soon as cursor hovers.
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`${isMobile ? 'w-full' : 'relative z-50'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="text-white font-semibold p-2 hover:text-[#ef8e35] transition-colors duration-300 w-full text-left rounded-md"
      >
        {title}
      </button>
      <div
        className={`${
          isMobile
            ? 'w-full pl-4'
            : `absolute bg-gray-800 rounded-lg shadow-lg min-w-[150px] ${
                position === 'right' ? 'right-0' : 'left-0' // Modified: Dynamic position class
              }`
        } ${
          isOpen
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform -translate-y-2 pointer-events-none'
        } transition-all duration-300 ease-in-out`}
      >
        {isOpen && (
          <div className={`${isMobile ? 'mt-1' : 'p-2 mt-2'}`}>
            {links.map((link, index) => (
              <Link
                key={index}
                to={`/${link.toLowerCase()}`}
                // Moved comment outside the className attribute
                className={`block p-2 hover:bg-black hover:text-[#ef8e35] transition-colors duration-300 ${
                  isMobile ? 'text-gray-300' : 'text-white'
                } rounded-md`} 
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
