import React, { useState, useEffect } from 'react';
import './DiamondHero.css';

const DiamondHero = () => {
  const [videoSource, setVideoSource] = useState('assets/diamondhero.webm');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSource('assets/diamondmobile.mp4');
      } else {
        setVideoSource('assets/diamondhero.mp4');
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="diamond-hero-video-container">
      <video
        className="diamond-hero-video"
        src={videoSource}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default DiamondHero;