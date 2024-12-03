import React from 'react';
import './SilverHero.css';

const SilverHero = () => {
  return (
    <div className="gold-hero-video-container">
      <video
        className="gold-hero-video"
        src="assets/silverhero.mp4"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default SilverHero;