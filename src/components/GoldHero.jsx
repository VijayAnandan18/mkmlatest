import React from 'react';
import './GoldHero.css';

const GoldHero = () => {
  return (
    <div className="gold-hero-container">
      <img
        src="/assets/goldhero.png"
        alt="Gold Hero Desktop"
        className="gold-hero-desktop"
      />
      <img
        src="/assets/goldmobile.png"
        alt="Gold Hero Mobile"
        className="gold-hero-mobile"
      />
    </div>
  );
};

export default GoldHero;
