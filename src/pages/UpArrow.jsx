import React, { useState, useEffect } from 'react';
import './UpArrow.css'; // Ensure this is the correct path to your CSS file

const UpArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 100) { // Show the up arrow after scrolling 100px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add and remove the event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="up-arrow-icon"
        onClick={scrollToTop} // Add click event handler
      >
        <path d="M12 19V6M5 13l7-7 7 7" />
      </svg>
    )
  );
};

export default UpArrow;
