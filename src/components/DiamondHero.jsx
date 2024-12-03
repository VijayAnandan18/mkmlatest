import React from 'react';
import './DiamondHero.css';

const DiamondHero = () => {
  return (
    <div className="diamond-hero-video-container">
      <video
        className="diamond-hero-video"
        src="assets/diamondhero.mp4"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default DiamondHero;