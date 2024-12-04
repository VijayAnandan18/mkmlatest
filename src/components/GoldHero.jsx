import React from 'react';
import './GoldHero.css';

const GoldHero = () => {
  return (
    <div className="gold-hero-video-container">
      <video
        className="gold-hero-video"
        src="assets/goldhero.webm"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default GoldHero;
