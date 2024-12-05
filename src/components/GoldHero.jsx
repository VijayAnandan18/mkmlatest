import React, { useState, useEffect } from 'react';
import './GoldHero.css';

const GoldHero = () => {
  const [videoSource, setVideoSource] = useState('assets/goldhero.webm');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSource('assets/goldmobile.mp4');
      } else {
        setVideoSource('assets/goldhero.mp4');
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
    <div className="gold-hero-video-container">
      <video
        className="gold-hero-video"
        src={videoSource}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default GoldHero;
