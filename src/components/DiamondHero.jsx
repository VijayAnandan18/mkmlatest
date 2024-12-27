import React from 'react';
import './DiamondHero.css';

const DiamondHero = () => {
  return (
    <div className="diamond-hero-container">
      <img
        src="/assets/diamondhero.png"
        alt="Diamond Hero Desktop"
        className="diamond-hero-desktop"
      />
      <img
        src="/assets/diamondmobile.png"
        alt="Diamond Hero Mobile"
        className="diamond-hero-mobile"
      />
    </div>
  );
};

export default DiamondHero;
