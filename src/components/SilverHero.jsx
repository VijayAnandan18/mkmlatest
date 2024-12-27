import React from 'react';
import './SilverHero.css';

const SilverHero = () => {
  return (
    <div className="silver-hero-container">
      <img
        src="/assets/silverhero.png"
        alt="Silver Hero Desktop"
        className="silver-hero-desktop"
      />
      <img
        src="/assets/silvermobile.png"
        alt="Silver Hero Mobile"
        className="silver-hero-mobile"
      />
    </div>
  );
};

export default SilverHero;

