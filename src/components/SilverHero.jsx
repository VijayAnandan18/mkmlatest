import React, { useState, useEffect } from 'react';
import './SilverHero.css';

const SilverHero = () => {
  const [videoSource, setVideoSource] = useState('assets/silverhero.webp');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSource('assets/silvermobile.mp4');
      } else {
        setVideoSource('assets/silverhero.mp4');
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
    <div className="silver-hero-video-container">
      <video
        className="silver-hero-video"
        src={videoSource}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default SilverHero;
